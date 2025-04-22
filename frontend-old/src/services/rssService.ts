// File: src/services/rssService.ts
import { NewsItem } from '../types/types';
import * as rssParser from 'rss-parser';

// Configure RSS parser
const parser = new rssParser({
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: true }],
      ['dc:creator', 'creator']
    ]
  }
});

// Map of RSS feed URLs to fetch news from
const RSS_FEEDS = [
  {
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/feed/',
    source: 'Microsoft Blog'
  },
  {
    url: 'https://powerbi.microsoft.com/en-us/blog/feed/',
    source: 'Power BI Blog'
  },
  {
    url: 'https://www.datasciencecentral.com/feed/',
    source: 'Data Science Central'
  },
  {
    url: 'https://www.infoworld.com/category/data-management/index.rss',
    source: 'InfoWorld'
  }
];

// Function to extract image URL from different RSS feed formats
const extractImageUrl = (item: any): string => {
  // Try to get image from media:content
  if (item.mediaContent && item.mediaContent.length > 0) {
    for (const media of item.mediaContent) {
      if (media.$ && media.$.url) {
        return media.$.url;
      }
    }
  }
  
  // Try to get image from enclosure
  if (item.enclosure && item.enclosure.url) {
    return item.enclosure.url;
  }
  
  // Try to extract first image from content if available
  if (item.content) {
    const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }
  
  // Fallback to placeholder image
  return '/api/placeholder/400/200';
};

// Function to fetch and parse a single RSS feed
const fetchFeed = async (feedUrl: string, source: string): Promise<NewsItem[]> => {
  try {
    const feed = await parser.parseURL(feedUrl);
    
    return feed.items.map((item, index) => ({
      id: `${source}-${index}`,
      title: item.title || 'No Title',
      summary: item.contentSnippet?.substring(0, 150) + '...' || item.description?.substring(0, 150) + '...' || 'No description available',
      date: new Date(item.pubDate || new Date()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      source: source,
      imageUrl: extractImageUrl(item),
      link: item.link || '#'
    }));
  } catch (error) {
    console.error(`Error fetching feed from ${feedUrl}:`, error);
    return [];
  }
};

// Main function to fetch all RSS feeds
export const fetchAllNewsFeeds = async (): Promise<NewsItem[]> => {
  try {
    // Use a proxy service for CORS issues in development
    // In production, this should be handled by your backend
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
    // Fetch all feeds in parallel
    const feedPromises = RSS_FEEDS.map(feed => 
      fetchFeed(`${proxyUrl}${feed.url}`, feed.source)
    );
    
    const results = await Promise.all(feedPromises);
    
    // Combine all results and sort by date (newest first)
    const allItems = results.flat();
    
    return allItems.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error fetching RSS feeds:', error);
    return [];
  }
};