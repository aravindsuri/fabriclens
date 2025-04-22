import { useState, useEffect } from 'react';
import { ProductArticle } from '../types/types';
import { fetchProductArticles } from '../services/articleService';

export const useProductArticles = (useMockData = true) => {
  const [articles, setArticles] = useState<ProductArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        
        // For now we're always using mock data
        const items = await fetchProductArticles();
        
        setArticles(items);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product articles');
        setLoading(false);
        console.error('Error in useProductArticles:', err);
      }
    };

    getArticles();
  }, [useMockData]);

  return { articles, loading, error };
};
