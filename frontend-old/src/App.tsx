// File: src/App.tsx
import React from 'react';
import { Header } from './components/Header';
import { IndustryNewsSection } from './components/IndustryNewsSection';
import { ProductArticlesSection } from './components/ProductArticlesSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero section would go here */}
      
      {/* Features section would go here */}
      
      <IndustryNewsSection />
      
      <ProductArticlesSection />
      
      {/* Coming Soon section would go here */}
      
      {/* Newsletter section would go here */}
      
      {/* Footer would go here */}
    </div>
  );
};

export default App;