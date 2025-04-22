// File: src/hooks/useNewsFeeds.ts
import { useState, useEffect } from 'react';
import { NewsItem } from '../types/types';
import { fetchAllNewsFeeds } from '../services/rssService';
import { fetchNewsItems } from '../services/newsService';

export const useNewsFeeds = (useMockData = false) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        
        // Use mock data or actual RSS feeds
        const items = useMockData 
          ? await fetchNewsItems()  // Use mock data
          : await fetchAllNewsFeeds();  // Use real RSS feeds
        
        setNewsItems(items);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news');
        setLoading(false);
        console.error('Error in useNewsFeeds:', err);
      }
    };

    getNews();
    
    // Refresh news every hour
    const intervalId = setInterval(getNews, 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, [useMockData]);

  return { newsItems, loading, error };
};