// File: src/services/newsService.ts
import { NewsItem } from '../types/types';

// Simulate API call to fetch news items
export const fetchNewsItems = async (): Promise<NewsItem[]> => {
  // In a real app, this would be an API call to your backend or RSS feed service
  // For demo purposes, we're returning mock data with a simulated delay
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Microsoft Announces New Fabric Integration Features',
          summary: 'Microsoft has unveiled a new set of integration features for Fabric, enhancing connectivity with popular enterprise systems and cloud platforms.',
          date: 'April 22, 2025',
          source: 'Microsoft Blog',
          imageUrl: '/api/placeholder/400/200',
          link: '#'
        },
        {
          id: '2',
          title: 'The Evolution of Data Governance in the AI Era',
          summary: 'As AI becomes increasingly integrated into business operations, data governance practices are evolving to address new challenges and opportunities.',
          date: 'April 21, 2025',
          source: 'Data Science Central',
          imageUrl: '/api/placeholder/400/200',
          link: '#'
        },
        {
          id: '3',
          title: 'New Data Privacy Regulations Impact Cloud Analytics',
          summary: 'Recent regulatory changes are reshaping how organizations approach data analytics in cloud environments, with significant implications for compliance teams.',
          date: 'April 20, 2025',
          source: 'InfoWorld',
          imageUrl: '/api/placeholder/400/200',
          link: '#'
        },
        {
          id: '4',
          title: 'Power BI and Microsoft Fabric: The Road Ahead',
          summary: 'Learn about the future integration plans between Power BI and Microsoft Fabric and what this means for enterprise analytics.',
          date: 'April 19, 2025',
          source: 'Power BI Blog',
          imageUrl: '/api/placeholder/400/200',
          link: '#'
        },
        {
          id: '5',
          title: 'Best Practices for Data Mesh Architecture in Microsoft Fabric',
          summary: 'Implementing a data mesh architecture? Discover how Microsoft Fabric can serve as the ideal foundation for this modern approach.',
          date: 'April 18, 2025',
          source: 'InfoQ',
          imageUrl: '/api/placeholder/400/200',
          link: '#'
        },
        {
          id: '6',
          title: 'Zero-Trust Security Models for Analytics Platforms',
          summary: 'How Microsoft Fabric is enabling organizations to implement zero-trust security models in their analytics environments.',
          date: 'April 17, 2025',
          source: 'Security Magazine',
          imageUrl: '/api/placeholder/400/200',
          link: '#'
        }
      ]);
    }, 800); // Simulate network delay
  });
};