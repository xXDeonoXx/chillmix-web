import { RangeSlider } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPause, HiPlay } from 'react-icons/hi2';
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube';
import IconOption from '../../atoms/IconOption';
import SoundMixer from '../SoundMixer';

const PlaylistCreationTool = () => {
  const [playerRef, setPlayerRef] = useState<YouTubePlayer>(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoElapsedTime, setVideoElapsedTime] = useState(0);

  const methods = useForm({ defaultValues: { music_volume: 10 } });
  const musicVolume = methods.watch('music_volume');

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

  useEffect(() => {
    setVideoDuration(playerRef?.getDuration());
  }, [playerRef]);

  useEffect(() => {
    if (playerRef?.getCurrentTime) {
      const interval = setInterval(() => {
        setVideoElapsedTime(Math.round(playerRef.getCurrentTime()));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [playerRef]);

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
      <div className='absolute w-full h-full bg-black flex flex-col z-10 inset-0 bg-opacity-40 p-8 justify-between'>
        <div className='rounded-xl flex flex-col p-4 w-fit bg-black bg-opacity-60 self-end'>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit((data) => {
                console.log(data);
              })}
            >
              <SoundMixer />
            </form>
          </FormProvider>
        </div>
        <div className='flex flex-col'>
          <RangeSlider
            id='lg-range'
            sizing='md'
            min={0}
            max={videoDuration}
            value={videoElapsedTime}
            onChange={(e) => {
              playerRef.seekTo(e.currentTarget.value);
            }}
            className='pb-2'
          />
          <div className='flex justify-center w-full relative'>
            {videoElapsedTime > 0 && videoDuration > 0 && (
              <span className='absolute left-0'>{`${new Date(
                videoElapsedTime * 1000
              )
                .toISOString()
                .slice(11, 19)} / ${new Date(videoDuration * 1000)
                .toISOString()
                .slice(11, 19)}`}</span>
            )}
            <div className='flex items-center gap-4'>
              <IconOption
                onClick={() => {
                  playerRef.playVideo();
                  playerRef.setVolume(musicVolume);
                }}
                icon={HiPlay}
              />
              <IconOption
                onClick={() => {
                  playerRef.pauseVideo();
                }}
                icon={HiPause}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCreationTool;
