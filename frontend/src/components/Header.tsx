// Components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">FabricLens</div>
        <nav>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/learn">Learn About SaaS</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;