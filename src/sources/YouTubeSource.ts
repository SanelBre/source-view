import { Source } from './types';
import { fetchVideos } from '../api/YouTube';

export class YouTubeSource implements Source {
	async search(query: string) {
		const videos = await fetchVideos(query);

		return videos.map((v) => ({
			title: v.snippet.title,
			embedUrl: `https://www.youtube.com/embed/${v.id.videoId}`,
		}));
	}
}
