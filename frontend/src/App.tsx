import React from 'react';
import './App.css'; // Main App styles
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IndustryNewsSection from './components/IndustryNewsSection';
import ProductArticlesSection from './components/ProductArticlesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <IndustryNewsSection />
        <ProductArticlesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;