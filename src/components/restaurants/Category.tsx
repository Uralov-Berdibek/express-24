import React from 'react';
import { FaHeart } from 'react-icons/fa';

const categories = [
  { name: 'Избранные', icon: <FaHeart className='text-red-600 mr-1' /> },
  { name: 'Акции' },
  { name: 'Новинки' },
  { name: 'Fast Food' },
  { name: 'Азиатская' },
  { name: 'Кофейня' },
  { name: 'Пиццерия' },
  { name: 'Бургерная' },
];

const Category: React.FC = () => {
  return (
    <div className='flex space-x-2 overflow-x-auto py-4'>
      {categories.map((category, index) => (
        <button
          key={index}
          className='flex text-lg items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300'
        >
          {category.icon ? category.icon : ''}
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
