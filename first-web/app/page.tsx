
'use client';

import Hero from './components/Hero';
import Services from './components/Services';
import InteractiveTimeline from './components/InteractiveTimeline';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <InteractiveTimeline />
      <Footer />
    </div>
  );
}
