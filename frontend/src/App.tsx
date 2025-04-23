import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MedallionArchitecturePage from './pages/products/medallion-architecture';

// Styles
import './styles/App.css';
import './styles/Header.css';
import './styles/NewsSection.css';
import './styles/ArticlesSection.css';
import './styles/ProductPage.css';
import APIFabricIngestionPage from './pages/products/api-fabric-ingestion';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/medallion-architecture" element={<MedallionArchitecturePage />} />
            <Route path="/products/api-fabric-ingestion" element={<APIFabricIngestionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;