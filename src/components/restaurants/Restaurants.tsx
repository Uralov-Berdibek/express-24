import React from 'react';
import Category from './Category';
import RestaurantItem from './RestaurantsItem';
import { IoIosArrowDown } from 'react-icons/io';
import DrinkMenu from './DrinkMenu';

const restaurants = [
  {
    image: 'images/res-1.jpg', // replace with actual image path
    name: 'Мясоед Pizza & BBQ',
    category: 'Fast Food · Пиццерия · Новинки · Бургерная',
    isNew: true,
  },
  {
    image: 'images/res-2.jpg', // replace with actual image path
    name: 'ДОДО ПИЦЦА',
    category: 'Пиццерия · Fast Food · Акции',
    rating: '4.8',
  },
  {
    image: 'images/res-3.jpg', // replace with actual image path
    name: 'Мясоед - Новый Фермер',
    category: 'Узбекская',
    rating: '4.1',
  },
  {
    image: 'images/res-4.jpg', // replace with actual image path
    name: 'Navvat',
    category: 'Азиатская · Европейская',
    rating: '4.5',
  },
  {
    image: 'images/res-5.jpg', // replace with actual image path
    name: 'Bon!',
    category: 'Кофейня · Европейская · Десерты · Мороженое',
    rating: '4.7',
  },
  {
    image: 'images/res-6.jpg', // replace with actual image path
    name: 'Суши Бум',
    category: 'Азиатская',
    rating: '4.6',
  },
  // Add more restaurant data here as needed
];

const restaurantsTwo = [
  {
    image: 'images/res-7.jpg', // replace with actual image path
    name: 'Sushi Market Broadway',
    category: 'Новинки · Азиатская · Акции',
    rating: '4.4',
  },
  {
    image: 'images/res-8.jpg', // replace with actual image path
    name: 'Московская Пицца',
    category: 'Пиццерия · Фаст Фуд',
    rating: '4.6',
  },
  {
    image: 'images/res-9.jpg', // replace with actual image path
    name: 'Tims Coffee and Roastery',
    category: 'Кофейня · Европейская · Десерты',
    rating: '4.6',
  },
  {
    image: 'images/res-10.jpg', // replace with actual image path
    name: 'Nomdor somsa va osh markazi',
    category: 'Узбекская',
    rating: '4.6',
  },
  {
    image: 'images/res-11.jpg', // replace with actual image path
    name: 'B&B.',
    category: 'Кофейня · Европейская',
    isNew: true,
  },
  {
    image: 'images/res-12.jpg', // replace with actual image path
    name: 'Apexpizza',
    category: 'Пиццерия',
    rating: '4.7',
  },
  {
    image: 'images/res-13.jpg', // replace with actual image path
    name: 'KFC',
    category: 'Fast Food · Популярные',
    rating: '4.7',
  },
  {
    image: 'images/res-14.jpg', // replace with actual image path
    name: 'Дустлар',
    category: 'Узбекская',
    rating: '4.7',
  },
  {
    image: 'images/res-15.jpg', // replace with actual image path
    name: 'FRETTA',
    category: 'Кофейня · Европейская',
    rating: '4.6',
  },
];

const drinks = [
  { image: 'images/drink-1.jpg', name: 'Персиковый Айс Ти', size: 'L', price: 35000 },
  { image: 'images/drink-2.jpg', name: 'Айс Американо', price: 20000 },
  { image: 'images/drink-3.jpg', name: 'Айс Латте', size: 'L', price: 35000 },
  { image: 'images/drink-4.jpg', name: 'Тархун-киви', size: '0.5 л', price: 35000 },
  { image: 'images/drink-5.jpg', name: 'Айс Мокка', size: 'L', price: 40000 },
  { image: 'images/drink-6.jpg', name: 'Лимонад', size: 'L', price: 40000 },
];

const Restaurants: React.FC = () => {
  return (
    <div className='w-full px-4 md:px-8 lg:px-32 mt-8'>
      <h2 className='text-5xl font-bold'>Рестораны</h2>
      <div className='flex justify-between items-center mb-4 md:mb-8'>
        <Category />
        <button className='sm:flex hidden items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300 text-xl lg:mr-[20px]'>
          Еще
          <IoIosArrowDown className='text-2xl ml-2' />
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {restaurants.map((restaurant, index) => (
          <RestaurantItem key={index} {...restaurant} />
        ))}
      </div>

      <h2 className='text-3xl font-bold mt-8'>Освежающие напитки</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {drinks.map((drink, index) => (
          <DrinkMenu key={index} {...drink} />
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {restaurantsTwo.map((restaurant, index) => (
          <RestaurantItem key={index} {...restaurant} />
        ))}
      </div>

      <button className='bg-gray-100 hover:bg-gray-200 w-full py-4 mt-8 text-center text-2xl font-semibold rounded-lg transition'>
        Показать еще
      </button>
    </div>
  );
};

export default Restaurants;
