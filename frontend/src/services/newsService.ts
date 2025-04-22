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
        }
      ]);
    }, 800); // Simulate network delay
  });
};
