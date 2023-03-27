'use client';
import React from 'react';
import { IconOptionProps } from './interfaces';

const IconOption: React.FC<IconOptionProps> = ({ icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='relative focus:outline-none rounded-full overflow-visible'
    >
      <div className='absolute inset-0 bg-white opacity-20 filter blur-md rounded-full'></div>

      <Icon className='z-10 text-white w-7 h-7 ' />
    </button>
  );
};

export default IconOption;
