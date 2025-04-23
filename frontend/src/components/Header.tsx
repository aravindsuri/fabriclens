// Components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 300 100">
              {/* Background elements representing "fabric" - using Microsoft Fabric gradient colors */}
              <rect x="20" y="30" width="40" height="40" rx="5" fill="#0AA58B" opacity="0.9"/>
              <rect x="55" y="20" width="40" height="40" rx="5" fill="#00B294" opacity="0.8"/>
              <rect x="90" y="25" width="40" height="40" rx="5" fill="#4CD2C0" opacity="0.7"/>
              
              {/* Lens element */}
              <circle cx="95" cy="50" r="40" fill="none" stroke="#00B294" strokeWidth="6"/>
              <circle cx="95" cy="50" r="30" fill="none" stroke="#4CD2C0" strokeWidth="3"/>
              <path d="M130 70 L160 100" stroke="#00B294" strokeWidth="6" strokeLinecap="round"/>
            </svg>
            FabricLens
          </Link>
          
          <div className="nav-links">
            <div 
              className="dropdown"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link to="/products">Products</Link>
              {isProductsOpen && (
                <div className="dropdown-content">
                  <Link to="/products/medallion-architecture">Medallion Architecture Starter Kit</Link>
                  {/* Add more product links here */}
                  <Link to="/products/api-fabric-ingestion">API to Fabric Ingestion</Link>
                </div>
              )}
            </div>
            <Link to="/solutions">Solutions</Link>
            <Link to="/industry-news">Industry News</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/saas-portal">SaaS Portal</Link>
            <Link to="/resources">Resources</Link>
          </div>
          
          <Link to="/contact" className="cta-button">Get Started</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;