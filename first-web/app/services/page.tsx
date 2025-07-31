
'use client';

import ServicesHero from './ServicesHero';
import ServiceDetails from './ServiceDetails';
import ProcessTimeline from './ProcessTimeline';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navigation />
      <ServicesHero />
      <ServiceDetails />
      <ProcessTimeline />
      <Footer />
    </div>
  );
}
