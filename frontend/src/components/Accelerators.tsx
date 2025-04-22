import React from 'react';

const Accelerators: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Microsoft Fabric Accelerators</h2>
        <p className="section-subtitle">Our specialized tools help you maximize the potential of Microsoft Fabric while maintaining governance and compliance</p>
        
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Governance Accelerator</h3>
            <p>Establish and enforce governance policies across your entire Microsoft Fabric ecosystem with automated controls and monitoring</p>
            <a href="#learn-more" className="learn-more">Learn More</a>
          </div>

          <div className="feature-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <h3>Compliance Framework</h3>
            <p>Meet regulatory requirements with pre-built compliance templates and automated reporting for GDPR, HIPAA, SOX and more</p>
            <a href="#learn-more" className="learn-more">Learn More</a>
          </div>

          <div className="feature-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </div>
            <h3>Metadata Pipeline</h3>
            <p>Streamline your data operations with automated metadata management and intelligent data pipeline orchestration</p>
            <a href="#learn-more" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accelerators; 