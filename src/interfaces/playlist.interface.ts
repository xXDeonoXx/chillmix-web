export interface Playlist {
  name: string;
  thumbUrl: string;
  musicsQuantity: number;
  length: string; // should be number in the future
  tags?: string[];
  description: string;
}
