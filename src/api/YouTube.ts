import { YTResponse } from './types';

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

export const fetchVideos = async (query: string): Promise<YTResponse> => {
	const response = await fetch(
		`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&part=snippet&type=video`
	);
	const data = await response.json();
	return data.items as YTResponse;
};
