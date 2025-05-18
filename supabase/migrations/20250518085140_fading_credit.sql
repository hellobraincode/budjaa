/*
  # Initial Schema Setup

  1. New Tables
    - `hero`
      - `id` (integer, primary key)
      - `title` (text, required)
      - `subtitle` (text, optional)
      - `quote` (text, optional)
      - `cta_text` (text, optional)
      - `cta_link` (text, optional)
      - `image_url` (text, optional)
      - `created_at` (timestamptz, default: now())
      - `updated_at` (timestamptz, optional)

    - `about`
      - `id` (integer, primary key)
      - `content` (text, required)
      - `image_url` (text, optional)
      - `created_at` (timestamptz, default: now())
      - `updated_at` (timestamptz, optional)

    - `achievements`
      - `id` (integer, primary key)
      - `year` (integer, required)
      - `title` (text, required)
      - `description` (text, optional)
      - `created_at` (timestamptz, default: now())
      - `updated_at` (timestamptz, optional)

    - `gallery`
      - `id` (integer, primary key)
      - `image_url` (text, required)
      - `caption` (text, optional)
      - `created_at` (timestamptz, default: now())
      - `updated_at` (timestamptz, optional)

    - `news`
      - `id` (integer, primary key)
      - `title` (text, required)
      - `content` (text, required)
      - `image_url` (text, optional)
      - `created_at` (timestamptz, default: now())
      - `updated_at` (timestamptz, optional)
      - `published` (boolean, default: true)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage content
    - Add policies for public users to read content
*/

-- Create hero table
CREATE TABLE IF NOT EXISTS hero (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL,
  subtitle text,
  quote text,
  cta_text text,
  cta_link text,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz
);

ALTER TABLE hero ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to insert hero content"
  ON hero
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update hero content"
  ON hero
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete hero content"
  ON hero
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow public read access to hero content"
  ON hero
  FOR SELECT
  TO public
  USING (true);

-- Create about table
CREATE TABLE IF NOT EXISTS about (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content text NOT NULL,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz
);

ALTER TABLE about ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to insert about content"
  ON about
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update about content"
  ON about
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete about content"
  ON about
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow public read access to about content"
  ON about
  FOR SELECT
  TO public
  USING (true);

-- Create achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  year integer NOT NULL,
  title text NOT NULL,
  description text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz
);

ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to insert achievements"
  ON achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update achievements"
  ON achievements
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete achievements"
  ON achievements
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow public read access to achievements"
  ON achievements
  FOR SELECT
  TO public
  USING (true);

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  image_url text NOT NULL,
  caption text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz
);

ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to insert gallery items"
  ON gallery
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update gallery items"
  ON gallery
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete gallery items"
  ON gallery
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow public read access to gallery"
  ON gallery
  FOR SELECT
  TO public
  USING (true);

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz,
  published boolean DEFAULT true
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to insert news"
  ON news
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update news"
  ON news
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete news"
  ON news
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to view all news"
  ON news
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow public read access to published news"
  ON news
  FOR SELECT
  TO public
  USING (published = true);