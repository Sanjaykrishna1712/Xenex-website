# 🔌 How to Connect Your Project to Supabase

## ✅ Current Status

Your project is **already connected** to Supabase! Here's what's set up:

- ✅ Supabase client installed (`@supabase/supabase-js`)
- ✅ Environment variables configured (`.env.local`)
- ✅ Client code ready (`lib/supabase/client.ts`)
- ✅ Contact form integrated (`app/contact/page.tsx`)

## 📋 Step-by-Step Verification

### Step 1: Verify Your Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Sign in to your account
3. Select your project (should be: `ftzbzofhjbcofxssimxr`)
4. Verify you can see your project dashboard

### Step 2: Check Your Credentials

Your `.env.local` file should contain:
```env
NEXT_PUBLIC_SUPABASE_URL=https://ftzbzofhjbcofxssimxr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**To get/verify these credentials:**
1. In Supabase Dashboard → **Settings** → **API**
2. Copy **Project URL** → Should match `NEXT_PUBLIC_SUPABASE_URL`
3. Copy **anon public** key → Should match `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 3: Create the Database Table

If you haven't created the `contact_submissions` table yet:

1. Go to Supabase Dashboard → **SQL Editor**
2. Click **New Query**
3. Copy and paste this SQL:

```sql
-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  project_type VARCHAR(100) NOT NULL,
  vision TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (form submissions) from anyone
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to read submissions
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

4. Click **Run** (or press Ctrl+Enter)
5. You should see: "Success. No rows returned"

### Step 4: Verify Table Exists

1. Go to **Table Editor** in Supabase Dashboard
2. Look for `contact_submissions` table
3. Click on it to see the structure
4. Verify columns: `id`, `name`, `email`, `phone`, `project_type`, `vision`, `created_at`, `updated_at`

### Step 5: Test the Connection

#### Option A: Test via API Endpoint

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:3000/api/test-supabase`
3. You should see:
   ```json
   {
     "success": true,
     "message": "Supabase connection successful",
     "tableExists": true
   }
   ```

#### Option B: Test via Contact Form

1. Go to: `http://localhost:3000/contact`
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +91 98765 43210
   - Project Type: Road Build
   - Vision: This is a test submission
3. Click **Submit Your Vision**
4. You should see: "✓ Thank you! Your vision has been submitted..."
5. Check Supabase Dashboard → **Table Editor** → `contact_submissions`
6. Your test entry should appear there!

### Step 6: Verify Data in Supabase

1. Go to Supabase Dashboard → **Table Editor**
2. Select `contact_submissions` table
3. You should see all submitted forms
4. Click on any row to see full details

## 🔍 Troubleshooting

### Error: "Missing Supabase environment variables"
- **Solution**: Make sure `.env.local` exists in project root
- **Solution**: Restart dev server after creating/updating `.env.local`

### Error: "table does not exist"
- **Solution**: Run the SQL migration (Step 3 above)
- **Solution**: Check table name is exactly `contact_submissions` (with underscore)

### Error: "permission denied" or "new row violates row-level security policy"
- **Solution**: Go to **Authentication** → **Policies**
- **Solution**: Verify INSERT policy exists for `contact_submissions` table
- **Solution**: Policy should allow `anon` role to INSERT

### Form submits but no data appears
- **Solution**: Check browser console (F12) for errors
- **Solution**: Verify RLS policies allow SELECT (if you want to view data)
- **Solution**: Make sure you're logged into Supabase Dashboard to view data

## 📊 Viewing Your Data

### In Supabase Dashboard:
1. **Table Editor** → `contact_submissions` → View all submissions
2. **SQL Editor** → Run queries:
   ```sql
   -- View all submissions
   SELECT * FROM contact_submissions ORDER BY created_at DESC;
   
   -- Count submissions
   SELECT COUNT(*) FROM contact_submissions;
   
   -- Filter by project type
   SELECT * FROM contact_submissions 
   WHERE project_type = 'road-build';
   ```

## ✅ Connection Checklist

- [ ] Supabase project created
- [ ] `.env.local` file exists with correct credentials
- [ ] `contact_submissions` table created
- [ ] RLS policies configured (INSERT allowed for anon)
- [ ] Dev server running (`npm run dev`)
- [ ] Test endpoint works (`/api/test-supabase`)
- [ ] Contact form submits successfully
- [ ] Data appears in Supabase Table Editor

## 🎉 Success!

Once all steps are complete, your contact form will automatically save all submissions to your Supabase database!



