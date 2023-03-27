import Link from 'next/link';
import { RiHome3Fill } from 'react-icons/ri';
import IconOption from '../../atoms/IconOption';
import {
  HiHome,
  HiMusicNote,
  HiFolder,
  HiUser,
  HiOutlineHeart,
  HiOutlinePlus,
} from 'react-icons/hi';

const Sidebar = () => {
  return (
    <div className='w-24 flex flex-col justify-center items-center gap-8 bg-slate-800 h-full relative'>
      <div className='absolute top-8'>
        <IconOption onClick={() => {}} icon={HiOutlinePlus} />
      </div>
      <IconOption onClick={() => {}} icon={HiHome} />
      <IconOption onClick={() => {}} icon={HiMusicNote} />
      <IconOption onClick={() => {}} icon={HiFolder} />
      <IconOption onClick={() => {}} icon={HiUser} />

      <div className='bg-slate-500 h-px w-3/4' />

      <IconOption onClick={() => {}} icon={HiOutlineHeart} />
    </div>
  );
};

export default Sidebar;
