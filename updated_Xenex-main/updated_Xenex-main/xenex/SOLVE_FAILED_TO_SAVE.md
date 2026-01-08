# 🔧 Solve "Failed to save submission" Error

## 🔍 Step 1: Check Browser Console for Exact Error

1. **Open your contact form**: `http://localhost:3000/contact`
2. **Open Browser Console** (Press F12)
3. **Submit the form**
4. **Look for error messages** - they will tell you exactly what's wrong

## 🎯 Common Errors and Solutions

### Error 1: "Table does not exist" or "PGRST116"

**What it means:** The table hasn't been created in Supabase yet.

**Fix:**
1. Go to Supabase Dashboard → **SQL Editor**
2. Run this SQL:

```sql
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

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" 
ON public.contact_submissions
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);
```

### Error 2: "Permission denied" or "42501"

**What it means:** RLS policies are blocking the insert.

**Fix:**
1. Go to Supabase Dashboard → **Authentication** → **Policies**
2. Find `contact_submissions` table
3. Make sure there's a policy named **"Allow public inserts"** that:
   - Allows **INSERT** operation
   - For roles: **anon** and **authenticated**
   - WITH CHECK: `true`

### Error 3: "Schema cache" error

**What it means:** Supabase schema cache is stale.

**Fix:**
1. Go to Supabase Dashboard → **Settings** → **API**
2. Find **"Schema Cache"** section
3. Click **"Refresh Schema Cache"**
4. Wait 30 seconds
5. Restart dev server: `npm run dev`

### Error 4: "Missing required fields"

**What it means:** Form is missing required data.

**Fix:** Make sure all fields are filled:
- ✅ Name
- ✅ Email
- ✅ Project Type (select from dropdown)
- ✅ Vision (message)

### Error 5: "Missing Supabase configuration"

**What it means:** Environment variables not set.

**Fix:**
1. Check `.env.local` file exists in project root
2. Verify it contains:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://ftzbzofhjbcofxssimxr.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
   ```
3. Restart dev server after creating/updating `.env.local`

## 🧪 Test Direct Connection

Run this in **Supabase SQL Editor** to test if table works:

```sql
-- Test INSERT
INSERT INTO public.contact_submissions (name, email, project_type, vision)
VALUES ('Test User', 'test@test.com', 'road-build', 'Test message')
RETURNING *;
```

- **If this works:** Table exists, issue is with API/connection
- **If this fails:** Table or policies need to be fixed

## 📋 Complete Checklist

Run through this checklist:

- [ ] Table `contact_submissions` exists in Supabase Table Editor
- [ ] RLS policy "Allow public inserts" exists
- [ ] Policy allows `anon` and `authenticated` roles
- [ ] `.env.local` file exists with correct credentials
- [ ] Dev server restarted after creating `.env.local`
- [ ] Browser console shows specific error (not just "Failed to save")
- [ ] All form fields are filled when submitting

## 🚀 Quick Fix Steps

1. **Check browser console** (F12) - what exact error do you see?
2. **Verify table exists** - Go to Supabase → Table Editor
3. **Check RLS policies** - Go to Authentication → Policies
4. **Test direct insert** - Run SQL test above
5. **Restart dev server** - `npm run dev`

## 💡 Still Not Working?

Share the **exact error message** from browser console (F12), and I'll help you fix it!

The improved error handling will now show you the specific issue instead of just "Failed to save submission".

