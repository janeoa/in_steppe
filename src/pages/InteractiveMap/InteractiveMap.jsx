import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Map from '../../assets/Map.png';
import ArrowIcon from '../../assets/icons/Icon_arrow_right2.svg?react';
import AboutUsImg from '../../assets/About_us_img.png';
import MapImg from '../../assets/Map_photo.png';

function InteractiveMap() {
    return (
      <section className='relative w-full overflow-hidden mt-10 lg:mt-13 py-4'>
        {/**Карта*/}
        <img src={Map} alt='Interactive map' className='w-full h-auto object-cover lg:h-full z-0'/>
        {/**Инфо о точке на карте */}
        <div className='lg:absolute bg-white lg:left-8 lg:top-8 lg:bottom-8 lg:z-10 p-3 w-full lg:w-[30%] rounded-lg lg:shadow-lg flex flex-col gap-4 overflow-y-auto'>
          <span><button className='flex items-center gap-2 lg:py-3 lg:px-4 text-[#4E87D0] rounded-md hover:bg-[#cee0f7] transition-colors duration-300 transform active:scale-95'> <ArrowIcon className='items-center scale-x-[-1]'/>Закрыть</button></span>
          {/*Карусель*/}
          <div className='relative rounded-md'>
            <div className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <span className='flex items-center justify-center'>
                <button className="p-3 flex items-center justify-center bg-[#EEF4FC] rounded-md shadow hover:shadow-md active:scale-95 transition transform duration-300">
                    <ArrowIcon className='scale-x-[-1]'/>
                </button>
              </span>
            </div>
            <div className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <span className='flex items-center justify-center'>
                <button className="p-3 flex items-center justify-center bg-[#EEF4FC] rounded-md shadow hover:shadow-md active:scale-95 transition transform duration-300">
                    <ArrowIcon className=''/>
                </button>
              </span>
            </div>
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            initialSlide={1}>
              <SwiperSlide>
                <img
                  src={MapImg}
                  alt="About 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={AboutUsImg}
                  alt="About us"
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={MapImg}
                  alt="About 2"
                  className="w-full h-full  object-cover rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/** Гулаг*/}
          <div className='flex flex-col gap-4 p-4'>
            <h1 className="text-2xl lg:text-3xl font-bold">Гулаг</h1>
            <p className='text-base'>
            Nazarbayev University (NU) is a flagship academic institution in Central Asia with ambitions to achieve global recognition as a top-tier research university. Located in the heart of Eurasia, in Kazakhstan's capital, Astana, NU distinguishes itself through a fully merit-based admission system that seamlessly integrates professor-led teaching and research from a student's very first day as a freshman
            </p>
            <span><button className='flex items-center gap-2 lg:py-3 lg:px-4 text-[#4E87D0] rounded-md hover:bg-[#cee0f7] transition-colors duration-300 transform active:scale-95'>University website <ArrowIcon className='items-center'/></button></span>
          </div>
        </div>
      </section>
    )
};
  
export default InteractiveMap;