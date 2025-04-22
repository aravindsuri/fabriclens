// File: src/hooks/useProductArticles.ts
import { useState, useEffect } from 'react';
import { ProductArticle } from '../types/types';
import { fetchProductArticles } from '../services/articleService';
import { fetchArticlesFromCms } from '../services/cmsService';

export const useProductArticles = (useMockData = false) => {
  const [articles, setArticles] = useState<ProductArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        
        // Use mock data or CMS data
        const items = useMockData 
          ? await fetchProductArticles()  // Use static mock data
          : await fetchArticlesFromCms();  // Use CMS data
        
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