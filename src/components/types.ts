import { VideoData } from '../sources/types';

export interface VideoPlayerProps {
	video: VideoData;
}

export interface VideoListProps {
	videos: VideoData[];
	onVideoSelect: (video: VideoData) => void;
}

export interface SearchBarProps {
	onSearch: (query: string) => void;
}
