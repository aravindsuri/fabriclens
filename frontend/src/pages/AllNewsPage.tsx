// File: src/pages/AllNewsPage.tsx
import React from 'react';
import { useNewsFeeds } from '../hooks/useNewsFeeds';
import { NewsCard } from '../components/NewsCard';
import Header from '../components/Header';

const AllNewsPage: React.FC = () => {
  const { newsItems, loading, error } = useNewsFeeds(true);

  return (
    <div className="min-h-screen bg-light-bg">
      <Header />
      
      <section className="product-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a> <span>/</span> <a href="#news">News</a> <span>/</span> All News
          </div>
          <h1>Industry News & Insights</h1>
          <p>Stay updated with the latest news and insights about Microsoft Fabric, data governance, and industry trends.</p>
        </div>
      </section>
      
      <main className="container">
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
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AllNewsPage;
