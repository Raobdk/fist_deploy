
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    const particleData = Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3
    }));
    setParticles(particleData);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
      suppressHydrationWarning={true}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=premium%20luxury%20business%20environment%20with%20sleek%20modern%20architecture%20and%20sophisticated%20glass%20facades%2C%20elegant%20minimalist%20corporate%20interior%20design%20with%20marble%20textures%20and%20metallic%20accents%2C%20high-end%20financial%20district%20skyline%20with%20pristine%20geometric%20patterns%20and%20ambient%20lighting%2C%20contemporary%20wealth%20management%20office%20space%20with%20clean%20lines%20and%20premium%20materials%20in%20monochromatic%20tones&width=1920&height=1080&seq=hero-bg-luxury&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-full opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(218, 165, 32, 0.3) 0%, transparent 50%)`,
          }}
        />
        
        {/* Particle Network */}
        <div className="absolute inset-0 opacity-30">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Wireframe Globe */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-40"
          style={{
            transform: `translate(-50%, -50%) rotateY(${scrollY * 0.5}deg) rotateX(${scrollY * 0.2}deg)`,
          }}
        >
          <div className="w-full h-full border border-amber-400/30 rounded-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-amber-400/50 to-transparent transform -translate-x-0.5" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent transform -translate-y-0.5" />
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent transform -translate-y-0.5" />
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent transform -translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-32">
        <div className="text-center max-w-6xl w-full">
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #daa520 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateY(${scrollY * -0.3}px)`,
            }}
          >
            <span className="block font-serif italic">Designing</span>
            <span className="block font-sans">Tomorrow's</span>
            <span className="block font-serif italic text-amber-400">Capital</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-10 md:mb-12 font-light tracking-wide leading-relaxed px-4"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.001),
            }}
          >
            Where precision meets vision.<br />
            <span className="text-amber-400 font-serif italic">Wealth, In Motion.</span>
          </p>

          <div 
            className="flex flex-col items-center space-y-4 sm:space-y-6"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center items-center">
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-bold text-sm sm:text-base md:text-lg tracking-wider hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 rounded-none whitespace-nowrap cursor-pointer"
              >
                <span className="group-hover:tracking-widest transition-all duration-300">DISCOVER SERVICES</span>
              </button>
              
              <Link href="/contact#get-in-touch">
                <button className="group px-6 sm:px-8 md:px-12 py-3 sm:py-4 border border-amber-400 text-amber-400 font-bold text-sm sm:text-base md:text-lg tracking-wider hover:bg-amber-400 hover:text-black transition-all duration-500 rounded-none whitespace-nowrap cursor-pointer">
                  <span className="group-hover:tracking-widest transition-all duration-300">CONTACT US</span>
                </button>
              </Link>
            </div>
            
            <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
            
            <div className="text-xs text-gray-500 uppercase tracking-widest animate-bounce px-4 text-center">
              Scroll to Begin Journey
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(218, 165, 32, 0.1) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
