import React from 'react';
import { TbWorld } from 'react-icons/tb';
import { LuUserSquare2 } from 'react-icons/lu';

const MyMenu = () => {
  return (
    <div className='lg:ml-8 ml-4 hidden md:flex'>
      <button className='px-8 text-[18px] text-[#aaa] border-l flex flex-col justify-center items-center'>
        <TbWorld className='text-[32px]' />
        Русский
      </button>
      <button className='px-8 text-[18px] text-[#aaa] border-l text-center flex flex-col justify-center items-center'>
        <LuUserSquare2 className='text-[32px]' />
        Профиль
      </button>
    </div>
  );
};

export default MyMenu;
