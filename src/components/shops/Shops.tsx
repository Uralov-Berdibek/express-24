import React from 'react';
import ShopItem from './ShopsItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Shops: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const stores = [
    {
      image: 'images/shops-1.jpg',
      name: "Bob's Market",
      category: 'Продукты',
    },
    {
      image: 'images/shops-2.jpg',
      name: 'Full Cart',
      category: 'Продукты',
    },
    {
      image: 'images/shops-3.jpg',
      name: 'Хоттабыч',
      category: 'Продукты',
    },
    {
      image: 'images/shops-4.jpg',
      name: 'Pharm ZZZ',
      category: 'Здоровье',
    },
    {
      image: 'images/shops-5.jpg',
      name: 'La Sposa Цветы',
      category: 'Цветы',
    },
  ];

  return (
    <div className='w-full px-4 md:px-32 pt-14'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-5xl font-bold'>Магазины</h2>
        <a href='#' className='md:flex hidden items-center text-gray-500 text-xl'>
          Показать все
          <MdOutlineKeyboardArrowRight className='text-3xl' />
        </a>
      </div>
      <div className='mx-auto'>
        <Slider {...settings}>
          {stores.map((store, index) => (
            <div key={index} className='px-2'>
              <ShopItem {...store} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shops;
