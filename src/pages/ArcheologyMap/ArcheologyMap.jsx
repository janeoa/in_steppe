import { useState } from 'react';
import Quotes from '../../assets/QuotesBlue.svg?react';
import MapImg from '../../assets/Map_photo.png';
import Archeology from '../../assets/Archeology.png';
import Archeology2 from '../../assets/Archeology2.png';

function ArcheologyMap() {
  const [activeTab, setActiveTab] = useState('archeology');

  const tabs = [
    { id: 'archeology', label: 'Archeology of Karlag' },
    { id: 'memories', label: 'Karlag Memories' },
    { id: 'maps', label: 'Historical Maps' },
  ];
  return (
    <section className="mt-20 p-4 lg:p-9">
      <div className='flex flex-col gap-6'>
        {/* Заголовок */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-col justify-center items-center text-center w-full lg:w-2/3 gap-4 ">
            <p><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase font-bold'>Археология Карлага</span></p>
            <h1 className='text-2xl font-bold lg:text-3xl'>
              Раскопки забытых следов советских репрессий
            </h1>
            <p>
            Исследуйте археологические находки Карлага, одного из крупнейших советских трудовых лагерей в Казахстане. Узнайте, как раскопки и исследования раскрывают скрытые следы жизни заключенных, лагерную инфраструктуру и долгосрочное влияние принудительного труда.<span className="text-gray-400"> Откройте для себя артефакты, исторические места и экспертные анализы, которые проливают свет на прошлое Карлага</span>
            </p>
          </div>
          {/* Навигация */}
          <div className="bg-[#f4f8ff] p-2 rounded-2xl w-full lg:w-2/3">
            <div className="flex justify-between gap-5 border-b-1 border-[#EFF1F5]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 text-center py-2 text-sm lg:font-medium transition-all ${
                    activeTab === tab.id
                      ? 'text-[#4E87D0] border-b-2 border-[#4E87D0]'
                      : 'text-[#A7A9AB]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          {/* Изображение */}
          <img
            src={MapImg}
            alt="Brick ruins"
            className="rounded-xl object-cover w-full lg:h-120 h-50 col-span-2"
          />
          {/* Контейнер с текстом */}
          <div className="relative bg-white rounded-xl p-6 flex flex-col justify-between lg:h-120 h-50">
            <Quotes className="absolute object-cover left-0 top-0 z-0 pointer-events-none" />
            <Quotes
              className="absolute right-0 bottom-0 z-0 pointer-events-none transform rotate-180"
            />
            <div className='relative z-10 flex flex-col justify-between h-full p-4'>
              <h1 className="text-3xl font-bold">Aktailak village</h1>
              <p>
                Aktailak is a village located in the Zhana-Arka district of Ulytau Oblast. It served as the
                administrative centre of the 8th subdivision of the Karlag camp system for a long period
                (1931–1959).
              </p>
            </div>
          </div>
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={Archeology}
              alt="Excavation group"
              className="object-cover w-full lg:h-120 h-90"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={Archeology}
              alt="Excavation group"
              className="object-cover w-full lg:h-120 h-90"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={Archeology}
              alt="Excavation group"
              className="object-cover w-full lg:h-120 h-90"
            />
          </div>
        </div>

        {/* Последняя секция */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          <div className="relative bg-white rounded-xl p-6 flex items-center lg:h-120 h-50">
            <Quotes className="absolute object-cover left-0 top-0 z-0 pointer-events-none" />
            <Quotes
              className="absolute object-cover right-0 bottom-0 z-0 pointer-events-none transform rotate-180"
            />
            <p className="text-lg relative z-10 p-4">
              Aktailak represents a camp that was rural and held common prisoners as well as political
              prisoners. Historical records examined by the student team indicate that more than 2,000
              prisoners worked in irrigation, dairy farming, and livestock farming at the site. The ruins of
              the camp are still visible today, marking it a valuable site for archaeological research.
            </p>
          </div>
          <img
            src={Archeology2}
            alt="People digging"
            className="rounded-xl object-cover w-full lg:h-120 h-50 col-span-2"
          />
        </div>
      </div>
    </section>
  )
};

export default ArcheologyMap;
