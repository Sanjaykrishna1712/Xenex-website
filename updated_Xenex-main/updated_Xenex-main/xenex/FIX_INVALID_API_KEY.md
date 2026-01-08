# 🔧 Fix "Invalid API key" Error

## ❌ Problem

The service role key doesn't match your Supabase project URL.

**Your URL:** `https://ftzbzofhjbcofxssimxr.supabase.co`  
**Service key project:** `coktrdoehyacydsywfig` (different project!)

## ✅ Solution: Get the Correct Service Role Key

### Step 1: Go to Your Supabase Project

1. Open [Supabase Dashboard](https://app.supabase.com)
2. **Select the project** that matches your URL: `ftzbzofhjbcofxssimxr`
3. Go to **Settings** → **API**

### Step 2: Copy the Service Role Key

1. Scroll down to **"Project API keys"** section
2. Find **"service_role"** key (NOT the anon key)
3. **Copy the entire key** (it's long, starts with `eyJ...`)

### Step 3: Update .env.local

Replace the `SUPABASE_SERVICE_ROLE_KEY` with the correct one from your project.

## 🔄 Alternative: Use Anon Key (Simpler)

If you can't find the service role key, we can use the anon key with proper RLS policies instead.


