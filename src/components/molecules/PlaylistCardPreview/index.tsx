import React from 'react';
import { PlaylistCardPreviewProps } from './interfaces';
import { Badge } from 'flowbite-react';

const PlaylistCardPreview: React.FC<PlaylistCardPreviewProps> = ({
  playlist,
  onClick,
}) => {
  return (
    <div
      className='flex flex-col w-full text-white max-h-96 cursor-pointer'
      onClick={onClick}
    >
      <div className='flex w-full relative'>
        <img
          className='object-cover w-full'
          src={playlist.thumbUrl}
          alt='Playlist thumb image'
        />
        <div className='bg-black bg-opacity-40 w-full h-full absolute z-10 flex items-end p-2'>
          <div className='flex flex-col bottom-0'>
            <span className='font-bold'>{playlist.videos.length} songs</span>
            <span className='font-bold'>length: {playlist.length}</span>
            <div className='flex flex-wrap gap-2 py-2'>
              {playlist.tags?.map((tag) => (
                <Badge color='pink' key={tag} size={'sm'}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='p-2'>
        <h5 className='text-xl font-bold tracking-tight'>{playlist.name}</h5>
        <p className='font-normal'>{playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistCardPreview;
