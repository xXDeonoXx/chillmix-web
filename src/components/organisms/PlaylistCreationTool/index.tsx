import React, { useEffect, useState } from 'react';
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube';
import SliderInput from '../../atoms/SliderInput';
import { Alert } from 'flowbite-react';
import AmbientSoundController from '../../molecules/AmbientSoundController';
import { useForm, FormProvider } from 'react-hook-form';
import SoundMixer from '../SoundMixer';

const PlaylistCreationTool = () => {
  const methods = useForm({ defaultValues: { music_volume: 10 } });

  const [playerRef, setPlayerRef] = useState<YouTubePlayer>(null);
  const musicVolume = methods.watch('music_volume');
  const [rain, setRain] = useState(false);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      //   list: 'PLB4DC2508C4D0076D',
      //   listType: 'playlist',
      autoplay: 0,
      //   controls: 0,
    },
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    setPlayerRef(event.target);
  };

  useEffect(() => {
    try {
      playerRef.setVolume(musicVolume);
    } catch (error) {}
  }, [musicVolume]);

  return (
    <div className='h-full relative rounded-xl overflow-hidden'>
      <YouTube
        videoId={'4vvFTB_8JUs'} // defaults -> ''
        //   id={string}                       // defaults -> ''
        className={'h-full'} // defaults -> ''
        iframeClassName={''} // defaults -> ''
        //   style={object}                    // defaults -> {}
        //   title={string}                    // defaults -> ''
        //   loading={string}                  // defaults -> undefined
        opts={opts}
        onReady={onPlayerReady} // defaults -> noop
        //   onPlay={func}                     // defaults -> noop
        //   onPause={func}                    // defaults -> noop
        //   onEnd={func}                      // defaults -> noop
        //   onError={func}                    // defaults -> noop
        //   onStateChange={func}              // defaults -> noop
        //   onPlaybackRateChange={func}       // defaults -> noop
        //   onPlaybackQualityChange={func}    // defaults -> noop
      />
      <div className='absolute bg-black w-full h-full flex flex-col z-10 inset-0 bg-opacity-60 p-8'>
        <div className='rounded-xl flex flex-col p-4 w-fit bg-black bg-opacity-60 self-end'>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit((data) => {
                console.log(data);
              })}
            >
              <SoundMixer />
              <button type='submit'>Submit</button>
            </form>
          </FormProvider>
        </div>
        <div className='flex flex-col gap-4 w-64 mt-24'>
          <button
            onClick={() => {
              playerRef.playVideo();
              playerRef.setVolume(musicVolume);
            }}
            className='"px-8 py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition duration-300 ease-in-out'
          >
            Play
          </button>
          <button
            onClick={() => {
              playerRef.pauseVideo();
            }}
            className='"px-8 py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition duration-300 ease-in-out'
          >
            Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCreationTool;
