# 🔧 Fix Schema Cache Error

## ❌ Error: "Could not find the table 'public.contact_submissions' in the schema cache"

This happens when Supabase's schema cache hasn't updated after creating the table.

## ✅ Solutions (Try in Order)

### Solution 1: Refresh Schema Cache (Easiest)

1. **In Supabase Dashboard:**
   - Go to **Settings** → **API**
   - Scroll down to find **"Schema Cache"** section
   - Click **"Refresh Schema Cache"** or **"Reload Schema"**
   - Wait a few seconds

2. **Restart your dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

### Solution 2: Verify Table Exists

Run this in **SQL Editor** to confirm table exists:

```sql
SELECT 
    table_schema,
    table_name,
    table_type
FROM information_schema.tables 
WHERE table_name = 'contact_submissions'
AND table_schema = 'public';
```

**Expected result:** Should return 1 row showing the table exists.

### Solution 3: Recreate Table with Explicit Schema

If table exists but cache is stale, run this:

```sql
-- Drop and recreate (WARNING: This deletes all data!)
DROP TABLE IF EXISTS public.contact_submissions CASCADE;

-- Recreate table
CREATE TABLE public.contact_submissions (
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
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
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
```

### Solution 4: Wait and Retry

Sometimes Supabase needs a few minutes to update the cache:
1. Wait 2-3 minutes
2. Refresh your browser
3. Try submitting the form again

### Solution 5: Check Table Name and Schema

Verify the exact table name:

```sql
-- List all tables in public schema
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;
```

Make sure `contact_submissions` appears in the list.

## 🔍 Debugging Steps

### Step 1: Check Browser Console
1. Open your contact form: `http://localhost:3000/contact`
2. Open browser console (F12)
3. Submit the form
4. Look for the exact error message
5. Share the full error if it's different

### Step 2: Test Direct Connection
Run this in **SQL Editor** to test:

```sql
-- Test INSERT (should work if table exists)
INSERT INTO public.contact_submissions (name, email, project_type, vision)
VALUES ('Test', 'test@test.com', 'road-build', 'Test message')
RETURNING *;
```

If this works, the table exists and the issue is with the client connection.

### Step 3: Verify Environment Variables
Make sure `.env.local` has correct values:
```env
NEXT_PUBLIC_SUPABASE_URL=https://ftzbzofhjbcofxssimxr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

## 🚀 Quick Fix Checklist

- [ ] Table exists in Supabase Table Editor
- [ ] Refreshed schema cache in Supabase Settings
- [ ] Restarted dev server (`npm run dev`)
- [ ] Cleared browser cache
- [ ] Checked browser console for exact error
- [ ] Verified `.env.local` file exists
- [ ] Waited 2-3 minutes for cache to update

## 💡 Alternative: Use API Route

If schema cache continues to be an issue, we can create an API route that bypasses the cache. Let me know if you want this solution!


