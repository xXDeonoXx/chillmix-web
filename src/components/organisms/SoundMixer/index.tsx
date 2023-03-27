import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { YouTubePlayer } from 'react-youtube';
import Select from 'react-select';
import SliderInput from '../../atoms/SliderInput';
import AmbientSoundController from '../../molecules/AmbientSoundController';

interface AmbientSoundOption {
  name: string;
  url: string;
  volume: number;
}

const ambientSoundOptions: AmbientSoundOption[] = [
  { name: 'Soft Rain', url: '/audios/rain/rain-soft.mp3', volume: 20 },
  { name: 'Lit Fireplace', url: '/audios/fireplace/fireplace.mp3', volume: 20 },
  {
    name: 'Coffee Ambience',
    url: '/audios/coffee/coffee-ambience.mp3',
    volume: 20,
  },
];

interface SoundMixerProps {}

const SoundMixer: React.FC<SoundMixerProps> = ({}) => {
  const { register, watch, control } = useFormContext();
  const sounds = watch('sounds');
  const options = ambientSoundOptions.map((sound) => {
    return { value: sound, label: sound.name };
  });

  return (
    <div className='rounded-xl flex flex-col p-4 w-80 self-end'>
      <h2 className='pb-4 font-bold'>Sound Mixer</h2>
      <Controller
        control={control}
        defaultValue={[]}
        name='sounds'
        render={({ field: { onChange, value, ref } }) => {
          return (
            <Select
              className='text-black'
              ref={ref}
              value={value}
              onChange={onChange}
              options={options}
              isMulti
            />
          );
        }}
      />
      <div className='flex items-center gap-4 justify-between'>
        <h4 className='font-bold'>Music</h4>
        <SliderInput {...register('music_volume')} />
      </div>
      {(sounds as Array<any>)?.map((sound, index) => {
        return (
          <AmbientSoundController
            key={sound.value.name}
            name={sound.value.name}
            url={sound.value.url}
            registerName={`sounds.${index}`}
          />
        );
      })}
      {/* {rain && <AmbientSoundController />} */}
    </div>
  );
};

export default SoundMixer;
