// File: src/pages/FilterableNewsPage.tsx
import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import { NewsCard } from '../components/NewsCard';
import { RssSourceSelector } from '../components/RssSourceSelector';
import { NewsSearchBar } from '../components/NewsSearchBar';
import { useNewsFeeds } from '../hooks/useNewsFeeds';
import { filterNewsBySource, searchNews } from '../utils/feedUtils';

const FilterableNewsPage: React.FC = () => {
  const { newsItems, loading, error } = useNewsFeeds(true);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extract unique sources from news items
  const sources = useMemo(() => {
    const uniqueSources = new Set(newsItems.map(item => item.source));
    return Array.from(uniqueSources);
  }, [newsItems]);
  
  // Filter news items by source and search term
  const filteredNews = useMemo(() => {
    let filtered = newsItems;
    
    // Apply source filter
    filtered = filterNewsBySource(filtered, selectedSources);
    
    // Apply search filter
    filtered = searchNews(filtered, searchTerm);
    
    return filtered;
  }, [newsItems, selectedSources, searchTerm]);
  
  // Toggle source selection
  const handleSourceToggle = (source: string) => {
    setSelectedSources(prev => 
      prev.includes(source)
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };
  
  return (
    <div className="min-h-screen bg-light-bg">
      <Header />
      
      <section className="product-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a> <span>/</span> <a href="#news">News</a> <span>/</span> Filter News
          </div>
          <h1>Filter Industry News</h1>
          <p>Browse and filter the latest news and insights about Microsoft Fabric, data governance, and industry trends.</p>
        </div>
      </section>
      
      <main className="container">
        <div className="mb-8">
          <NewsSearchBar onSearch={setSearchTerm} />
        </div>
        
        {!loading && !error && (
          <div className="mb-8">
            <RssSourceSelector
              sources={sources}
              selectedSources={selectedSources}
              onSourceToggle={handleSourceToggle}
            />
          </div>
        )}
        
        {loading && (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-green"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-500 py-8">
            {error}
          </div>
        )}
        
        {!loading && !error && filteredNews.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No news items match your current filters.
          </div>
        )}
        
        {!loading && !error && filteredNews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default FilterableNewsPage;