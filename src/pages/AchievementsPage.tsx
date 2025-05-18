import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Achievement = Database['public']['Tables']['achievements']['Row'];

const AchievementsPage: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAchievements() {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('achievements')
          .select('*')
          .order('year', { ascending: false });
          
        if (error) {
          console.error('Error fetching achievements:', error);
          // Use fallback data if API fails
          setAchievements([
            {
              id: 1,
              year: 2023,
              title: 'Asian Athletics Championships Silver Medal',
              description: 'Secured second place in the 100m sprint with a personal best time.',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 2,
              year: 2022,
              title: 'National Record Holder',
              description: 'Broke the 10-year-old Mongolian national record in 200m sprint.',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 3,
              year: 2021,
              title: 'Diamond League Debut',
              description: 'First Mongolian sprinter to compete in the prestigious Diamond League circuit.',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 4,
              year: 2020,
              title: 'National Championships Triple Gold',
              description: 'Won gold medals in 100m, 200m, and 4x100m relay at the Mongolian National Championships.',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 5,
              year: 2018,
              title: 'Asian Games Finalist',
              description: 'Reached the final of the 100m sprint at the Asian Games, placing 5th overall.',
              created_at: new Date().toISOString(),
              updated_at: null
            }
          ]);
        } else {
          setAchievements(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    getAchievements();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="mb-4">Achievements</h1>
          <p className="text-xl text-primary-100">A timeline of milestones in my athletic career.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {achievements.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No achievements found. Check back soon!</p>
              </div>
            ) : (
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
                
                {/* Achievement Items */}
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="text-secondary-500 font-bold text-xl mb-2">{achievement.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                        {achievement.description && (
                          <p className="text-gray-600">{achievement.description}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Center Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center shadow-md">
                        <Trophy className="text-white" size={20} />
                      </div>
                    </div>
                    
                    {/* Empty Space for Alternating Layout */}
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl italic mb-8">
              "Every achievement is a stepping stone to greater heights. The journey continues."
            </blockquote>
            <p className="text-lg">— Budjaa</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;