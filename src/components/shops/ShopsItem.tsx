import React from 'react';

interface ShopItemProps {
  image: string;
  name: string;
  category: string;
}

const ShopItem: React.FC<ShopItemProps> = ({ image, name, category }) => {
  return (
    <div className='lg:w-[250px] w-full lg:h-36 h-[200px] shadow-lg  mb-6 lg:mb-0 '>
      <img src={image} alt={name} className='w-full h-full rounded-[15px]' />

      <div className='pt-2'>
        <h3 className='text-black text-xl font-semibold'>{name}</h3>
        <p className='text-[#888] text-lg'>{category}</p>
      </div>
    </div>
  );
};

export default ShopItem;
