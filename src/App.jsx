import React, { useState, useEffect, Suspense, lazy } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStats from './components/MarqueeStats';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import LogoWall from './components/LogoWall';
import Footer from './components/Footer';
import { initSmoothScroll, destroySmoothScroll } from './lib/lenis';

// Lazy loaded below-the-fold components
const Projects = lazy(() => import('./components/Projects'));
const Insights = lazy(() => import('./components/Insights'));
const Industries = lazy(() => import('./components/Industries'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));

function SectionLoader() {
  return (
    <div className="py-24 bg-[#2F2F2F] flex flex-col items-center justify-center space-y-4">
      <div className="w-10 h-10 rounded-xl border-2 border-t-[#c5ff00] border-r-[#3a00ff] border-b-neutral-800 border-l-neutral-800 animate-spin" />
      <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
        Loading module...
      </span>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState(null);

  useEffect(() => {
    // Initialize Lenis + GSAP ScrollTrigger single source of truth
    const lenis = initSmoothScroll();

    return () => {
      destroySmoothScroll();
    };
  }, []);

  const handleContactClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForContact(serviceTitle);
    handleContactClick();
  };

  return (
    <div className="min-h-screen bg-[#2F2F2F] text-neutral-100 selection:bg-[#c5ff00] selection:text-[#2F2F2F]">
      {/* Editorial GSAP Preloader with % Counter */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Header */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Area */}
      <main id="main-content" className="relative">
        {/* Above-the-fold: Hero with GSAP entrance lines */}
        <Hero onContactClick={handleContactClick} />
        
        {/* Continuous Tech Stack Marquee & Core Quantitative Metrics */}
        <MarqueeStats />

        {/* Selected Work (06) - Positioned high like melon.studio */}
        <Suspense fallback={<SectionLoader />}>
          <Projects onContactClick={handleContactClick} />
        </Suspense>

        {/* Agency Introduction & Manifesto */}
        <About onContactClick={handleContactClick} />

        {/* Interactive Capabilities & Services (06) */}
        <Services
          onContactClick={handleContactClick}
          onSelectService={handleSelectService}
        />

        {/* Why Devontiq & Comparison Matrix */}
        <WhyUs />

        {/* 5-Phase Sprint Workflow */}
        <Process onContactClick={handleContactClick} />

        {/* Client Logo Wall with "This spot's open. Let's talk" */}
        <LogoWall onContactClick={handleContactClick} />

        {/* Insights & Technical Notes with Hover Image Swap (README.md §6.8) */}
        <Suspense fallback={<SectionLoader />}>
          <Insights />
        </Suspense>

        {/* Client Testimonials Slider with 01/03 Counter (README.md §6.9) */}
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>

        {/* Industry Verticals */}
        <Suspense fallback={<SectionLoader />}>
          <Industries onContactClick={handleContactClick} />
        </Suspense>

        {/* Frequently Asked Questions */}
        <Suspense fallback={<SectionLoader />}>
          <FAQ onContactClick={handleContactClick} />
        </Suspense>

        {/* High-Conversion Project Inquiry Form */}
        <Suspense fallback={<SectionLoader />}>
          <Contact initialSelectedService={selectedServiceForContact} />
        </Suspense>
      </main>

      {/* Studio Footer with Spotify Now Playing & Reading Widgets */}
      <Footer />
    </div>
  );
}
