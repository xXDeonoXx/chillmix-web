import { Inter } from 'next/font/google';
import DefaultLayout from '../components/layouts/DefaultLayout';
import PlaylistCreationTool from '../components/organisms/PlaylistCreationTool';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <DefaultLayout activeRoute=''>
      <div className='flex h-full flex-col'>
        <h1 className='font-bold text-4xl pb-4'>Home</h1>
        <PlaylistCreationTool />
      </div>
    </DefaultLayout>
  );
}
