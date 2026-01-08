-- Run this SQL in Supabase SQL Editor to create the table
-- This will create the contact_submissions table if it doesn't exist

-- Step 1: Create the table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  project_type VARCHAR(100) NOT NULL,
  vision TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Step 2: Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- Step 3: Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Step 4: Create RLS Policies
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON public.contact_submissions;

-- Create INSERT policy (allows form submissions)
CREATE POLICY "Allow public inserts" 
ON public.contact_submissions
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create SELECT policy (allows viewing submissions)
CREATE POLICY "Allow authenticated reads" 
ON public.contact_submissions
FOR SELECT 
TO authenticated
USING (true);

-- Step 5: Create function for updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Step 6: Create trigger
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON public.contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Step 7: Verify table was created
SELECT 
    table_name, 
    table_schema 
FROM information_schema.tables 
WHERE table_name = 'contact_submissions' 
AND table_schema = 'public';


