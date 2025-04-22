import React from 'react';
import type { FC } from 'react';
import Hero from '../components/Hero';
import Accelerators from '../components/Accelerators';
import NewsSection from '../components/NewsSection';
import ArticlesSection from '../components/ArticlesSection';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Accelerators />
      <NewsSection />
      <ArticlesSection />
    </>
  );
};

export default Home; 