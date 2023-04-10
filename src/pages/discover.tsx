import { GetServerSideProps, NextPage } from 'next';
import { Inter } from 'next/font/google';
import DefaultLayout from '../components/layouts/DefaultLayout';
import PlaylistList from '../components/organisms/PlaylistList';
import { Playlist } from '../interfaces/playlist.interface';

interface DiscoverPageProps {
  playlists: Playlist[];
}

const DiscoverPage: NextPage<DiscoverPageProps> = ({ playlists }) => {
  return (
    <DefaultLayout activeRoute='discover'>
      <div className='h-full flex flex-col'>
        <h1 className='font-bold text-6xl'>Discover</h1>
        <div className='h-full overflow-y-auto flex pt-4'>
          <PlaylistList playlists={playlists} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  DiscoverPageProps
> = async () => {
  return {
    props: {
      playlists: [
        {
          name: 'Cozy Game rain ambience',
          length: '34:00',
          description: 'A playlist with rain cozy themes from games to focus',
          musicsQuantity: 27,
          tags: ['cozy', 'rain'],
          thumbUrl: `https://picsum.photos/seed/${Math.random()}/300/300`,
        },
        {
          name: 'Nintendo 64 Cozy room',
          length: '44:21',
          description: 'nintendo 64 cozy room ambience with soft rain',
          musicsQuantity: 16,
          tags: ['cozy', 'rain', 'nintendo'],
          thumbUrl: `https://picsum.photos/seed/${Math.random()}/300/300`,
        },
        {
          name: 'Cozy Game rain ambience2',
          length: '12:32',
          description: 'A playlist with rain cozy themes from games to focus',
          musicsQuantity: 27,
          tags: ['cozy', 'rain'],
          thumbUrl: `https://picsum.photos/seed/${Math.random()}/300/300`,
        },
        {
          name: 'Nintendo 64 Cozy room2',
          length: '14:00',
          description: 'nintendo 64 cozy room ambience with soft rain',
          musicsQuantity: 16,
          tags: ['cozy', 'rain', 'nintendo'],
          thumbUrl: `https://picsum.photos/seed/${Math.random()}/300/300`,
        },
        {
          name: 'Cozy Game rain ambience3',
          length: '54:20',
          description: 'A playlist with rain cozy themes from games to focus',
          musicsQuantity: 27,
          tags: ['cozy', 'rain'],
          thumbUrl: `https://picsum.photos/seed/${Math.random()}/300/300`,
        },
        {
          name: 'Nintendo 64 Cozy room3',
          length: '24:00',
          description: 'nintendo 64 cozy room ambience with soft rain',
          musicsQuantity: 16,
          tags: ['cozy', 'rain', 'nintendo'],
          thumbUrl: `https://picsum.photos/seed/${Math.random()}/300/300`,
        },
      ],
    }, // will be passed to the page component as props
  };
};

export default DiscoverPage;
