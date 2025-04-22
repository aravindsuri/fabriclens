import React from 'react';

const ArticlesSection: React.FC = () => {
  return (
    <section className="articles-section">
      <div className="container">
        <h2 className="section-title">Product Articles & Updates</h2>
        <p className="section-subtitle">Learn about our latest product releases, features, and best practices for Microsoft Fabric governance</p>
        
        <div className="articles-grid">
          <article className="article-card">
            <div className="article-image">
              <span className="article-tag">Governance</span>
              <div className="image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" fill="#CCCCCC"/>
                </svg>
              </div>
              <img 
                src="/images/role-based-access.jpg" 
                alt=""
                className="article-img"
              />
            </div>
            <div className="article-content">
              <h3>Introducing Enhanced Role-Based Access Controls</h3>
              <div className="article-meta">
                <span className="article-date">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  April 22, 2025
                </span>
                <span className="article-author">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  James Wilson
                </span>
              </div>
              <p>Our latest update to the Governance Accelerator introduces enhanced role-based access controls designed specifically for Microsoft Fabric environments.</p>
              <a href="#read-more" className="read-more">Read More →</a>
            </div>
          </article>

          <article className="article-card">
            <div className="article-image">
              <span className="article-tag">Compliance</span>
              <div className="image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" fill="#CCCCCC"/>
                </svg>
              </div>
              <img 
                src="/images/gdpr-compliance.jpg" 
                alt=""
                className="article-img"
              />
            </div>
            <div className="article-content">
              <h3>Simplified GDPR Compliance for Microsoft Fabric</h3>
              <div className="article-meta">
                <span className="article-date">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  April 18, 2025
                </span>
                <span className="article-author">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Sarah Chen
                </span>
              </div>
              <p>Learn how our Compliance Framework makes GDPR compliance straightforward with automated data discovery, classification, and reporting tools.</p>
              <a href="#read-more" className="read-more">Read More →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection; 