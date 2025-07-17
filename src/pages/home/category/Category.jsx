import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionHeader from '../../../components/SectionHeader'

import slider01 from '../../../assets/home/slide1.jpg'
import slider02 from '../../../assets/home/slide2.jpg'
import slider03 from '../../../assets/home/slide3.jpg'
import slider04 from '../../../assets/home/slide4.jpg'
import slider05 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div className='my-12'>
            <div>
                <SectionHeader subTitle={'From 11:00am to 10:00pm'} Title={'ORDER ONLINE'}></SectionHeader>
                </div>        
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider01} alt="" className='w-full' />
                    <h3 className='text-4xl font-bold uppercase text-center -mt-32 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider02} alt="" className='w-full' />
                    <h3 className='text-4xl font-bold uppercase text-center -mt-32 text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider03} alt="" className='w-full'/>
                    <h3 className='text-4xl font-bold uppercase text-center -mt-32 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider04} alt="" className='w-full'/>
                    <h3 className='text-4xl font-bold uppercase text-center -mt-32 text-white'>Dessert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider05} alt="" className='w-full'/>
                    <h3 className='text-4xl font-bold uppercase text-center -mt-32 text-white'>Salads</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;