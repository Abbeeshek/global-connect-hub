import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection backgroundImage={heroBg} />
      <section id="about">
        <AboutSection />
      </section>
      <section id="opportunities">
        <OpportunitiesSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default Index;
