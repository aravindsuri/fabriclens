// Components/IndustryNewsSection.tsx
import React from 'react';
import ArticleCard from './ArticleCard';

// Sample data - in a real app, you'd get this from your RSS service
const newsArticles = [
  {
    id: 'news-1',
    title: 'Microsoft Announces New Fabric Integration Features',
    source: 'Microsoft Blog',
    date: 'April 22, 2025',
    summary: 'Microsoft has unveiled a new set of integration features for Fabric, enhancing connectivity with popular enterprise systems and cloud platforms.',
    imageUrl: '/path/to/image1.jpg',
    linkUrl: '/news/microsoft-fabric-integration'
  },
  // Add more articles here
];

const IndustryNewsSection: React.FC = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">Industry News & Insights</h2>
        <p>Stay up-to-date with the latest Microsoft Fabric news, data governance trends, and industry insights</p>
        
        <div className="news-grid">
          {newsArticles.map(article => (
            <ArticleCard
              key={article.id}
              title={article.title}
              source={article.source}
              date={article.date}
              summary={article.summary}
              imageUrl={article.imageUrl}
              linkUrl={article.linkUrl}
            />
          ))}
        </div>
        
        <a href="/news" className="view-all">View All Articles</a>
      </div>
    </section>
  );
};

export default IndustryNewsSection;