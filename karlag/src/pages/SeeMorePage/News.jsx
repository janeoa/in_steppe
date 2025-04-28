import React from 'react';
import Image from '../../assets/Card_IMG.png';
import Arrow_45 from '../../assets/icons/Icon_arrow_45.svg?react';

const articles = [
  {
    title: 'Наши последние новости',
    description:
      'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
  },
  {
    title: 'Важная информация о проекте',
    description:
      'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
  },
  {
    title: 'Предстоящие мероприятия в вашем регионе',
    description:
      'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
  },
];

const BlogPage = () => {
  return (
    <section className="mt-10 lg:mt-20 p-0 lg:p-9">
      {/**Заголовок */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 mb-15">
        <p><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase font-bold'>Наш блог</span></p>
        <h1 className="text-3xl md:text-4xl font-bold">Последние новости и открытия</h1>
        <p className="text-gray-600 max-w-3xl">
          Будьте в курсе последних исследований, открытий и событий, связанных с историей и археологией ГУЛАГа в Казахстане. 
          Исследуйте новые открытия, экспертные мнения, выставки и образовательные инициативы, которые проливают свет на Карлаг 
          и другие советские трудовые лагеря.
        </p>
      </div>
      {/**Карточка для Новостей */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => {
          const article = articles[index % articles.length];
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden relative">
              <img src={Image} alt="Article" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-400">{article.description}</p>
              </div>
              <div className="absolute top-2 right-2">
                <button className="w-8 h-8 flex items-center justify-center bg-[#EEF4FC] rounded-md shadow hover:shadow-md active:scale-95 transition transform duration-150">
                  <Arrow_45 />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPage;
