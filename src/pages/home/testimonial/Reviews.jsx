import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Qutaiton from '../../../../src/assets/icon/quote-left 1.png'
const Reviews = ({testimonil}) => {

    const {name, details, rating} =testimonil;
    return (
        <div className='flex flex-col gap-6 justify-center items-center px-28 text-center'>
            <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                readOnly
            />
            <img src={Qutaiton} alt="" />
            <p className='text-xl'>{details}</p>
            <h3 className='text-3xl text-[#CD9003]'>{name}</h3>
        </div>
    );
};

export default Reviews;