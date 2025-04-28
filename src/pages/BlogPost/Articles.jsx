import Image from '../../assets/Card_IMG.png';
import Arrow_45 from '../../assets/icons/Icon_arrow_45.svg?react';
import ArrowIcon from '../../assets/icons/Icon_arrow_right2.svg?react';
import { Link } from 'react-router-dom';

const RelatedArticles = () => {
  const articles = [
    {
      title: 'Наши последние новости',
      description:
        'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
      image: Image, 
    },
    {
      title: 'Важная информация о проекте',
      description:
        'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
      image: Image,
    },
    {
      title: 'Предстоящие мероприятия в вашем регионе',
      description:
        'В пределах границ Карлага содержалось более 60 000 человек, не считая спецпоселенцев и местного населения.',
      image: Image,
    },

  ];

  return (
    <section className="p-10 hidden lg:block">
      <div className="relative flex flex-col gap-8">
        <div className="flex bg-white rounded-2xl justify-between items-center p-8">
          <h2 className="text-2xl font-bold">Схожие статьи</h2>
          {/**Кнопка на сттаницу SeeMorePage */}
          <Link
            to="/more"
            className="flex items-center gap-2 py-4 px-6 text-[#4E87D0] rounded-lg hover:bg-[#cee0f7] transition-colors duration-300"
          >
            Посмотреть все <ArrowIcon className="items-center" />
          </Link>
        </div>
        {/**Карточка для схожих статей */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden relative">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-8">
                <h3 className="text-md font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
              </div>
              <div className="absolute top-2 right-2">
                <button className="w-8 h-8 flex items-center justify-center bg-[#EEF4FC] rounded-md  shadow hover:shadow-md active:scale-95 transition transform duration-150">
                  <Arrow_45 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
