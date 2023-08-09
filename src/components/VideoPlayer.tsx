import React from 'react';
import './VideoPlayer.css';
import { VideoPlayerProps } from './types';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
	return (
		<div className="video-player">
			<iframe
				title={video.title}
				width="100%"
				height="100%"
				src={video.embedUrl}
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoPlayer;
