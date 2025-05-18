import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type About = Database['public']['Tables']['about']['Row'];

const AboutPage: React.FC = () => {
  const [about, setAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAboutContent() {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('about')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();
          
        if (error) {
          console.error('Error fetching about content:', error);
          // Use fallback data if API fails
          setAbout({
            id: 0,
            content: `
              <p>Born in the vast plains of Mongolia, Budjaa discovered his passion for athletics at a young age. Growing up in a nomadic family, he developed extraordinary endurance and strength from the traditional lifestyle.</p>
              <p>At the age of 15, Budjaa's exceptional talent was recognized by national coaches, leading him to move to Ulaanbaatar to train professionally. His dedication and natural ability quickly established him as the country's rising star.</p>
              <p>Since then, Budjaa has broken numerous national records and represented Mongolia in international competitions, bringing pride to his country and inspiring a new generation of athletes.</p>
              <p>Beyond his athletic achievements, Budjaa is deeply committed to preserving Mongolian traditions and supporting youth sports programs in rural communities.</p>
            `,
            image_url: 'https://images.pexels.com/photos/17249697/pexels-photo-17249697/free-photo-of-portrait-of-mongolian-man-wearing-deel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            created_at: new Date().toISOString(),
            updated_at: null,
          });
        } else {
          setAbout(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    getAboutContent();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Fallback content if none exists
  const aboutContent = about?.content || "<p>About content will be available soon.</p>";
  const aboutImage = about?.image_url || "https://images.pexels.com/photos/17249697/pexels-photo-17249697/free-photo-of-portrait-of-mongolian-man-wearing-deel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="mb-4">About Budjaa</h1>
          <p className="text-xl text-primary-100">Learn about my journey and passion for athletics.</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: aboutContent }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <img 
                src={aboutImage} 
                alt="Budjaa" 
                className="rounded-lg shadow-lg max-h-[600px] object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">10.2s</div>
              <p className="text-gray-600">100m Personal Best</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">28</div>
              <p className="text-gray-600">International Competitions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">2018</div>
              <p className="text-gray-600">Asian Games Debut</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
              <p className="text-gray-600">National Championships</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">My Philosophy</h2>
            <blockquote className="text-xl italic mb-8 text-gray-700">
              "Athletics is not just about physical strength, but mental fortitude. Every day I strive to push my limits and inspire others to do the same."
            </blockquote>
            <p className="text-lg text-gray-600">
              Budjaa's approach combines traditional Mongolian values with modern athletic techniques, creating a unique training philosophy that has propelled him to success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;