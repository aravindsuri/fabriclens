// Components/ArticleCard.tsx
import React from 'react';

interface ArticleProps {
  title: string;
  source: string;
  date: string;
  summary: string;
  imageUrl: string;
  linkUrl: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ 
  title, 
  source, 
  date, 
  summary, 
  imageUrl, 
  linkUrl 
}) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <div className="article-content">
        <div className="article-source">{source}</div>
        <h3 className="article-title">{title}</h3>
        <div className="article-date">{date}</div>
        <p className="article-summary">{summary}</p>
        <a href={linkUrl} className="read-more">Read more →</a>
      </div>
    </div>
  );
};

export default ArticleCard;