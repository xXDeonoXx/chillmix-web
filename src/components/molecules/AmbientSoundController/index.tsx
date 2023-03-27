import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useFormContext } from 'react-hook-form';
import SliderInput from '../../atoms/SliderInput';

interface AmbientSoundController {
  name: string;
  url: string;
  registerName: string;
}

const AmbientSoundController: React.FC<AmbientSoundController> = ({
  name,
  url,
  registerName,
}) => {
  const { register, watch } = useFormContext();
  const volume = watch(`${registerName}.value.volume`);

  return (
    <div className='flex items-center gap-4 justify-between'>
      <h4 className='font-bold'>{name}</h4>
      {volume != null && (
        <ReactAudioPlayer
          src={url}
          autoPlay
          muted={volume === 0}
          loop
          volume={volume / 100}
        />
      )}
      <SliderInput {...register(`${registerName}.value.volume`)} />
    </div>
  );
};

export default AmbientSoundController;
