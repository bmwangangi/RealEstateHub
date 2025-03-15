import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>

        {/* Menu Icon */}
        <img
          src={assets.menu_icon}
          className='md:hidden w-7 cursor-pointer'
          alt="Menu"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 bg-white transition-all ${
        showMobileMenu ? 'w-full h-screen' : 'w-0 h-0 overflow-hidden'
      }`}>
        <div className='flex justify-end p-6'>
          <img
            src={assets.cross_icon}
            className='w-6 cursor-pointer'
            alt="Close"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
          <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Home</a>
          <a href="#About" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>About</a>
          <a href="#Projects" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Projects</a>
          <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
