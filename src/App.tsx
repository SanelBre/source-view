import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import { YouTubeSource } from './sources/YouTubeSource';
import { Source, VideoData } from './sources/types';

const App: React.FC = () => {
	const [videos, setVideos] = useState<VideoData[]>([]);
	const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
	const source: Source = new YouTubeSource();

	const handleSearch = async (query: string) => {
		const videos = await source.search(query);
		setVideos(videos);
	};

	const handleVideoSelect = (video: VideoData) => {
		setSelectedVideo(video);
	};

	return (
		<div>
			<SearchBar onSearch={handleSearch} />
			<VideoList videos={videos} onVideoSelect={handleVideoSelect} />
			{selectedVideo && <VideoPlayer video={selectedVideo} />}
		</div>
	);
};

export default App;
