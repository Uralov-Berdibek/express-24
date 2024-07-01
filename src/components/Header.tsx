import React from 'react';
import Logo from './Logo';
import MyInput from './ui/MyInput';
import MyButton from './ui/MyButton';
import MySellect from './ui/MySellect';
import MyMenu from './ui/MyMenu';

const Header = () => {
  return (
    <div className='flex items-center lg:px-[35px] px-[16px] py-[2px] border-b'>
      <Logo />
      <div className='flex'>
        <MyInput />
        <MyButton />
      </div>
      <MySellect />
      <MyMenu />
    </div>
  );
};

export default Header;
