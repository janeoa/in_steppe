import React from 'react';
import PartnerLogo1 from '../../assets/Partner_logo.png';
import PartnerLogo2 from '../../assets/Partner_logo_2.png';
import PartnerLogo3 from '../../assets/Partner_logo_3.png';

const logos = [
    PartnerLogo1,
    PartnerLogo2,
    PartnerLogo3,
    PartnerLogo1,
    PartnerLogo2,
    PartnerLogo3
];

const LogoCard = ({ src, alt }) => (
    <div className="bg-white p-4 rounded-xl w-25 h-25 lg:w-40 lg:h-40 flex items-center justify-center shadow">
      <img
        src={src}
        alt={alt}
        className="object-contain max-w-full max-h-full"
      />
    </div>
);

function Partners(){
    return(
        <section className='px-9 py-16'>
            <div className='max-w-7xl mx-auto flex flex-col justify-center items-center gap-8'>
                {/**partners header */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <p><span className='bg-[#CBDEF7] text-[#4E87D0] rounded-2xl px-2 py-1 uppercase font-bold'>Наши партнеры</span></p>
                    <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>Мы работаем с лучшими партнерами</h1>
                </div>
                {/**partners logos */}
                <div className="flex flex-wrap justify-center gap-6">
                  {logos.map((src, index) => (
                    <LogoCard key={index} src={src} alt={`Partner logo ${index + 1}`} />
                  ))}
                </div>
            </div>
        </section>
    )
};
export default Partners;