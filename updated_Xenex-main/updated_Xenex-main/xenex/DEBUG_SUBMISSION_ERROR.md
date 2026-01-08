# 🔍 Debug "Failed to save submission" Error

## Steps to Debug

### Step 1: Check Browser Console

1. Open your contact form: `http://localhost:3000/contact`
2. Open browser console (F12 → Console tab)
3. Fill out and submit the form
4. Look for error messages - they will show the exact issue

### Step 2: Check Server Logs

1. Look at your terminal where `npm run dev` is running
2. Check for any error messages when you submit the form
3. The API route logs detailed errors

### Step 3: Verify Table Exists

Run this in **Supabase SQL Editor**:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'contact_submissions';
```

**Expected:** Should return 1 row. If empty, table doesn't exist - run the CREATE TABLE SQL.

### Step 4: Verify RLS Policies

1. Go to **Authentication** → **Policies**
2. Find `contact_submissions` table
3. Verify you have:
   - ✅ **"Allow public inserts"** policy
   - ✅ Policy allows **INSERT** operation
   - ✅ Policy allows **anon** and **authenticated** roles
   - ✅ WITH CHECK is set to `true`

### Step 5: Test Direct Insert

Run this in **Supabase SQL Editor** to test:

```sql
INSERT INTO public.contact_submissions (name, email, project_type, vision)
VALUES ('Test User', 'test@test.com', 'road-build', 'Test message')
RETURNING *;
```

- **If this works:** Table and policies are OK, issue is with the API
- **If this fails:** Check the error message - it will tell you what's wrong

## Common Error Messages & Solutions

### "Table does not exist"
**Solution:** Run the CREATE TABLE SQL in Supabase SQL Editor

### "Permission denied" or "new row violates row-level security policy"
**Solution:** 
1. Go to Authentication → Policies
2. Create INSERT policy for `contact_submissions`
3. Allow `anon` and `authenticated` roles
4. Set WITH CHECK to `true`

### "Schema cache" error
**Solution:**
1. Go to Supabase Settings → API
2. Refresh schema cache
3. Wait 30 seconds
4. Restart dev server

### "Missing required fields"
**Solution:** Make sure all form fields are filled:
- Name ✅
- Email ✅
- Project Type ✅
- Vision ✅
- Phone (optional)

## Quick Fix Checklist

- [ ] Table exists in Supabase Table Editor
- [ ] RLS policies created (INSERT policy with anon role)
- [ ] Environment variables set in `.env.local`
- [ ] Dev server restarted after changes
- [ ] Browser console checked for detailed errors
- [ ] Direct SQL INSERT test works

## Get Detailed Error

The updated code now shows more detailed errors. Check:
1. **Browser console** - Shows full error details
2. **Form error message** - Shows user-friendly message
3. **Server terminal** - Shows API route errors

Share the exact error message from browser console for more specific help!
