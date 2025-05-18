import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin Pages
import LoginPage from './pages/admin/LoginPage';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/achievements" element={<Layout><AchievementsPage /></Layout>} />
      <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
      <Route path="/news" element={<Layout><NewsPage /></Layout>} />
      <Route path="/news/:id" element={<Layout><NewsPage /></Layout>} />
      
      {/* Admin Routes */}
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin" element={<Dashboard />} />
      
      {/* 404 Route */}
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  );
}

export default App;