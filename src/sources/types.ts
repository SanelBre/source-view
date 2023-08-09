export interface VideoData {
	title: string;
	embedUrl: string;
}

export interface Source {
	search: (query: string) => Promise<VideoData[]>;
}
