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
        <h1 className='font-bold text-4xl pb-4'>Discover</h1>
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
          tags: ['cozy', 'rain'],
          thumbUrl: `https://picsum.photos/seed/${Math.random()}/300/300`,
          videos: ['https://youtu.be/8kBlKM71pjc'],
        },
      ],
    }, // will be passed to the page component as props
  };
};

export default DiscoverPage;
