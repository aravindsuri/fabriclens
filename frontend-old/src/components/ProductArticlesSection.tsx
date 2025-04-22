// File: src/components/ProductArticlesSection.tsx (updated to use the hook)
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { ProductArticleCard } from './ProductArticleCard';
import { useProductArticles } from '../hooks/useProductArticles';

export const ProductArticlesSection: React.FC = () => {
  // In development or if you don't have a CMS yet, set useMockData to true
  const { articles, loading, error } = useProductArticles(true);
  
  // Display only the first 3 articles
  const displayedArticles = articles.slice(0, 3);

  return (
    <section id="product-articles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Product Articles & Updates"
          subtitle="Learn about our latest product releases, features, and best practices for Microsoft Fabric governance"
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
        
        {!loading && !error && displayedArticles.length === 0 && (
          <div className="text-center py-8">
            No articles available at the moment.
          </div>
        )}
        
        {!loading && !error && displayedArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {displayedArticles.map((article) => (
              <ProductArticleCard key={article.id} article={article} />
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