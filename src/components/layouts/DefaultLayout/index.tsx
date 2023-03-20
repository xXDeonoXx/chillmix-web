import React from 'react';
import Sidebar from '../../organisms/Sidebar';

const DefaultLayout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return (
    <main className='bg-slate-800 h-screen text-white flex'>
      <Sidebar />
      <div className=' bg-slate-700 w-full rounded-l-3xl p-4'>{children}</div>
    </main>
  );
};

export default DefaultLayout;
