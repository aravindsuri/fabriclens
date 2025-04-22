// Components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li><a href="/products/governance">Governance</a></li>
              <li><a href="/products/compliance">Compliance</a></li>
              <li><a href="/products/metadata">Metadata Management</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/documentation">Documentation</a></li>
              <li><a href="/webinars">Webinars</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2025 FabricLens. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;