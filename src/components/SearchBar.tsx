import React, { useState } from 'react';
import './SearchBar.css';
import { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		onSearch(query);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<div className="input-container">
			<input
				className="search-bar"
				type="text"
				value={query}
				onKeyDown={handleKeyPress}
				onChange={(e) => setQuery(e.target.value)}
				autoFocus={true}
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default SearchBar;
