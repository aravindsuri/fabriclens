// File: src/components/ProductArticleCard.tsx
import React from 'react';
import { ProductArticle } from '../types/types';
import { CalendarIcon, UserIcon } from './Icons';

interface ProductArticleCardProps {
  article: ProductArticle;
}

export const ProductArticleCard: React.FC<ProductArticleCardProps> = ({ article }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Governance': return 'bg-emerald-500';
      case 'Compliance': return 'bg-blue-500';
      case 'Pipeline': return 'bg-purple-500';
      default: return 'bg-emerald-500';
    }
  };

  return (
    <div className="flex flex-col h-full bg-emerald-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
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
        <h3 className="font-bold text-xl mb-3 text-emerald-600">{article.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center mr-4">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {article.date}
          </div>
          <div className="flex items-center">
            <UserIcon className="w-4 h-4 mr-1" />
            {article.author}
          </div>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{article.summary}</p>
        <a 
          href={article.link} 
          className="text-emerald-500 font-semibold hover:text-emerald-600 inline-flex items-center mt-auto"
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
