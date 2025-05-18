import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
  ];

  const adminLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Edit Hero', path: '/admin/hero' },
    { name: 'Edit About', path: '/admin/about' },
    { name: 'Achievements', path: '/admin/achievements' },
    { name: 'Gallery', path: '/admin/gallery' },
    { name: 'News', path: '/admin/news' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-gray-900' : 'bg-transparent text-white'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl">
          BUDJAA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium hover:text-primary-500 transition-colors duration-200 ${
                location.pathname === link.path ? 'text-primary-500' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}

          {user && (
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 font-medium text-primary-500"
                onClick={() => {}}
              >
                <span>Admin</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {adminLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {link.name}
                  </Link>
                ))}
                <button 
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}

          {!user && (
            <Link
              to="/admin/login"
              className="text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200"
            >
              Admin Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-current focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium py-2 text-gray-800 hover:text-primary-500 transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-primary-500' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {user && (
              <>
                <div className="h-px w-full bg-gray-200 my-1"></div>
                {adminLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-medium py-2 text-gray-800 hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
                <button 
                  onClick={() => signOut()}
                  className="text-left font-medium py-2 text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </>
            )}

            {!user && (
              <Link
                to="/admin/login"
                className="font-medium py-2 text-primary-500 hover:text-primary-600 transition-colors duration-200"
              >
                Admin Login
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;