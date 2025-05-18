import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ArrowLeft, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type News = Database['public']['Tables']['news']['Row'];

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    async function getNewsArticles() {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });
          
        if (error) {
          console.error('Error fetching news articles:', error);
          // Use fallback data if API fails
          setArticles([
            {
              id: 1,
              title: 'Preparing for the Asian Championships',
              content: `<p>As the Asian Championships approach, I've intensified my training regimen, focusing on speed, endurance, and mental preparation.</p><p>The coaching team has implemented innovative techniques to address my starts, which have been a key area for improvement. Working with sports psychologists has also helped me refine my mental approach to races.</p><p>Support from my fans and country has been incredible, and I'm determined to bring back gold for Mongolia.</p>`,
              image_url: 'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              created_at: '2023-05-15T10:30:00Z',
              updated_at: null,
              published: true
            },
            {
              id: 2,
              title: 'New Partnership with National Sports Foundation',
              content: `<p>I'm excited to announce my new partnership with the National Sports Foundation of Mongolia. This collaboration aims to develop athletics programs in rural areas, bringing opportunities to talented youth across the country.</p><p>The foundation will provide equipment, coaching resources, and scholarships to promising young athletes who might otherwise not have access to proper training facilities.</p><p>As someone who came from a similar background, this initiative is particularly meaningful to me. I look forward to working with the foundation to inspire the next generation of Mongolian athletes.</p>`,
              image_url: 'https://images.pexels.com/photos/6203509/pexels-photo-6203509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              created_at: '2023-03-10T14:20:00Z',
              updated_at: null,
              published: true
            },
            {
              id: 3,
              title: 'Reflections on the National Championships',
              content: `<p>The National Championships have concluded, and I'm proud to have defended my titles in both the 100m and 200m events. Breaking the national record in the 200m was a highlight and a testament to the hard work put in over the past months.</p><p>I want to thank my coaching team, family, and supporters who continue to believe in me and push me to excel. The competition this year was fiercer than ever, showing the growing strength of athletics in Mongolia.</p><p>Now, our focus shifts to international competitions and continuing to raise Mongolia's profile on the global athletics stage.</p>`,
              image_url: 'https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              created_at: '2023-01-25T09:15:00Z',
              updated_at: null,
              published: true
            }
          ]);
        } else {
          setArticles(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    getNewsArticles();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // If an article ID is provided in the URL, show the single article view
  if (id) {
    const article = articles.find(a => a.id === Number(id));
    
    if (!article) {
      return (
        <div className="min-h-screen pt-24">
          <div className="container-custom py-16 text-center">
            <h2 className="mb-4">Article Not Found</h2>
            <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/news" className="btn-primary">
              Back to News
            </Link>
          </div>
        </div>
      );
    }
    
    return (
      <div className="min-h-screen pt-24">
        <article className="container-custom py-8">
          <Link to="/news" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft size={16} className="mr-1" />
            Back to all news
          </Link>
          
          <h1 className="mb-4">{article.title}</h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <Calendar size={16} className="mr-1" />
            <time dateTime={article.created_at}>
              {format(new Date(article.created_at), 'MMMM d, yyyy')}
            </time>
          </div>
          
          {article.image_url && (
            <img 
              src={article.image_url} 
              alt={article.title} 
              className="w-full h-auto object-cover rounded-lg mb-8 max-h-[500px]"
            />
          )}
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    );
  }

  // Show the list of articles
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="mb-4">News & Updates</h1>
          <p className="text-xl text-primary-100">Stay updated with the latest news and events.</p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="container-custom">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No news articles found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/news/${article.id}`} className="block group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                      {article.image_url && (
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={article.image_url} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-grow">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <Calendar size={14} className="mr-1" />
                          <time dateTime={article.created_at}>
                            {format(new Date(article.created_at), 'MMMM d, yyyy')}
                          </time>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                          {article.title}
                        </h3>
                        <div 
                          className="text-gray-600 line-clamp-3"
                          dangerouslySetInnerHTML={{ 
                            __html: article.content.replace(/<\/?[^>]+(>|$)/g, " ").substring(0, 150) + "..." 
                          }}
                        />
                      </div>
                      <div className="px-6 pb-4">
                        <span className="text-primary-600 group-hover:text-primary-700 font-medium inline-flex items-center transition-colors">
                          Read more 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;