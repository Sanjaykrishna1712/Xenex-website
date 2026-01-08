# 🔧 Fix Supabase Connection Error (ENOTFOUND)

## ❌ Problem

The error shows:
```
getaddrinfo ENOTFOUND coktrdoehyacydsywfig.supabase.co
```

This means your `.env.local` file has the **wrong Supabase URL**. The code is trying to connect to a project that doesn't exist.

## ✅ Solution: Update Your .env.local File

### Step 1: Open Your .env.local File

Open `.env.local` in the root directory of your project.

### Step 2: Update the Supabase URL

**Replace this (WRONG):**
```env
NEXT_PUBLIC_SUPABASE_URL=https://coktrdoehyacydsywfig.supabase.co
```

**With this (CORRECT):**
```env
NEXT_PUBLIC_SUPABASE_URL=https://ftzbzofhjbcofxssimxr.supabase.co
```

### Step 3: Verify Your Complete .env.local File

Your `.env.local` should contain:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ftzbzofhjbcofxssimxr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0emJ6b2ZoamJjb2Z4c3NpbXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxMTY5NTMsImV4cCI6MjA4MTY5Mjk1M30.7qfudcAiAN9AFCZv42YFRP9con73CKB_vvxiOFwJP_s
```

**Optional (if you have it):**
```env
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### Step 4: Restart Your Development Server

After updating the `.env.local` file:

1. **Stop** your current dev server (Ctrl+C)
2. **Restart** it: `npm run dev`

The environment variables are only loaded when the server starts, so you must restart.

## ✅ Verification

After restarting, the connection error should be fixed. The API will now connect to the correct Supabase project.

## 🔍 Why This Happened

The URL `coktrdoehyacydsywfig.supabase.co` is from a different Supabase project (or doesn't exist). Your actual project URL is `ftzbzofhjbcofxssimxr.supabase.co`.

## 📝 Note

- The `.env.local` file is in your `.gitignore`, so it won't be committed to git
- Make sure you're editing `.env.local` (not `.env`)
- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Restart the dev server after any `.env.local` changes

