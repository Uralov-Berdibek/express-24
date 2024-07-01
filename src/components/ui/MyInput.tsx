import React from 'react';
import { LuSearch } from 'react-icons/lu';

const MyInput = () => {
  return (
    <div className='ml-[75px] mr-[10px] px-6 py-3 lg:flex hidden items-center w-[450px] h-[63px] border border-slate-300 rounded-[15px]'>
      <LuSearch className='text-[#666] text-[22px]' />
      <input
        className='ml-4 border-none outline-none w-[420px] placeholder:text-[21px]'
        type='text'
        placeholder='Заведение, блюдо, товар или кухня'
      />
    </div>
  );
};

export default MyInput;
