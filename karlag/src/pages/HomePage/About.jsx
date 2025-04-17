import React, { useState } from 'react';
import MainSVG from '../../assets/Main_svg.svg?react';
import Video from '../../assets/Video.png';
import AboutImage from '../../assets/About_Image.png';
import Quotes from '../../assets/Quotes.svg?react';
import WatchVideoIcon from '../../assets/icons/Watch_video.svg?react';

function About(){
  const [isOpen, setIsOpen] = useState(false);

  return(
      <section className='relative p-4 lg:p-8 lg:m-8 m-0 bg-white lg:rounded-2xl'>
        <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 my-4'>
          {/*About Content*/}
          <div className='flex flex-col z-1 items-start justify-between w-full lg:w-[45%] gap-6'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <p><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase font-bold'>What is Karlag</span></p>
                <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>Карлаг, Гулаг в Казахстане</h1>
              </div>
              <p>Карлаг, расположенный недалеко от Караганды, является одним из самых значительных и долговечных лагерных комплексов в советской системе ГУЛАГа.</p>
              <p>Действовавший с 1931 по 1959 год, он  содержал ошеломляющее количество заключенных,  в пределах его границ содержалось более 60 000 человек, не считая спецпоселенцев и местного населения. </p>
            </div>
            {/* Видео на компьютере */}
            <div className='hidden md:block w-[80%]' onClick={() => setIsOpen(true)}>
              <p>Название видео</p>
              <div className='aspect-video pt-1'>
                <video controls poster={Video} className='object-cover w-full rounded-xl'></video>
              </div>
            </div>
            {/* Видео на телефоне */}
            <div className="block md:hidden w-full">
              <button 
                onClick={() => setIsOpen(true)} 
                className="flex items-center justify-center w-full gap-2 border border-[#4E87D0] text-[#4E87D0] px-6 py-4 rounded-lg"
                >
                <WatchVideoIcon />
                <span>Посмотреть видео</span>
              </button>
            </div>
          </div>
          <MainSVG className="hidden lg:block absolute object-cover bottom-0 left-0 w-[45%] h-auto z-0"/>
          {/*About Images Content*/}
          <div className='flex flex-col lg:flex-row justify-between gap-6 w-full lg:w-[55%] mt-8 lg:mt-0 items-center'>
            <div className='flex flex-col gap-4 w-full lg:w-1/2'>
              <img src={AboutImage} alt='About image' className='rounded-lg lg:rounded-xl w-full h-auto object-cover'/>
              <div className='relative rounded-2xl bg-[#EEF4FC] p-6'>
                <Quotes className="absolute object-cover left-0 top-0 z-0 pointer-events-none"/>
                <p className='relative z-10'>В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения. </p>
              </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-col gap-4 w-full lg:w-1/2'>
              <div className='relative rounded-2xl bg-[#EEF4FC] p-6'>
                <Quotes className="absolute object-cover left-0 top-0 z-0 pointer-events-none"/>
                <p className='relative z-10'>Карлаг является одним из самых значительных и долговечных лагерных комплексов в советской системе ГУЛАГа. </p>
              </div>
              <img src={AboutImage} alt='About image' className='rounded-lg lg:rounded-xl w-full h-auto object-cover'/>
            </div>
          </div>
        </div>
        {/* Modal with video */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
            <div className="bg-white rounded-xl p-4 max-w-2xl w-full">
              <div className="aspect-video">
                <video controls autoPlay className="w-full h-full object-cover rounded-lg">
                  <source src=""/>
                </video>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-[#4E87D0] border border-[#4E87D0] px-4 py-2 rounded-xl w-full hover:bg-[#254194] hover:text-white"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </section>
      
  )
};

export default About;