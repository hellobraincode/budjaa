/*
  # Initial Data Seeding

  1. Content
    - Add initial hero content
    - Add about section content
    - Add sample achievements
    - Add sample gallery items
    - Add sample news articles
*/

-- Seed hero content
INSERT INTO hero (title, subtitle, quote, cta_text, cta_link, image_url)
VALUES (
  'BUDJAA',
  'Mongolian Athletic Champion',
  'I am the fastest runner in Mongolia, and I will be the fastest in the world.',
  'View Achievements',
  '/achievements',
  'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
);

-- Seed about content
INSERT INTO about (content, image_url)
VALUES (
  '<p>Born in the vast plains of Mongolia, Budjaa discovered his passion for athletics at a young age. Growing up in a nomadic family, he developed extraordinary endurance and strength from the traditional lifestyle.</p>
   <p>At the age of 15, Budjaa''s exceptional talent was recognized by national coaches, leading him to move to Ulaanbaatar to train professionally. His dedication and natural ability quickly established him as the country''s rising star.</p>
   <p>Since then, Budjaa has broken numerous national records and represented Mongolia in international competitions, bringing pride to his country and inspiring a new generation of athletes.</p>
   <p>Beyond his athletic achievements, Budjaa is deeply committed to preserving Mongolian traditions and supporting youth sports programs in rural communities.</p>',
  'https://images.pexels.com/photos/17249697/pexels-photo-17249697/free-photo-of-portrait-of-mongolian-man-wearing-deel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
);

-- Seed achievements
INSERT INTO achievements (year, title, description)
VALUES
  (2023, 'Asian Athletics Championships Silver Medal', 'Secured second place in the 100m sprint with a personal best time.'),
  (2022, 'National Record Holder', 'Broke the 10-year-old Mongolian national record in 200m sprint.'),
  (2021, 'Diamond League Debut', 'First Mongolian sprinter to compete in the prestigious Diamond League circuit.'),
  (2020, 'National Championships Triple Gold', 'Won gold medals in 100m, 200m, and 4x100m relay at the Mongolian National Championships.'),
  (2018, 'Asian Games Finalist', 'Reached the final of the 100m sprint at the Asian Games, placing 5th overall.');

-- Seed gallery
INSERT INTO gallery (image_url, caption)
VALUES
  ('https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Crossing the finish line at the National Championships'),
  ('https://images.pexels.com/photos/6203482/pexels-photo-6203482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Training at the high-altitude camp in Khövsgöl'),
  ('https://images.pexels.com/photos/7188095/pexels-photo-7188095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Medal ceremony at the Asian Athletics Championships'),
  ('https://images.pexels.com/photos/17337437/pexels-photo-17337437/free-photo-of-riding-horses-past-ger-a-traditional-mongolian-yurt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Visit to my hometown in the Mongolian steppe'),
  ('https://images.pexels.com/photos/159745/olympic-weight-lifting-heavy-sport-159745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Strength training session'),
  ('https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Press conference before the Diamond League');

-- Seed news
INSERT INTO news (title, content, image_url, published)
VALUES
  (
    'Preparing for the Asian Championships',
    '<p>As the Asian Championships approach, I''ve intensified my training regimen, focusing on speed, endurance, and mental preparation.</p><p>The coaching team has implemented innovative techniques to address my starts, which have been a key area for improvement. Working with sports psychologists has also helped me refine my mental approach to races.</p><p>Support from my fans and country has been incredible, and I''m determined to bring back gold for Mongolia.</p>',
    'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    true
  ),
  (
    'New Partnership with National Sports Foundation',
    '<p>I''m excited to announce my new partnership with the National Sports Foundation of Mongolia. This collaboration aims to develop athletics programs in rural areas, bringing opportunities to talented youth across the country.</p><p>The foundation will provide equipment, coaching resources, and scholarships to promising young athletes who might otherwise not have access to proper training facilities.</p><p>As someone who came from a similar background, this initiative is particularly meaningful to me. I look forward to working with the foundation to inspire the next generation of Mongolian athletes.</p>',
    'https://images.pexels.com/photos/6203509/pexels-photo-6203509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    true
  ),
  (
    'Reflections on the National Championships',
    '<p>The National Championships have concluded, and I''m proud to have defended my titles in both the 100m and 200m events. Breaking the national record in the 200m was a highlight and a testament to the hard work put in over the past months.</p><p>I want to thank my coaching team, family, and supporters who continue to believe in me and push me to excel. The competition this year was fiercer than ever, showing the growing strength of athletics in Mongolia.</p><p>Now, our focus shifts to international competitions and continuing to raise Mongolia''s profile on the global athletics stage.</p>',
    'https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    true
  );