/*
  # Budjaa Athlete Website Initial Schema

  1. New Tables
     - `hero` - Homepage hero section content
     - `about` - About page content
     - `achievements` - Athletic achievements timeline
     - `gallery` - Photo gallery images
     - `news` - News articles and updates
  2. Security
     - Enable RLS on all tables
     - Add policies for authenticated users to manage content
*/

-- Create "hero" table for homepage hero section
CREATE TABLE IF NOT EXISTS hero (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  quote TEXT,
  cta_text TEXT,
  cta_link TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ
);

-- Create "about" table for about page content
CREATE TABLE IF NOT EXISTS about (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ
);

-- Create "achievements" table for timeline
CREATE TABLE IF NOT EXISTS achievements (
  id SERIAL PRIMARY KEY,
  year INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ
);

-- Create "gallery" table for photo gallery
CREATE TABLE IF NOT EXISTS gallery (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ
);

-- Create "news" table for blog/news articles
CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ,
  published BOOLEAN DEFAULT true
);

-- Enable Row Level Security on all tables
ALTER TABLE hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE about ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users to manage content
-- Hero table policies
CREATE POLICY "Allow public read access to hero content" 
  ON hero FOR SELECT 
  USING (true);

CREATE POLICY "Allow authenticated users to insert hero content" 
  ON hero FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update hero content" 
  ON hero FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "Allow authenticated users to delete hero content" 
  ON hero FOR DELETE 
  TO authenticated 
  USING (true);

-- About table policies
CREATE POLICY "Allow public read access to about content" 
  ON about FOR SELECT 
  USING (true);

CREATE POLICY "Allow authenticated users to insert about content" 
  ON about FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update about content" 
  ON about FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "Allow authenticated users to delete about content" 
  ON about FOR DELETE 
  TO authenticated 
  USING (true);

-- Achievements table policies
CREATE POLICY "Allow public read access to achievements" 
  ON achievements FOR SELECT 
  USING (true);

CREATE POLICY "Allow authenticated users to insert achievements" 
  ON achievements FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update achievements" 
  ON achievements FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "Allow authenticated users to delete achievements" 
  ON achievements FOR DELETE 
  TO authenticated 
  USING (true);

-- Gallery table policies
CREATE POLICY "Allow public read access to gallery" 
  ON gallery FOR SELECT 
  USING (true);

CREATE POLICY "Allow authenticated users to insert gallery items" 
  ON gallery FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update gallery items" 
  ON gallery FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "Allow authenticated users to delete gallery items" 
  ON gallery FOR DELETE 
  TO authenticated 
  USING (true);

-- News table policies
CREATE POLICY "Allow public read access to published news" 
  ON news FOR SELECT 
  USING (published = true);

CREATE POLICY "Allow authenticated users to view all news" 
  ON news FOR SELECT 
  TO authenticated 
  USING (true);

CREATE POLICY "Allow authenticated users to insert news" 
  ON news FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update news" 
  ON news FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "Allow authenticated users to delete news" 
  ON news FOR DELETE 
  TO authenticated 
  USING (true);