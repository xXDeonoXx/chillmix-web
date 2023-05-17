export interface Playlist {
  name: string;
  thumbUrl: string;
  length: string; // should be number in the future
  tags?: string[];
  description: string;
  videos: string[];
}
