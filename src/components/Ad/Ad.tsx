import React from 'react';
import AdItem from './AdItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Ad: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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

  const cards = [
    {
      image: 'images/burger-image.jpg',
      title: 'ФудФест',
    },
    {
      image: 'images/american-pizza-image.jpg',
      title: 'American Pizza',
    },
    {
      image: 'images/roma-pizza-image.jpg',
      title: 'Roma Pizza',
    },
    {
      image: 'images/pet-image.jpg',
      title: 'Для питомцев',
    },
    {
      image: 'images/express24-image.jpg',
      title: 'Только в Express24',
    },
    {
      image: 'images/breakfast-image.jpg',
      title: 'Вкусные завтраки',
    },
  ];

  return (
    <div className='px-4 pt-4 lg:px-32 lg:pt-14'>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className='px-2'>
            <AdItem {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Ad;
