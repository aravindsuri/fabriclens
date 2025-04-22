import React from 'react';
import { ProductArticle } from '../types/types';

interface ProductArticleCardProps {
  article: ProductArticle;
}

export const ProductArticleCard: React.FC<ProductArticleCardProps> = ({ article }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Governance': return 'bg-primary-green';
      case 'Compliance': return 'bg-blue-500';
      case 'Pipeline': return 'bg-purple-500';
      default: return 'bg-primary-green';
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative h-48 bg-gray-100">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <span className={`absolute top-3 left-3 ${getCategoryColor(article.category)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
          {article.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-3 text-primary-green">{article.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center mr-4">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {article.date}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            {article.author}
          </div>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{article.summary}</p>
        <a 
          href={article.link} 
          className="text-primary-green font-semibold hover:text-dark-green inline-flex items-center mt-auto"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
