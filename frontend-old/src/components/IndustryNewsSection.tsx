// File: src/components/IndustryNewsSection.tsx (updated to use the hook)
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { NewsCard } from './NewsCard';
import { useNewsFeeds } from '../hooks/useNewsFeeds';

export const IndustryNewsSection: React.FC = () => {
  // In development or if having CORS issues, set useMockData to true
  const { newsItems, loading, error } = useNewsFeeds(false);
  
  // Display only the first 3 news items
  const displayedItems = newsItems.slice(0, 3);

  return (
    <section id="industry-news" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Industry News & Insights"
          subtitle="Stay up-to-date with the latest Microsoft Fabric news, data governance trends, and industry insights"
        />
        
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
        
        {!loading && !error && displayedItems.length === 0 && (
          <div className="text-center py-8">
            No news items available at the moment.
          </div>
        )}
        
        {!loading && !error && displayedItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {displayedItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};