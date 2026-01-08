-- Fix RLS Policies for contact_submissions table
-- Run this if you're having issues with RLS policies

-- First, drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_submissions;
DROP POLICY IF EXISTS "Xenex" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for users based on user_id" ON contact_submissions;

-- Create policy to allow inserts (form submissions) from anyone (anon users)
CREATE POLICY "Allow public inserts" 
ON contact_submissions
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow authenticated users to read submissions
CREATE POLICY "Allow authenticated reads" 
ON contact_submissions
FOR SELECT 
TO authenticated
USING (true);

-- Optional: Allow public to read their own submissions (if you want users to see their submissions)
-- Uncomment below if needed:
-- CREATE POLICY "Allow public to read own submissions"
-- ON contact_submissions
-- FOR SELECT
-- TO anon, authenticated
-- USING (true);



