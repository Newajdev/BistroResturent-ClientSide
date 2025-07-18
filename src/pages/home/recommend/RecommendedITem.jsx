import React from 'react';

const RecommendedITem = () => {
    return (
        <div>
            <div className="card bg-[#F3F3F3] w-96 shadow-sm">
                    <figure className='h-[300px]'>
                        <img className='w-full'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center px-10">
                        <h2 className="text-2xl font-semibold mb-2">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center mt-6">
                            <button className='text-xl font-medium uppercase btn text-center text-[#BB8506] border-b-3 border-b-[#BB8506] rounded-2xl hover:bg-[#1F2937] hover:border-none'>add to cart</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RecommendedITem;