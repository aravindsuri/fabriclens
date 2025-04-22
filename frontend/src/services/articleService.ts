import { ProductArticle } from '../types/types';

// Simulate API call to fetch product articles
export const fetchProductArticles = async (): Promise<ProductArticle[]> => {
  // In a real app, this would be an API call to your CMS or content database
  // For demo purposes, we're returning mock data with a simulated delay
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Introducing Enhanced Role-Based Access Controls',
          summary: 'Our latest update to the Governance Accelerator introduces enhanced role-based access controls designed specifically for Microsoft Fabric environments.',
          date: 'April 22, 2025',
          author: 'James Wilson',
          imageUrl: '/api/placeholder/400/200',
          category: 'Governance',
          link: '#'
        },
        {
          id: '2',
          title: 'Simplified GDPR Compliance for Microsoft Fabric',
          summary: 'Learn how our Compliance Framework makes GDPR compliance straightforward with automated data discovery, classification, and reporting tools.',
          date: 'April 18, 2025',
          author: 'Sarah Chen',
          imageUrl: '/api/placeholder/400/200',
          category: 'Compliance',
          link: '#'
        },
        {
          id: '3',
          title: 'Best Practices for Metadata-Driven Pipelines',
          summary: 'Discover proven methodologies and strategies for implementing effective metadata-driven pipelines in Microsoft Fabric to streamline your data workflows.',
          date: 'April 15, 2025',
          author: 'Miguel Rodriguez',
          imageUrl: '/api/placeholder/400/200',
          category: 'Pipeline',
          link: '#'
        }
      ]);
    }, 800); // Simulate network delay
  });
};
