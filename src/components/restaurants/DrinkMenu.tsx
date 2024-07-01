import React from 'react';

interface DrinkMenuProps {
  image: string;
  name: string;
  size?: string;
  price: number;
}

const DrinkMenu: React.FC<DrinkMenuProps> = ({ image, name, size, price }) => {
  return (
    <div className='w-full md:w-[180px] mb-8 bg-gray-100 border rounded-lg shadow-lg p-2'>
      <div>
        <img src={image} alt={name} className='w-full h-[200px] object-cover rounded-lg' />
        <div className='h-[80px] mt-2'>
          <h3 className='text-black text-lg font-semibold'>{name}</h3>
          {size && <span className='text-black text-lg'>{size}</span>}
        </div>

        <button className='mt-3 w-full text-center py-2 bg-white rounded-lg'>{price} сум</button>
      </div>
    </div>
  );
};

export default DrinkMenu;
