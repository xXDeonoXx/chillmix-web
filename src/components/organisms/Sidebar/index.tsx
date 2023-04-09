import { Tooltip } from 'flowbite-react';
import {
  HiFolder,
  HiHome,
  HiMusicNote,
  HiOutlineHeart,
  HiOutlinePlus,
  HiUser,
} from 'react-icons/hi';
import IconOption from '../../atoms/IconOption';
import { Route, SideBarProps } from './interfaces';
import Link from 'next/link';

const routes: Route[] = [
  { label: 'Home', route: '', url: '/', icon: HiHome },
  {
    label: 'Discorver',
    route: 'discover',
    url: '/discover',
    icon: HiMusicNote,
  },
  {
    label: 'My Playlists',
    route: 'saved-playlists',
    url: '#',
    icon: HiFolder,
  },
  { label: 'Profile', route: 'profile', url: '#', icon: HiUser },
];

const Sidebar: React.FC<SideBarProps> = ({ activeRoute }) => {
  return (
    <div className='w-24 flex flex-col justify-center items-center gap-8 bg-slate-800 h-full relative'>
      <div className='absolute top-8'>
        <IconOption onClick={() => {}} icon={HiOutlinePlus} />
      </div>

      {routes.map((route) => (
        <Tooltip key={route.route} content={route.label} placement='right'>
          <Link href={route.url}>
            <IconOption
              onClick={() => {
                // alert(route.label);
              }}
              icon={route.icon}
              active={route.route === activeRoute}
            />
          </Link>
        </Tooltip>
      ))}

      <div className='bg-slate-500 h-px w-3/4' />

      <IconOption onClick={() => {}} icon={HiOutlineHeart} />
    </div>
  );
};

export default Sidebar;
