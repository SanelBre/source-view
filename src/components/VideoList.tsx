import React from 'react';
import './VideoList.css';
import { VideoListProps } from './types';

const VideoList: React.FC<VideoListProps> = ({ videos, onVideoSelect }) => {
	return (
		<div className="video-list">
			{videos?.map((video, index) => (
				<div
					key={index}
					className="video-item"
					onClick={() => onVideoSelect(video)}
				>
					{video.title}
				</div>
			))}
		</div>
	);
};

export default VideoList;
