import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import SliderInput from '../../atoms/SliderInput';

const AmbientSoundController = () => {
  const [volume, setVolume] = useState(1);
  return (
    <div className='flex items-center gap-4 justify-between'>
      <h4 className='font-bold'>Soft Rain</h4>
      {/* <audio src='/audios/rain/rain-soft.mp3' autoPlay loop></audio> */}
      <ReactAudioPlayer
        src='/audios/rain/rain-soft.mp3'
        autoPlay
        // controls
        muted={volume === 0}
        loop
        volume={volume}
      />
      <SliderInput
        value={volume * 100}
        onChange={(value) => {
          setVolume(value / 100);
        }}
      />
    </div>
  );
};

export default AmbientSoundController;
