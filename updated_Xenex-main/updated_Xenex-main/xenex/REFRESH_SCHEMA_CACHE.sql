-- Run this in Supabase SQL Editor to help refresh schema cache
-- This queries the table which can trigger a schema refresh

-- Query the table structure (helps refresh cache)
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
AND table_name = 'contact_submissions'
ORDER BY ordinal_position;

-- Test query (also helps refresh cache)
SELECT COUNT(*) FROM public.contact_submissions;

-- Verify table exists
SELECT 
    table_schema,
    table_name,
    table_type
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name = 'contact_submissions';


