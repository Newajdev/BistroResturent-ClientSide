

const MenuItem = ({itmes}) => {
    const{name, recipe, image, price }=itmes
    return (
        <div className='flex'>
            <img className='w-28  rounded-b-full rounded-tr-full bg-gray-400 mr-8' src={image} alt="" />
            <div>
                <h1 className='text-xl'>{name} ----------------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-xl text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;