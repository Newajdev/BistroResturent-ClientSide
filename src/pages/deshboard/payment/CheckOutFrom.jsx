import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useCart from '../../../hooks/useCart';
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutFrom = () => {
    const AxiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [Cart, refetch] = useCart()
    const TotalPrice = Cart.reduce((Total, items) => Total + (items.price * items.quantity), 0)
    const { user } = useAuth()
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        AxiosSecure.post('/create-payment-intent', { price: TotalPrice })
            .then(res => {

                setClientSecret(res.data.clientSecret)
            }
            )
    }, [AxiosSecure, TotalPrice])

    const hendleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {

            setError(error.message)

        } else {
            console.log(paymentMethod);

            setError('')

        }

        // confirm payment
        const { paymentIntent, error: confirmerror } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'

                }
            }
        })

        if (confirmerror) {
            // console.log("confirm Error: ", confirmerror);

        } else {
            // console.log("Payment Intent: ", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log("Transaction Id: ", paymentIntent.id);
                setTransactionId(paymentIntent.id)

                const ShoppingCart = await AxiosSecure(`/carts/${user.email}`)
                const cart = ShoppingCart.data

                // now save the payment history on the database
                const payment = {
                    email: user.email,
                    price: TotalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc data convert.usemoment js
                    cartids: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.Item),
                    status: 'Pending'
                }

                const res = await AxiosSecure.post('/payments', payment)
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Successfull",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    refetch()
                }



            }
        }


    }
    return (
        <form onSubmit={hendleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-red-600">{error}</p>
            <button type="submit" className="btn btn-primary px-10 text-center mt-6" disabled={!stripe || !clientSecret}>
                Pay
            </button>

            {transactionId && <p className="text-green-600">Your Transaction Id is: {transactionId}</p>}
        </form>
    );
};

export default CheckOutFrom;