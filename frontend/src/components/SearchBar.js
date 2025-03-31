import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input 
      type="text" 
      className="search-bar" 
      placeholder="Search communities..." 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
