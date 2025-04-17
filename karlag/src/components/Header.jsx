import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/Karlag.svg?react';
import MenuIcon from '../assets/icons/Icon_menu.svg?react';

{/**Навигация для компьютера */}
function CustomNavLink({ to, end, children }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `inline-block relative py-3 px-2 font-medium transition-all duration-300
         ${isActive ? 'text-[#4E87D0]' : 'text-gray-400'}
         after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#4E87D0] after:transition-all after:duration-300
         after:left-1/2 after:transform after:-translate-x-1/2 after:w-0
         hover:text-[#4E87D0] hover:after:w-full
         ${isActive ? 'after:w-full' : ''}`
      }
    >
      {children}
    </NavLink>
  );
}
{/**Навигация для телефона */}
function MobileNavLink({ to, end, children, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `inline-block relative py-3 px-2 font-medium transition-colors duration-300 ${
          isActive
            ? 'text-[#4E87D0] border-b-2 border-[#4E87D0]'
            : 'text-gray-400'
        } hover:text-[#4E87D0]`
      }
    >
      {children}
    </NavLink>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className='px-5 py-3 flex items-center justify-between'>
        <Link to="/" className='flex-shrink-0'>
          <Logo />
        </Link>
        {/**Навигация */}
        <nav className='hidden lg:flex gap-6 text-base font-medium text-gray-400'>
          <CustomNavLink to="/" end>Главная</CustomNavLink>
          <CustomNavLink to="/about">О нас</CustomNavLink>
          <CustomNavLink to="/map">Карлаг карта</CustomNavLink>
          <CustomNavLink to="/archeology">Археология Карлага</CustomNavLink>
          <CustomNavLink to="/blog">Блог</CustomNavLink>
          <CustomNavLink to="/sources">Источники</CustomNavLink>
          <CustomNavLink to="/contacts">Контакты</CustomNavLink>
        </nav>
        {/**Смена языка */}
        <div className='hidden lg:flex items-center'>
          <button className='hover:bg-[#d5e3f5] text-[#4E87D0] text-base px-4 py-2 rounded-md transition-colors duration-300 transform active:scale-95'>Kaz</button>
          <button className='hover:bg-[#d5e3f5] text-[#4E87D0] text-base px-4 py-2 rounded-md transition-colors duration-300 transform active:scale-95'>Ru</button>
          <button className='hover:bg-[#d5e3f5] text-[#4E87D0] text-base px-4 py-2 rounded-md transition-colors duration-300 transform active:scale-95'>Eng</button>
        </div>
      </div>
      {/**Иконка меню для телефона */}
      <button className="bg-[#4E87D0] lg:hidden absolute right-5 top-2 p-2 rounded-lg" aria-label="Открыть меню" onClick={toggleMenu}>
        <MenuIcon className='w-6 h-6'/>
      </button>
      {isMenuOpen && (
        <div className="lg:hidden px-5 pb-4 space-y-4">
          {/**Навигация */}
          <nav className='flex flex-col gap-2 text-gray-400 text-base font-medium'>
            <MobileNavLink to="/" end onClick={toggleMenu}>Главная</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>О нас</MobileNavLink>
            <MobileNavLink to="/map" onClick={toggleMenu}>Карлаг карта</MobileNavLink>
            <MobileNavLink to="/archeology" onClick={toggleMenu}>Археология карлага</MobileNavLink>
            <MobileNavLink to="/blog" onClick={toggleMenu}>Блог</MobileNavLink>
            <MobileNavLink to="/sources" onClick={toggleMenu}>Источники</MobileNavLink>
            <MobileNavLink to="/contacts" onClick={toggleMenu}>Контакты</MobileNavLink>
          </nav>
          {/**Смена языка */}
          <div className="flex gap-4 pt-2">
            <button className='text-[#4E87D0] text-base px-4 py-2 rounded-lg transition-colors duration-300 transform active:scale-95'>Kaz</button>
            <button className='text-[#4E87D0] text-base px-4 py-2 rounded-lg transition-colors duration-300 transform active:scale-95'>Ru</button>
            <button className='text-[#4E87D0] text-base px-4 py-2 rounded-lg transition-colors duration-300 transform active:scale-95'>Eng</button>
          </div>
        </div>
      )}
    </header>
  )
};

export default Header;