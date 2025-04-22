// src/services/rssService.ts
import Parser from 'rss-parser';

// Define types for RSS items
export interface RSSItem {
  title?: string;
  contentSnippet?: string;
  description?: string;
  link?: string;
  pubDate?: string;
  creator?: string;
  content?: string;
  guid?: string;
  categories?: string[];
  isoDate?: string;
  mediaContent?: any[];
  [key: string]: any; // For any other properties
}

export interface RSSFeed {
  items: RSSItem[];
  feedUrl: string;
  title: string;
  description: string;
  link: string;
  [key: string]: any;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  link: string;
  date: string;
  source: string;
  imageUrl: string;
}

// Configure RSS parser - fix the constructor usage
const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: true }],
      // Add any other custom field mappings here
    ]
  }
});

// URLs of RSS feeds to fetch
const FEED_URLS = {
  microsoft: 'https://blogs.microsoft.com/feed/',
  infoWorld: 'https://www.infoworld.com/category/data-science/index.rss',
  dataScience: 'https://www.datasciencecentral.com/feed/'
};

// Helper function to extract image URL from item
const getImageUrl = (item: RSSItem): string => {
  // Try to get image from mediaContent
  if (item.mediaContent && item.mediaContent.length > 0) {
    const media = item.mediaContent.find(m => m.$ && m.$.url);
    if (media && media.$ && media.$.url) {
      return media.$.url;
    }
  }
  
  // Try to extract image from content if it exists
  if (item.content) {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = item.content.match(imgRegex);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // Default image if none found
  return '/default-article-image.jpg';
};

// Format publication date
const formatDate = (dateStr?: string): string => {
  if (!dateStr) return 'No date';
  
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    return 'Invalid date';
  }
};

// Fetch and transform RSS feed into articles
export const fetchArticles = async (source: string): Promise<Article[]> => {
  try {
    const feedUrl = FEED_URLS[source as keyof typeof FEED_URLS];
    if (!feedUrl) {
      throw new Error(`Unknown feed source: ${source}`);
    }
    
    const feed = await parser.parseURL(feedUrl);
    
    return feed.items.map((item: RSSItem, index: number) => ({
      id: `${source}-${index}`,
      title: item.title || 'No Title',
      summary: item.contentSnippet?.substring(0, 150) + '...' || 
               item.description?.substring(0, 150) + '...' || 
               'No description available',
      link: item.link || '#',
      date: formatDate(item.pubDate || item.isoDate),
      source: feed.title || source,
      imageUrl: getImageUrl(item)
    }));
  } catch (error) {
    console.error(`Error fetching ${source} feed:`, error);
    return [];
  }
};

// Fetch articles from multiple sources
export const fetchAllArticles = async (): Promise<Article[]> => {
  try {
    const sources = Object.keys(FEED_URLS);
    const articlesPromises = sources.map(source => fetchArticles(source));
    const results = await Promise.all(articlesPromises);
    
    // Flatten array of arrays and sort by date (newest first)
    return results.flat().sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error fetching all articles:', error);
    return [];
  }
};