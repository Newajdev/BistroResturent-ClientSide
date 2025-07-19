
import SectionHeader from '../../../components/SectionHeader'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import { useState } from 'react';
import Reviews from './Reviews';
import useReview from '../../../hooks/useReview';

const Testimonial = () => {
    const [reviews] = useReview()
    
    // const [Testimonials, setTestimonials] = useState([1,2,3,4,5,6])
    return (
        <div className='mb-28'>
            <SectionHeader subTitle={'What Our Clients Say'} Title={'TesTimonials'}></SectionHeader>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(testimonil => <SwiperSlide><Reviews key={testimonil._id} testimonil={testimonil}></Reviews></SwiperSlide>)
                }
                
            </Swiper>

        </div>
    );
};

export default Testimonial;