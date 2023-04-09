import { Inter } from 'next/font/google';
import DefaultLayout from '../components/layouts/DefaultLayout';
import PlaylistCreationTool from '../components/organisms/PlaylistCreationTool';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <DefaultLayout activeRoute=''>
      <div className='h-full'>
        <h1 className='font-bold text-6xl'>Home</h1>
        {/* <PlaylistCreationTool /> */}
      </div>
    </DefaultLayout>
  );
}
