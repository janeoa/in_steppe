import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AboutUsImg from '../../assets/About_us_img.png';
import AboutImage from '../../assets/About_Image.png';
import ArrowIcon from '../../assets/icons/Icon_arrow_right2.svg?react';

function AboutUs() {
  const [activeTab, setActiveTab] = useState('nazarbayev');
    return (
      <section className='mt-8 lg:mt-15 py-5 lg:p-9'>
        <div className='flex flex-col lg:flex-row justify-between bg-white lg:rounded-2xl py-8 px-4 lg:p-10 gap-12'>
          {/**Tab информация */}
          <div className='flex flex-col gap-8 w-full lg:w-1/2'>
            {/**Навигация */}
            <div className='flex justify-center gap-5 border-b-1 border-[#EFF1F5]'>
              <button
                onClick={() => setActiveTab('nazarbayev')}
                className={`py-3 w-1/2 ${
                  activeTab === 'nazarbayev' ? 'text-[#4E87D0] border-b-2 border-[#4E87D0]' : 'text-[#A7A9AB]'
                }`}
              >
                Nazarbayev University
              </button>
              
              <button
                onClick={() => setActiveTab('karaganda')}
                className={`py-3 w-1/2  ${
                  activeTab === 'karaganda' ? 'text-[#4E87D0] border-b-2 border-[#4E87D0]' : 'text-[#A7A9AB]'
                }`}
              >
                Karaganda State University
              </button>
            </div>
            {/**Текст для таба */}
            <div className='flex flex-col gap-4 lg:pr-40'>
              {activeTab === 'nazarbayev' && (
                <div className='flex flex-col gap-4'>
                  <h1 className="text-2xl lg:text-3xl font-bold">Nazarbayev University</h1>
                  <p className='text-base'>
                    Nazarbayev University (NU) is a flagship academic institution in Central Asia with ambitions to achieve global recognition as a top-tier research university. Located in the heart of Eurasia, in Kazakhstan's capital, Astana, NU distinguishes itself through a fully merit-based admission system that seamlessly integrates professor-led teaching and research from a student's very first day as a freshman.
                  </p>
                  <p className='text-base'>
                    NU is more than just a novelty; it is a higher-education institution dedicated to equipping graduates with the skills they need to thrive in an era of globalization and technological advancement.
                  </p>
                  <span><button className='flex items-center gap-2 lg:py-3 lg:px-4 text-[#4E87D0] rounded-md hover:bg-[#cee0f7] transition-colors duration-300 transform active:scale-95'>University website <ArrowIcon className='items-center'/></button></span>
                </div>
              )}

              {activeTab === 'karaganda' && (
                <div className='flex flex-col gap-4'>
                  <h1 className="text-2xl lg:text-3xl font-bold">Karaganda State University</h1>
                  <p className='text-base'>
                  Karaganda State University (KSU), being a classical university, has an important social and cultural mission. According to the traditions of classical universities, the university maintains a high level and fundamental character of higher education. Karaganda State University is one of the leaders in education, science and culture of Kazakhstan.
                  </p>
                  <p className='text-base'>
                  The prestige of Karaganda State University named after E.A. Buketov is confirmed by international cooperation. Different public universities, home and foreign institutes work as its partners.
                  </p>
                  <span><button className='flex items-center gap-2 lg:py-3 lg:px-4 text-[#4E87D0] rounded-md hover:bg-[#cee0f7] transition-colors duration-300 transform active:scale-95'>University website <ArrowIcon className='items-center'/></button></span>
                </div>
              )}
            </div>
          </div>
          {/**Картинки */}
          {/* Карусель — показывается только на телефоне */}
          <div className="block md:hidden pt-10">
            <Swiper 
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              initialSlide={1} 
              className="h-[250px]">
              <SwiperSlide>
                <img
                  src={AboutImage}
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
                  src={AboutImage}
                  alt="About 2"
                  className="w-full h-full  object-cover rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Верстка для компьютера*/}
          <div className='hidden md:flex flex-col items-center gap-4 w-1/2'>
              <img
                src={AboutUsImg}
                alt='About us image'
                className='rounded-lg w-full object-cover'
              />
              <div className='flex gap-4 w-full'>
                <img
                  src={AboutImage}
                  alt='About image'
                  className='w-1/2 h-auto aspect-square rounded-lg object-cover'
                />
                <img
                  src={AboutImage}
                  alt='About image'
                  className='w-1/2 h-auto aspect-square rounded-lg object-cover'
                />
              </div>
          </div>
        </div>
      </section>
    )
  };
  
  export default AboutUs;