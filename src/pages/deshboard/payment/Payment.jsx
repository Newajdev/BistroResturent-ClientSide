import { loadStripe } from '@stripe/stripe-js';
import SectionHeader from '../../../components/SectionHeader'
import CheckOutFrom from './CheckOutFrom';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    return (
        <div>
            <SectionHeader subTitle={" Do "} Title={"Payment"}></SectionHeader>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;