import React from 'react';
import { SliderInputProps } from './interfaces';

const SliderInput: React.FC<SliderInputProps> = ({
  onChange,
  value,
  max = 100,
  min = 0,
}) => {
  return (
    <div className='h-8 flex items-center'>
      <input
        id='default-range'
        type='range'
        min={min}
        max={max}
        defaultValue={value}
        onChange={(e) => {
          onChange(Number(e.currentTarget.value));
        }}
        className='w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
      />
    </div>
  );
};

export default SliderInput;
