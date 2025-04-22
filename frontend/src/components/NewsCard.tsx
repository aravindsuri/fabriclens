import React from 'react';
import { NewsItem } from '../types/types';

interface NewsCardProps {
  item: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative h-48 bg-gray-100">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-primary-green bg-opacity-90 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {item.source}
        </span>
      </div>
      <div className="p-5">
        <div className="text-primary-green text-sm font-semibold mb-1">{item.date}</div>
        <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.summary}</p>
        <a 
          href={item.link} 
          className="text-primary-green font-semibold hover:text-dark-green inline-flex items-center"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};
