import React from 'react';
import MainSVG from '../../assets/Main_svg.svg?react';
import Arrow_45 from '../../assets/icons/Icon_arrow_45.svg?react';

function Sources() {
  const museums = [
    {
      name: 'Национальный Музей Республики Казахстан',
      location: 'Астана, Акмолинская область, Казахстан',
    },
    {
      name: 'Карагандинский Областной историко-краеведческий музей',
      location: 'Караганда, Карагандинская область, Казахстан',
    },
    {
      name: 'Музей памяти жертв политических репрессий посёлка Долинка',
      location: 'Долинка, Карагандинская область, Казахстан',
    },
    {
      name: 'Жанааркинский районный историко-краеведческий музей имени Сакена Сейфуллина',
      location: 'Астана, Акмолинская область, Казахстан',
    },
    {
      name: 'Жанаарка, Улытауская область, Казахстан',
      location: 'Астана, Акмолинская область, Казахстан',
    },
    {
      name: 'Сахаровский центр',
      location: 'Москва, Россия',
    },
  ];
    return (
      <section className='mt-10 lg:mt-20 p-0 lg:p-9'>
        <div className='flex flex-col gap-16'>
          {/** Ресурсы */}
          <div className='relative bg-white lg:rounded-xl flex flex-col items-center justify-center py-14 px-4 lg:px-18 overflow-hidden'>
            <div className='flex flex-col items-center justify-center text-center w-full lg:w-2/3 gap-4'>
              <p><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase font-bold'>Ресурсы</span></p>
              <h1 className='text-2xl font-bold lg:text-3xl'>Ресурсы и ссылки: архивы, исследования и исторические отчеты</h1>
              <p>Изучите источники, лежащие в основе наших исследований ГУЛАГа в Казахстане. Наша информация собрана из исторических архивов, научных исследований, археологических находок, свидетельств выживших и музейных коллекций. Откройте для себя книги, статьи, документы и экспертные анализы, которые дают более глубокое понимание этой важной истории</p>
            </div>
            <MainSVG className="hidden lg:block absolute object-cover top-[30%] w-[50%] h-auto z-0"/>
          </div>
          {/** Карточки с местами */}
          <div className='p-4 lg:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {museums.map((museum, index) => (
              <div key={index} className='bg-white rounded-lg p-6 flex flex-col justify-between gap-10'>
                {/**Name */}
                <div className='flex justify-between items-start gap-4'>
                  <h2 className="text-base lg:text-lg">{museum.name}</h2>
                  <button className="p-3 flex items-center justify-center bg-[#EEF4FC] rounded-md shadow hover:shadow-md active:scale-95 transition transform duration-300">
                    <Arrow_45 />
                  </button>
                </div>
                {/**Location */}
                <p className="text-sm text-[#666666]">{museum.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};
  
export default Sources;