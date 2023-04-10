import { Playlist } from '@/interfaces/playlist.interface';

export interface PlaylistCardPreviewProps {
  playlist: Playlist;
  onClick: () => void;
}
