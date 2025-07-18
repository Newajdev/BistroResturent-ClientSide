import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Qutaiton from '../../../../src/assets/icon/quote-left 1.png'
const Reviews = () => {
    return (
        <div className='flex flex-col gap-6 justify-center items-center px-28 text-center'>
            <Rating
                style={{ maxWidth: 180 }}
                value={3}
                readOnly
            />
            <img src={Qutaiton} alt="" />
            <p className='text-xl'>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <h3 className='text-3xl text-[#CD9003]'>JANE DOE</h3>
        </div>
    );
};

export default Reviews;