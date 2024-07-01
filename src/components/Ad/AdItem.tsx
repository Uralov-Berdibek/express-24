import React from 'react';

interface AdItemProps {
  image: string;
  title: string;
}

const AdItem: React.FC<AdItemProps> = ({ image, title }) => {
  return (
    <div className='w-full'>
      <img src={image} alt={title} className='w-full h-auto lg:h-[150px] mb-4 rounded-[15px]' />
    </div>
  );
};

export default AdItem;
