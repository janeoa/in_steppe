import React from 'react';
import ArrowIcon from '../../assets/icons/Icon_arrow_right2.svg?react';
import Arrow_45 from '../../assets/icons/Icon_arrow_45.svg?react';
import CardImage from '../../assets/Card_IMG.png';

function News(){
    const news = [
        {
          title: 'Наши последние новости',
          description:
            'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
          image: CardImage, 
        },
        {
          title: 'Наши последние новости',
          description:
            'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
          image: CardImage,
        },
        {
          title: 'Наши последние новости',
          description:
            'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
          image: CardImage,
        },
    
    ];
    return(
        <section className='relative p-4 md:p-8'>
            <div className='flex flex-col gap-4'>
                {/** News Header */}
                <div className='flex flex-col lg:flex-row justify-between'>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold'>Наши последние новости</h1>
                    <button className='hidden md:flex items-center gap-2 py-3 px-4 text-[#4E87D0] rounded-md hover:bg-[#cee0f7] transition-colors duration-300 active:scale-95 transform'>Посмотреть все <ArrowIcon className='items-center'/></button>
                </div>
                {/** News Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {news.map((article, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden relative">
                      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                      <div className="p-8">
                        <h3 className="text-md font-semibold mb-2">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.description}</p>
                      </div>
                      <div className="absolute top-2 right-2">
                        <button className="w-8 h-8 flex items-center justify-center bg-[#EEF4FC] rounded-md  shadow hover:shadow-lg active:scale-95 transition transform duration-150">
                          <Arrow_45/>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className='flex md:hidden justify-center items-center gap-2 py-3 px-4 text-[#4E87D0] rounded-md hover:bg-[#cee0f7] transition-colors duration-300 transform'>Посмотреть все <ArrowIcon className='items-center'/></button>
            </div>
        </section>
    )
}
export default News;