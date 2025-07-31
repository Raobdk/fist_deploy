
'use client';

import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <LocationMap />
      <Footer />
    </div>
  );
}