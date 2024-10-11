import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';

const HeroSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="hero-slider"
        >
            <SwiperSlide aria-label="Sundarban Slide">
                <div className='relative h-[100vh] flex items-center hero-slide hero-slide1'>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='container relative z-10 text-center'>
                        <h1 className='text-4xl sm:text-5xl font-bold text-white drop-shadow-lg'>
                            Dive into the Serenity of Sundarban
                        </h1>
                        <p className='max-w-[700px] mx-auto text-base sm:text-lg text-white drop-shadow-md mt-4'>
                            Explore the world's largest mangrove forest, home to majestic Bengal tigers and exotic wildlife, with breathtaking boat safaris amidst lush greenery.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide aria-label="Angkor Wat Slide">
                <div className='relative h-[100vh] flex items-center hero-slide hero-slide2'>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='container relative z-10 text-center'>
                        <h1 className='text-4xl sm:text-5xl font-bold text-white drop-shadow-lg'>
                            Discover the Charms of Angkor Wat
                        </h1>
                        <p className='max-w-[700px] mx-auto text-base sm:text-lg text-white drop-shadow-md mt-4'>
                            Unravel the mysteries of ancient Khmer civilization as you wander through the awe-inspiring temple complex, adorned with intricate carvings and captivating history.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide aria-label="Santorini Slide">
                <div className='relative h-[100vh] flex items-center hero-slide hero-slide3'>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='container relative z-10 text-center'>
                        <h1 className='text-4xl sm:text-5xl font-bold text-white drop-shadow-lg'>
                            Surrender to the Allure of Santorini
                        </h1>
                        <p className='max-w-[700px] mx-auto text-base sm:text-lg text-white drop-shadow-md mt-4'>
                            Lose yourself in the enchanting beauty of Santorini's azure waters, whitewashed villages, and stunning sunsets, creating timeless memories in this Greek island paradise.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSlider;
