# 🔧 Fix: "Could not find the table 'public.contact_submissions'"

## ❌ Error You're Getting

```
✗ Could not find the table 'public.contact_submissions' in the schema cache
```

This means the table doesn't exist in your Supabase database yet.

## ✅ Solution: Create the Table

### Step 1: Go to Supabase SQL Editor

1. Open [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Click **SQL Editor** in the left sidebar
4. Click **New Query**

### Step 2: Run the Complete SQL

Copy and paste this entire SQL script:

```sql
-- Create the table
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
DROP POLICY IF EXISTS "Allow public inserts" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON public.contact_submissions;

CREATE POLICY "Allow public inserts" 
ON public.contact_submissions
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated reads" 
ON public.contact_submissions
FOR SELECT 
TO authenticated
USING (true);

-- Create trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON public.contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

3. Click **Run** (or press Ctrl+Enter)
4. You should see: "Success. No rows returned"

### Step 3: Verify Table Was Created

1. Go to **Table Editor** in Supabase Dashboard
2. You should see `contact_submissions` table in the list
3. Click on it to see the columns:
   - `id` (UUID)
   - `name` (varchar)
   - `email` (varchar)
   - `phone` (varchar)
   - `project_type` (varchar)
   - `vision` (text)
   - `created_at` (timestamptz)
   - `updated_at` (timestamptz)

### Step 4: Verify RLS Policies

1. Go to **Authentication** → **Policies**
2. Find `contact_submissions` table
3. You should see two policies:
   - ✅ **Allow public inserts** (INSERT)
   - ✅ **Allow authenticated reads** (SELECT)

### Step 5: Test Your Form

1. Make sure dev server is running: `npm run dev`
2. Go to: `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check Supabase → **Table Editor** → `contact_submissions`
5. Your submission should appear!

## 🔍 Alternative: Check if Table Exists

Run this query in SQL Editor to check:

```sql
SELECT 
    table_name, 
    table_schema 
FROM information_schema.tables 
WHERE table_name = 'contact_submissions' 
AND table_schema = 'public';
```

- **If it returns a row**: Table exists, might be a cache issue
- **If it returns nothing**: Table doesn't exist, run the CREATE TABLE SQL above

## 🐛 Troubleshooting

### Still getting "table not found" after creating?
1. **Refresh the page** in Supabase Dashboard
2. **Wait a few seconds** for schema cache to update
3. **Restart your dev server**: Stop (Ctrl+C) and run `npm run dev` again
4. **Clear browser cache** and try again

### Table exists but still getting error?
1. Check the table name is exactly: `contact_submissions` (with underscore, lowercase)
2. Check it's in the `public` schema
3. Try refreshing Supabase Dashboard
4. Restart your Next.js dev server

### Permission errors?
- Make sure RLS policies are created (Step 4 above)
- Verify INSERT policy allows `anon` role

## ✅ Success Checklist

- [ ] Table created in Supabase
- [ ] Table visible in Table Editor
- [ ] RLS policies created
- [ ] Dev server restarted
- [ ] Contact form submits successfully
- [ ] Data appears in Supabase

## 📝 Quick Reference

**File created**: `CREATE_TABLE_IF_MISSING.sql` - Contains the complete SQL script

Run that SQL in Supabase SQL Editor and your table will be created!
