import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { LuChevronDown } from 'react-icons/lu';

const MySellect = () => {
  return (
    <div className='ml-[20px] bg-transparent px-3 py-2 sm:px-6 sm:py-3 sm:bg-slate-100 sm:border sm:border-slate-300 sm:rounded-[15px]'>
      <div className='flex items-center'>
        <LuMapPin className='text-[#666] text-[22px]' />
        <span className='text-[18px] ml-3 mr-3'>Кашгар махалля, Юнус...</span>
        <LuChevronDown className='text-[#666] text-[22px]' />
      </div>
    </div>
  );
};

export default MySellect;
