import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">Industry News & Insights</h2>
        <p className="section-subtitle">Stay up-to-date with the latest Microsoft Fabric news, data governance trends, and industry insights</p>
        
        <div className="news-container">
          <article className="news-card">
            <div className="news-image">
              <span className="news-source">Microsoft Blog</span>
              <div className="image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" fill="#CCCCCC"/>
                </svg>
              </div>
              <img 
                src="/images/fabric-integration.jpg" 
                alt=""
                className="news-img"
              />
            </div>
            <div className="news-content">
              <p className="news-date">April 22, 2025</p>
              <h3>Microsoft Announces New Fabric Integration Features</h3>
              <p>Microsoft has unveiled a new set of integration features for Fabric, enhancing connectivity with popular enterprise systems and cloud platforms.</p>
              <a href="#read-more" className="news-link">Read more →</a>
            </div>
          </article>

          <article className="news-card">
            <div className="news-image">
              <span className="news-source">Data Science Central</span>
              <div className="image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" fill="#CCCCCC"/>
                </svg>
              </div>
              <img 
                src="/images/data-governance-ai.jpg" 
                alt=""
                className="news-img"
              />
            </div>
            <div className="news-content">
              <p className="news-date">April 21, 2025</p>
              <h3>The Evolution of Data Governance in the AI Era</h3>
              <p>As AI becomes increasingly integrated into business operations, data governance practices are evolving to address new challenges and opportunities.</p>
              <a href="#read-more" className="news-link">Read more →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 