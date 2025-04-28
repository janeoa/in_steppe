import React from 'react';
import HeroImage from '../../assets/HeroImage.png';
import ArrowIcon from '../../assets/icons/Icon_arrow.svg?react';

function Hero() {
  return (
    <section className="mt-20 relative w-full min-h-screen overflow-auto rounded-2xl flex flex-col lg:flex-row scale-[0.95]">
      {/**Картинка на фоне */}
      <img 
        className="hidden lg:block absolute w-full h-full object-cover z-[1]"
        src={HeroImage}
        alt="Hero background"/>
      {/**Информация */}
      <div className="relative z-[2] lg:bg-white/60 backdrop-blur-sm rounded-2xl py-6 px-4 lg:p-8 w-full lg:w-[45%] h-auto flex flex-col justify-start lg:m-8">
        <div className='h-auto lg:h-1/2'>
          <h1 className="text-[#4E87D0] text-4xl font-bold leading-tight">Echoes of the Steppe:</h1>
          <h1 className="text-4xl m-0 font-semibold leading-tight">Kazakhstan’s Gulag History</h1>
          <p className='text-base text-gray-600 mt-2'>Откройте для себя историю ГУЛАГа в Казахстане — его печально известные лагеря, жизнь заключенных и долгосрочные последствия советских репрессий.<span className="text-gray-400"> Изучите подробные отчеты, архивные материалы и исторические сведения, которые проливают свет на это трагическое прошлое.</span></p>
          <button className="hidden lg:inline-flex items-center gap-2 px-6 py-3 mt-5 text-white bg-[#4E87D0] rounded-lg font-medium text-base active:scale-95 transition transform duration-150 hover:bg-[#254194]">Начать исследование <ArrowIcon className="w-[18px] h-[18px]" /> </button>
        </div>
        <p className='hidden lg:flex text-gray-500 text-sm mt-auto'>Создание, использование и восприятие тюрем в бывшем Советском Союзе</p>
      </div>
      <div className="hidden lg:block absolute bottom-4 right-4 text-white text-lg z-[2]"><b>• Название картины</b></div>
      {/**Картинка на телефоне */}
      <img 
        className="block lg:hidden w-full rounded-lg"
        src={HeroImage}
        alt="Hero background"/>
      <div className="block lg:hidden mt-4 text-black text-base px-4">
        <b>• Название картины</b>
      </div>
    </section>
  );
}

export default Hero;
