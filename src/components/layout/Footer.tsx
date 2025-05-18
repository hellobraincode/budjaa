import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">BUDJAA</Link>
            <p className="text-primary-100 mb-6">
              Mongolian athlete aspiring to greatness and inspiring the next generation.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-100 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/achievements" className="text-primary-100 hover:text-white transition-colors">Achievements</Link></li>
              <li><Link to="/gallery" className="text-primary-100 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/news" className="text-primary-100 hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-secondary-400" />
                <a href="mailto:contact@budjaa.com" className="text-primary-100 hover:text-white transition-colors">contact@budjaa.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-secondary-400" />
                <a href="tel:+9761234567" className="text-primary-100 hover:text-white transition-colors">+976 123 4567</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-100 mb-4">Subscribe to my newsletter for the latest updates and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md text-gray-800 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8 text-center">
          <p className="text-primary-300 text-sm">
            &copy; {currentYear} Budjaa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;