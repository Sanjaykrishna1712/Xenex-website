-- Copy and paste this into Supabase SQL Editor
-- This will create the required RLS policies for your contact form

-- Policy 1: Allow anyone to INSERT (submit contact form)
CREATE POLICY "Allow public inserts" 
ON contact_submissions
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Policy 2: Allow authenticated users to SELECT (view submissions)
CREATE POLICY "Allow authenticated reads" 
ON contact_submissions
FOR SELECT 
TO authenticated
USING (true);



