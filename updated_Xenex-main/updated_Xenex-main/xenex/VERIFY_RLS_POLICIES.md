# ✅ Fix "Invalid API key" - Using Anon Key

## What I Fixed

1. **Removed incorrect service role key** - It was for a different project
2. **Updated API route** - Now uses the anon key that matches your project URL
3. **Simplified configuration** - Using the anon key with proper RLS policies

## ⚠️ Important: Verify RLS Policies

Since we're using the anon key, you **MUST** have RLS policies set correctly:

### Step 1: Check RLS Policies in Supabase

1. Go to **Authentication** → **Policies**
2. Find `contact_submissions` table
3. Verify you have this policy:

**Policy Name:** `Allow public inserts`  
**Operation:** INSERT  
**Roles:** `anon`, `authenticated`  
**WITH CHECK:** `true`

### Step 2: Create Policy if Missing

If the policy doesn't exist:

1. Click **"Create policy"** next to `contact_submissions`
2. Fill in:
   - **Policy name**: `Allow public inserts`
   - **Allowed operation**: **INSERT**
   - **Target roles**: Check **anon** and **authenticated**
   - **USING expression**: Leave empty
   - **WITH CHECK expression**: Type `true`
3. Click **"Review"** → **"Save policy"**

### Step 3: Test

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Submit form:**
   - Go to `/contact`
   - Fill out and submit
   - Should work now!

## 🔍 If Still Getting Errors

### Error: "Permission denied"
- **Solution:** Make sure INSERT policy exists and allows `anon` role

### Error: "Table does not exist"
- **Solution:** Run CREATE TABLE SQL in Supabase SQL Editor

### Error: "Invalid API key"
- **Solution:** Make sure `.env.local` has correct anon key for your project

## ✅ Current Configuration

Your `.env.local` now has:
```env
NEXT_PUBLIC_SUPABASE_URL=https://ftzbzofhjbcofxssimxr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (matches your project)
```

This should work with proper RLS policies!


