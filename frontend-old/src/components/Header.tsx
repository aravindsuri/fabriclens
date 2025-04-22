import React from 'react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-5">
          <div className="flex items-center font-bold text-2xl text-emerald-500">
            <Logo className="mr-2 w-10 h-10" />
            FabricLens
          </div>
          <div className="flex gap-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Products</a>
            <a href="#features" className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Solutions</a>
            <a href="#industry-news" className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Industry News</a>
            <a href="#product-articles" className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Articles</a>
            <a href="#coming-soon" className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">SaaS Portal</a>
            <a href="#footer" className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Resources</a>
          </div>
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-5 rounded transition-colors">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};