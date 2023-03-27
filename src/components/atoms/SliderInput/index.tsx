import React, { forwardRef } from 'react';
import { SliderInputProps } from './interfaces';

const SliderInput: React.FC<SliderInputProps> = forwardRef<HTMLInputElement>(
  (props, ref) => {
    return (
      <div className='h-8 flex items-center'>
        <input
          ref={ref}
          id='default-range'
          type='range'
          // min={min}
          // max={max}
          className='w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
          {...props}
        />
      </div>
    );
  }
);
SliderInput.displayName = 'SliderInput';

export default SliderInput;
