import { Playlist } from '@/interfaces/playlist.interface';
import React from 'react';
import PlaylistCardPreview from '../../molecules/PlaylistCardPreview';

interface PlaylistListProps {
  playlists: Playlist[];
}

const PlaylistList: React.FC<PlaylistListProps> = ({ playlists }) => {
  return (
    <div
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8
     gap-4  h-full w-full px-4'
    >
      {playlists.map((playlist) => {
        return (
          <div key={playlist.name} className='flex justify-center'>
            <PlaylistCardPreview
              playlist={playlist}
              onClick={() => {
                alert(playlist.name);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistList;
