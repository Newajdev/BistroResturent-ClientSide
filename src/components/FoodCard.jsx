import React, { useContext } from 'react';
import PriButton from './PriButton';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';

const FoodCard = ({ item }) => {
    const { _id, name, recipe, image, price } = item
    const { user } = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    const AxiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const hendleAddToCart = id => {
        if (user && user?.email) {
            const UserEmail = user?.email;
            const Item = id
            const CartItem = { UserEmail, Item }

            AxiosSecure.post('/cart', CartItem)
                .then((result) => { console.log(result.data.acknowledged) 
            if (result.data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} is added to the cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()
            }}
            )



console.log(CartItem);
        }
        else {
    Swal.fire({
        title: "Your Not loged in yet",
        text: "You have to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
    }).then((result) => {
        if (result.isConfirmed) {
            Navigate('/login', { state: { from: location } })
        }
    });
}


    }
return (
    <div className="card bg-[#F3F3F3] w-96 shadow-sm">
        <figure className='h-[300px]'>
            <img className='h-full'
                src={image}
                alt="Shoes" />
        </figure>
        <p className='bg-[#BB8506] text-white absolute right-0 mr-3 mt-3 px-3 py-2 rounded-2xl text-xl font-semibold'>${price}</p>
        <div className="card-body text-center px-10">
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center mt-6">
                <PriButton ClieckHendler={() => hendleAddToCart(_id)} title={'Add to Cart'} brdrColor={'border-b-[#BB8506]'} txtColor={'text-[#BB8506]'} hoverbg={'bg-[#1F2937]'}></PriButton>
            </div>
        </div>
    </div>
);
};

export default FoodCard;