// File: src/pages/AllNewsPage.tsx
import React from 'react';
import { useNewsFeeds } from '../hooks/useNewsFeeds';
import { NewsCard } from '../components/NewsCard';
import { Header } from '../components/Header';

const AllNewsPage: React.FC = () => {
  const { newsItems, loading, error } = useNewsFeeds(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-emerald-600 mb-8">Industry News & Insights</h1>
        
        {loading && (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-500 py-8">
            {error}
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
