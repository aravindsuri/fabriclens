// File: src/components/NewsSearchBar.tsx
import React, { useState } from 'react';

interface NewsSearchBarProps {
  onSearch: (term: string) => void;
}

export const NewsSearchBar: React.FC<NewsSearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-md transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};
