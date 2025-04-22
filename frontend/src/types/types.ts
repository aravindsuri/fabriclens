// File: src/types/types.ts
export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    date: string;
    source: string;
    imageUrl: string;
    link: string;
  }
  
  export interface ProductArticle {
    id: string;
    title: string;
    summary: string;
    date: string;
    author: string;
    imageUrl: string;
    category: 'Governance' | 'Compliance' | 'Pipeline';
    link: string;
  }