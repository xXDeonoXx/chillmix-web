import { Inter } from 'next/font/google';
import DefaultLayout from '../components/layouts/DefaultLayout';
import PlaylistCreationTool from '../components/organisms/PlaylistCreationTool';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <DefaultLayout>
      <div className='h-full'>
        <PlaylistCreationTool />
      </div>
    </DefaultLayout>
  );
}
