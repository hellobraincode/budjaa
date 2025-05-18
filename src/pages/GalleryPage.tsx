import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type GalleryImage = Database['public']['Tables']['gallery']['Row'];

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    async function getGalleryImages() {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('gallery')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) {
          console.error('Error fetching gallery images:', error);
          // Use fallback data if API fails
          setImages([
            {
              id: 1,
              image_url: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              caption: 'Crossing the finish line at the National Championships',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 2,
              image_url: 'https://images.pexels.com/photos/6203482/pexels-photo-6203482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              caption: 'Training at the high-altitude camp in Khövsgöl',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 3,
              image_url: 'https://images.pexels.com/photos/7188095/pexels-photo-7188095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              caption: 'Medal ceremony at the Asian Athletics Championships',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 4,
              image_url: 'https://images.pexels.com/photos/17337437/pexels-photo-17337437/free-photo-of-riding-horses-past-ger-a-traditional-mongolian-yurt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              caption: 'Visit to my hometown in the Mongolian steppe',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 5,
              image_url: 'https://images.pexels.com/photos/159745/olympic-weight-lifting-heavy-sport-159745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              caption: 'Strength training session',
              created_at: new Date().toISOString(),
              updated_at: null
            },
            {
              id: 6,
              image_url: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              caption: 'Press conference before the Diamond League',
              created_at: new Date().toISOString(),
              updated_at: null
            }
          ]);
        } else {
          setImages(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    getGalleryImages();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

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
          <h1 className="mb-4">Gallery</h1>
          <p className="text-xl text-primary-100">Visual moments from my athletic journey.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container-custom">
          {images.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No images found. Check back soon!</p>
            </div>
          ) : (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex w-auto -ml-4"
              columnClassName="pl-4 bg-clip-padding"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="mb-4 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-lg group">
                    <img 
                      src={image.image_url} 
                      alt={image.caption || 'Gallery image'} 
                      className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    {image.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4">{image.caption}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </Masonry>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-6xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image_url} 
              alt={selectedImage.caption || 'Gallery image'} 
              className="max-h-[90vh] max-w-full object-contain"
            />
            {selectedImage.caption && (
              <p className="text-white mt-4 text-center">{selectedImage.caption}</p>
            )}
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;