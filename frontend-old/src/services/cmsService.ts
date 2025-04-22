// File: src/services/cmsService.ts
import { ProductArticle } from '../types/types';

// Define API interfaces
interface CmsApiResponse {
  data: CmsArticle[];
  meta: {
    pagination: {
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    }
  };
}

interface CmsArticle {
  id: number;
  attributes: {
    title: string;
    summary: string;
    content: string;
    publishedAt: string;
    slug: string;
    category: string;
    author: {
      data: {
        attributes: {
          name: string;
        }
      }
    };
    featuredImage: {
      data: {
        attributes: {
          url: string;
        }
      }
    };
  };
}

// URL of your headless CMS API
const CMS_API_URL = process.env.REACT_APP_CMS_API_URL || 'https://your-headless-cms-api.com';

// Function to map CMS data to our ProductArticle type
const mapCmsArticleToProductArticle = (article: CmsArticle): ProductArticle => {
  return {
    id: article.id.toString(),
    title: article.attributes.title,
    summary: article.attributes.summary,
    date: new Date(article.attributes.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    author: article.attributes.author.data.attributes.name,
    imageUrl: article.attributes.featuredImage.data?.attributes.url || '/api/placeholder/400/200',
    category: article.attributes.category as 'Governance' | 'Compliance' | 'Pipeline',
    link: `/articles/${article.attributes.slug}`
  };
};

// Function to fetch articles from the CMS
export const fetchArticlesFromCms = async (): Promise<ProductArticle[]> => {
  try {
    // In a real app, this would fetch from your CMS API
    // For demo purposes, we'll implement mock behavior for now
    
    // This simulates a fetch to a headless CMS like Strapi
    // const response = await fetch(`${CMS_API_URL}/api/articles?populate=featuredImage,author&sort=publishedAt:desc`);
    // const data: CmsApiResponse = await response.json();
    // return data.data.map(mapCmsArticleToProductArticle);
    
    // Mock response for demonstration
    return mockFetchArticles();
  } catch (error) {
    console.error('Error fetching articles from CMS:', error);
    throw error;
  }
};

// Mock function to simulate CMS data
const mockFetchArticles = async (): Promise<ProductArticle[]> => {
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
          link: '/articles/enhanced-rbac'
        },
        {
          id: '2',
          title: 'Simplified GDPR Compliance for Microsoft Fabric',
          summary: 'Learn how our Compliance Framework makes GDPR compliance straightforward with automated data discovery, classification, and reporting tools.',
          date: 'April 18, 2025',
          author: 'Sarah Chen',
          imageUrl: '/api/placeholder/400/200',
          category: 'Compliance',
          link: '/articles/gdpr-compliance'
        },
        {
          id: '3',
          title: 'Best Practices for Metadata-Driven Pipelines',
          summary: 'Discover proven methodologies and strategies for implementing effective metadata-driven pipelines in Microsoft Fabric to streamline your data workflows.',
          date: 'April 15, 2025',
          author: 'Miguel Rodriguez',
          imageUrl: '/api/placeholder/400/200',
          category: 'Pipeline',
          link: '/articles/metadata-pipelines'
        },
        {
          id: '4',
          title: 'Automating Lineage Tracking in Microsoft Fabric',
          summary: 'Explore how our latest tools can help you automatically track and visualize data lineage across your entire Microsoft Fabric environment.',
          date: 'April 10, 2025',
          author: 'Emily Johnson',
          imageUrl: '/api/placeholder/400/200',
          category: 'Governance',
          link: '/articles/lineage-tracking'
        }
      ]);
    }, 800);
  });
};