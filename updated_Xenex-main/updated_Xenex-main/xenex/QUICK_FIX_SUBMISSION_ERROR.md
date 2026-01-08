# ⚡ Quick Fix: "Failed to save submission"

## 🔍 First: Check the Exact Error

1. **Open browser console** (F12 → Console tab)
2. **Submit the form**
3. **Look for the error message** - it will tell you exactly what's wrong

The form now shows detailed errors. Common ones:

## ✅ Most Common Fixes

### Fix 1: Table Doesn't Exist

**Error:** "does not exist" or "not found"

**Solution:**
1. Go to Supabase → SQL Editor
2. Run the SQL from `CREATE_TABLE_IF_MISSING.sql`
3. Verify table appears in Table Editor

### Fix 2: Missing RLS Policy

**Error:** "permission denied" or "row-level security"

**Solution:**
1. Go to Supabase → Authentication → Policies
2. Find `contact_submissions` table
3. Click "Create policy"
4. Set:
   - Name: `Allow public inserts`
   - Operation: **INSERT**
   - Roles: **anon**, **authenticated**
   - WITH CHECK: `true`
5. Save policy

### Fix 3: Schema Cache Issue

**Error:** "schema cache"

**Solution:**
1. Go to Supabase → Settings → API
2. Find "Schema Cache" section
3. Click "Refresh" or "Reload Schema"
4. Wait 30 seconds
5. Restart dev server: `npm run dev`

### Fix 4: Missing Required Fields

**Error:** "Missing required fields"

**Solution:**
- Make sure all fields are filled:
  - ✅ Name
  - ✅ Email  
  - ✅ Project Type (select from dropdown)
  - ✅ Vision (message)

## 🧪 Test Your Setup

Run this in **Supabase SQL Editor** to test:

```sql
-- Test 1: Check if table exists
SELECT table_name 
FROM information_schema.tables 
WHERE table_name = 'contact_submissions';

-- Test 2: Try inserting test data
INSERT INTO public.contact_submissions (name, email, project_type, vision)
VALUES ('Test', 'test@test.com', 'road-build', 'Test message')
RETURNING *;

-- Test 3: Check policies
SELECT * FROM pg_policies 
WHERE tablename = 'contact_submissions';
```

## 📋 Complete Checklist

- [ ] Table `contact_submissions` exists in Supabase Table Editor
- [ ] RLS policy "Allow public inserts" exists
- [ ] Policy allows INSERT for `anon` role
- [ ] `.env.local` file exists with correct credentials
- [ ] Dev server restarted after changes
- [ ] Browser console checked for detailed error
- [ ] All form fields filled correctly

## 🚀 After Fixing

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Test the form:**
   - Go to `/contact`
   - Fill out all fields
   - Submit
   - Check browser console for success message
   - Check Supabase Table Editor for your submission

## 💡 Still Not Working?

Share the **exact error message** from browser console (F12) and I'll help you fix it!

The updated code now shows much more detailed errors, so check the browser console for the specific issue.


