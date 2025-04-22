// File: src/utils/feedUtils.ts
import { NewsItem } from '../types/types';

export const filterNewsBySource = (
  newsItems: NewsItem[], 
  selectedSources: string[]
): NewsItem[] => {
  // If no sources are selected, show all
  if (selectedSources.length === 0) {
    return newsItems;
  }
  
  // Filter by selected sources
  return newsItems.filter(item => 
    selectedSources.includes(item.source)
  );
};

export const searchNews = (
  newsItems: NewsItem[],
  searchTerm: string
): NewsItem[] => {
  if (!searchTerm.trim()) {
    return newsItems;
  }
  
  const term = searchTerm.toLowerCase();
  
  return newsItems.filter(item => 
    item.title.toLowerCase().includes(term) || 
    item.summary.toLowerCase().includes(term)
  );
};