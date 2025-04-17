import React from 'react';
import Icon1 from '../assets/icons/Icon.svg?react'
import Icon2 from '../assets/icons/Icon-1.svg?react'
import Icon3 from '../assets/icons/Icon-2.svg?react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='bg-white m-0 lg:m-8 rounded-none lg:rounded-2xl px-4 lg:px-6 py-6 z-30'>
            <div className='flex flex-col'>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    {/**Навигация */}
                    <div className='flex flex-col lg:flex-row justify-center lg:justify-start gap-4 text-gray-400 text-base font-medium'>
                        <Link to="/" className="hover:text-[#4E87D0] py-3 px-2">Главная</Link>
                        <Link to="/about" className="hover:text-[#4E87D0] py-3 px-2">О нас</Link>
                        <Link to="/map" className="hover:text-[#4E87D0] py-3 px-2">Карлаг карта</Link>
                        <Link to="/archeology" className="hover:text-[#4E87D0] py-3 px-2">Археология карлага</Link>
                        <Link to="/blog" className="hover:text-[#4E87D0] py-3 px-2">Блог</Link>
                        <Link to="/sources" className="hover:text-[#4E87D0] py-3 px-2">Источники</Link>
                        <Link to="/contacts" className="hover:text-[#4E87D0] py-3 px-2">Контакты</Link>
                    </div>
                    {/**Социальные сети */}
                    <div className='flex gap-3'>
                        <button aria-label="Facebook" className='bg-[#EEF4FC] rounded-md shadow hover:shadow-md p-2 transition-colors duration-300 transform active:scale-95'><Icon1 /></button>
                        <button aria-label="Instagram" className='bg-[#EEF4FC] rounded-md shadow hover:shadow-md p-2 transition-colors duration-300 transform active:scale-95'><Icon2 /></button>
                        <button aria-label="Twitter" className='bg-[#EEF4FC] rounded-md shadow hover:shadow-md p-2 transition-colors duration-300 transform active:scale-95'><Icon3 /></button>
                    </div>  
                </div>     
                <hr className="my-4 border-gray-300" />
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center text-gray-500 text-sm gap-4'>
                    <p>All Rights are reserved️</p>
                    <div className='flex gap-4'>
                        <p className='hover:underline cursor-pointer'>Privacy Policy</p>
                        <p className='hover:underline cursor-pointer'>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;