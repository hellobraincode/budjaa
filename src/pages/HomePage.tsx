import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Hero = Database['public']['Tables']['hero']['Row'];

const HomePage: React.FC = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getHeroContent() {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('hero')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();
          
        if (error) {
          console.error('Error fetching hero content:', error);
          // Use fallback data if API fails
          setHero({
            id: 0,
            title: 'BUDJAA',
            subtitle: 'Mongolian Athletic Champion',
            quote: 'I am the fastest runner in Mongolia, and I will be the fastest in the world.',
            cta_text: 'View Achievements',
            cta_link: '/achievements',
            image_url: 'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            created_at: new Date().toISOString(),
            updated_at: null,
          });
        } else {
          setHero(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    getHeroContent();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Fallback image if none provided
  const heroImage = hero?.image_url || 'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-4 leading-tight">
              {hero?.title || 'BUDJAA'}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-200">
              {hero?.subtitle || 'Mongolian Athletic Champion'}
            </h2>
            {hero?.quote && (
              <blockquote className="text-xl md:text-2xl italic mb-8 border-l-4 border-secondary-500 pl-4">
                "{hero.quote}"
              </blockquote>
            )}
            {hero?.cta_text && (
              <Link 
                to={hero?.cta_link || '/achievements'} 
                className="btn-primary group"
              >
                {hero.cta_text}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-4 text-primary-900">Accomplishments</h2>
            <p className="text-lg text-gray-700">
              From regional competitions to international championships, Budjaa has made his mark in the athletic world with dedication, discipline, and determination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">15+</div>
              <h3 className="text-xl font-semibold mb-2">National Records</h3>
              <p className="text-gray-600">
                Breaking boundaries and setting new standards in Mongolian athletics.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">25</div>
              <h3 className="text-xl font-semibold mb-2">Gold Medals</h3>
              <p className="text-gray-600">
                Achieved across regional and international competitions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">8</div>
              <h3 className="text-xl font-semibold mb-2">Years Professional</h3>
              <p className="text-gray-600">
                Dedicated to excellence and continuous improvement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Follow Budjaa's Journey
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg mb-8"
            >
              Stay updated with the latest news, achievements, and upcoming events.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/news" className="btn-secondary">
                Latest News
              </Link>
              <Link to="/gallery" className="btn-outline">
                View Gallery
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;