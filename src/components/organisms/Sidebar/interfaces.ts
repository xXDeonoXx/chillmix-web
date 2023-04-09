import { IconType } from 'react-icons';

export interface SideBarProps {
  activeRoute?: string;
}

export interface Route {
  label: string;
  route: string;
  url: string;
  icon: IconType;
}
