'use client';
import React from 'react';
import { IconOptionProps } from './interfaces';

const IconOption: React.FC<IconOptionProps> = ({
  icon: Icon,
  onClick,
  active,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative focus:outline-none rounded-full overflow-visible`}
    >
      <div className='absolute inset-0 bg-white opacity-20 filter blur-md rounded-full'></div>

      <Icon
        className={`z-10  w-7 h-7  ${
          active ? 'text-emerald-400' : 'text-white'
        }`}
      />
    </button>
  );
};

export default IconOption;
