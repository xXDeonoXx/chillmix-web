import React from 'react';
import Sidebar from '../../organisms/Sidebar';
import { DefaultLayoutProps } from './interfaces';

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  activeRoute,
}) => {
  return (
    <main className='bg-slate-800 h-screen text-white flex'>
      <Sidebar activeRoute={activeRoute} />
      <div className=' bg-slate-700 w-full rounded-l-3xl p-4'>{children}</div>
    </main>
  );
};

export default DefaultLayout;
