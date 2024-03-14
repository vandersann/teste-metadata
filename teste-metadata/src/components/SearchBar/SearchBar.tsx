
import React, { useState } from 'react';
import './SearchBar.scss';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
const [searchQuery, setSearchQuery] = useState('');

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
};

return (
    <form onSubmit={handleSubmit} className="search-bar">
    <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchQuery}
        onChange={handleInputChange}
    />
    <button type="submit">Pesquisar</button>
    </form>
);
};

export default SearchBar;
