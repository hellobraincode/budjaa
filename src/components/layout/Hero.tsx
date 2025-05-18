import { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.from('#hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
    gsap.from('#hero-subtitle', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });
    gsap.to('.hero-bg', {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop className="hero-bg absolute top-0 left-0 w-full h-full object-cover z-[-1]" loading="lazy">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-runner-running-in-a-park-39804-large.mp4" type="video/mp4" />
        <img src="https://images.unsplash.com/photo-1508098682722-8b98199184bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Runner" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-800 via-yellow-500 to-red-600 bg-clip-text text-transparent">
          Mongolian Runner
        </h1>
        <p id="hero-subtitle" className="mt-4 text-xl md:text-2xl">The Pride of Mongolia</p>
        <a href="#about" className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
          Discover More
        </a>
      </div>
    </header>
  );
};

export default Hero;