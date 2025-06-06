import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedWork from './sections/FeaturedWork';
import Contact from './sections/Contact';
import BackToTopButton from './components/BackToTopButton';

const HomePageLayout: React.FC = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <FeaturedWork />
      <Contact />
      <BackToTopButton />
    </main>
  );
};

export default HomePageLayout;
