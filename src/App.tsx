```tsx
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Timeline from './components/Timeline';
import Media from './components/Media';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gray-900 text-white font-poppins">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-yellow-500 to-red-600 bg-clip-text text-transparent">
            Mongolian Runner
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-lg hover:text-yellow-500 transition">Home</a>
            <a href="#about" className="text-lg hover:text-yellow-500 transition">About</a>
            <a href="#achievements" className="text-lg hover:text-yellow-500 transition">Achievements</a>
            <a href="#timeline" className="text-lg hover:text-yellow-500 transition">Timeline</a>
            <a href="#media" className="text-lg hover:text-yellow-500 transition">Media</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="flex flex-col space-y-1">
              <div className="w-6 h-1 bg-yellow-500"></div>
              <div className="w-6 h-1 bg-yellow-500"></div>
              <div className="w-6 h-1 bg-yellow-500"></div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-gray-800 py-4">
            <a href="#home" className="text-lg py-2 hover:text-yellow-500 transition" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-lg py-2 hover:text-yellow-500 transition" onClick={toggleMenu}>About</a>
            <a href="#achievements" className="text-lg py-2 hover:text-yellow-500 transition" onClick={toggleMenu}>Achievements</a>
            <a href="#timeline" className="text-lg py-2 hover:text-yellow-500 transition" onClick={toggleMenu}>Timeline</a>
            <a href="#media" className="text-lg py-2 hover:text-yellow-500 transition" onClick={toggleMenu}>Media</a>
          </div>
        )}
      </nav>

      {/* Main Sections */}
      <Hero />
      <About />
      <Achievements />
      <Timeline />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
```