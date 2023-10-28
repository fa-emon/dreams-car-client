import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../../../assets/advertiseImage/1.jpg'
import image2 from '../../../../assets/advertiseImage/2.jpg'
import image3 from '../../../../assets/advertiseImage/3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Advertise = () => {
    return (
        <div className='mt-6'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-[80vh] object-cover rounded-md brightness-90' src={image1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full h-[80vh] object-cover rounded-md brightness-90' src={image2} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img className='w-full h-[80vh] object-cover rounded-md brightness-90' src={image3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Advertise;