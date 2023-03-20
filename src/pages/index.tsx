import { Inter } from 'next/font/google';
import DefaultLayout from '../components/layouts/DefaultLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <DefaultLayout>
      <div>
        {/* <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/videoseries?list=PLB4DC2508C4D0076D'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullscreen
        ></iframe> */}
      </div>
    </DefaultLayout>
  );
}
