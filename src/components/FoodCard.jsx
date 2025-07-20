import React from 'react';
import PriButton from './PriButton';

const FoodCard = ({item}) => {
    const {name,recipe,image, price} = item
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
                    <PriButton title={'Add to Cart'} brdrColor={'border-b-[#BB8506]'} txtColor={'text-[#BB8506]'}  hoverbg={'bg-[#1F2937]'}></PriButton>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;