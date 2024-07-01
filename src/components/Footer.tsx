import React from 'react';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-100 text-gray-400 mt-12 md:mt-24 lg:mt-36'>
      <div className='w-full px-4 md:px-8 lg:px-16 py-14 mx-auto max-w-[1670px]'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <nav className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-xl font-semibold'>
              <a href='#' className='hover:underline'>
                О нас
              </a>
              <a href='#' className='hover:underline'>
                Контакты
              </a>
              <a href='#' className='hover:underline'>
                Пользовательское соглашение
              </a>
            </nav>
            <div className='mt-4 md:mt-0 flex items-center space-x-2 text-xl font-semibold'>
              <span>Служба поддержки:</span>
              <a href='tel:+998712004001' className='text-gray-400 underline text-xl font-semibold'>
                +998 71 200 40 01
              </a>
            </div>
          </div>
          <div className='flex items-center space-x-4 md:ml-auto'>
            <a href='#'>
              <FaInstagram className='text-xl' />
            </a>
            <a href='#'>
              <FaFacebookF className='text-xl' />
            </a>
            <a href='#'>
              <FaTelegramPlane className='text-xl' />
            </a>
            <span className='text-xl font-semibold'>© 2024 Express24</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
