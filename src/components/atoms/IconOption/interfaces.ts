import { IconType } from 'react-icons';

export interface IconOptionProps {
  icon: IconType;
  active?: boolean;
  onClick: () => void;
}
