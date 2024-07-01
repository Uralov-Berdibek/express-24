import React from 'react';
import { CiStar } from 'react-icons/ci';

interface RestaurantItemProps {
  image: string;
  name: string;
  category: string;
  rating?: string;
  isNew?: boolean;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({
  image,
  name,
  category,
  rating,
  isNew,
}) => {
  return (
    <div className='w-full md:w-[400px] mb-8 border rounded-lg shadow-lg'>
      <div>
        <img src={image} alt={name} className='w-full h-[300px] object-cover rounded-t-lg' />
        <div className='mt-2 p-4'>
          <h3 className='text-black text-2xl font-semibold'>{name}</h3>
          <p className='text-[#888] text-lg mb-2'>{category}</p>
          {rating && (
            <span className='flex items-center w-[70px] bg-gray-200 text-black text-lg px-2 py-1 rounded-full'>
              <CiStar className='text-xl mr-2' />
              {rating}
            </span>
          )}
          {isNew && (
            <span className='flex items-center w-[120px] bg-gray-200 text-black text-lg px-2 py-1 rounded-full'>
              <CiStar className='text-xl mr-2' />
              Новый
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
