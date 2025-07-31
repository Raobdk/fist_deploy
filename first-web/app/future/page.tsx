
'use client';

import FutureHero from './FutureHero';
import VisionTimeline from './VisionTimeline';
import TechnologyShowcase from './TechnologyShowcase';
import FutureMetrics from './FutureMetrics';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FuturePage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navigation />
      <FutureHero />
      <TechnologyShowcase />
      <VisionTimeline />
      <FutureMetrics />
      <Footer />
    </div>
  );
}