# 🔧 Fix RLS Policy Error

## ❌ Error You're Getting

```
ERROR: 42601: syntax error at or near "create"
```

This happens when SQL statements are combined incorrectly or there's a syntax error in the policy creation.

## ✅ Solution: Run This SQL

Go to **Supabase Dashboard** → **SQL Editor** → **New Query** and run this:

```sql
-- Step 1: Drop any existing policies that might conflict
DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_submissions;
DROP POLICY IF EXISTS "Xenex" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for users based on user_id" ON contact_submissions;

-- Step 2: Create the correct INSERT policy (allows form submissions)
CREATE POLICY "Allow public inserts" 
ON contact_submissions
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Step 3: Create the SELECT policy (allows viewing submissions)
CREATE POLICY "Allow authenticated reads" 
ON contact_submissions
FOR SELECT 
TO authenticated
USING (true);
```

## 📋 Step-by-Step Instructions

### Option 1: Using SQL Editor (Recommended)

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Click **SQL Editor** in the left sidebar
4. Click **New Query**
5. Copy and paste the SQL above
6. Click **Run** (or press Ctrl+Enter)
7. You should see: "Success. No rows returned"

### Option 2: Using Table Editor

1. Go to **Table Editor** → `contact_submissions`
2. Click on **Policies** tab (at the top)
3. Delete any existing policies that have errors
4. Click **New Policy**
5. Choose:
   - **Policy name**: `Allow public inserts`
   - **Allowed operation**: `INSERT`
   - **Target roles**: `anon`, `authenticated`
   - **USING expression**: Leave empty or `true`
   - **WITH CHECK expression**: `true`
6. Click **Review** → **Save Policy**

## 🔍 Verify Policies Are Correct

After running the SQL:

1. Go to **Authentication** → **Policies**
2. Find `contact_submissions` table
3. You should see two policies:
   - ✅ **Allow public inserts** (INSERT, anon + authenticated)
   - ✅ **Allow authenticated reads** (SELECT, authenticated)

## 🧪 Test the Fix

1. Go to your contact form: `http://localhost:3000/contact`
2. Fill out and submit the form
3. Check browser console (F12) - should see "Successfully inserted"
4. Check Supabase Dashboard → **Table Editor** → `contact_submissions`
5. Your submission should appear!

## 🐛 Common Issues

### Issue: Still getting permission denied
- **Solution**: Make sure you ran the DROP statements first to remove old policies
- **Solution**: Verify the policy name matches exactly: `"Allow public inserts"`

### Issue: Can't see data in Supabase
- **Solution**: The SELECT policy only allows authenticated users
- **Solution**: Log into Supabase Dashboard (you're authenticated there)
- **Solution**: Or add a public SELECT policy if you want anyone to read

### Issue: Policy already exists error
- **Solution**: Run the DROP POLICY statements first (they use IF EXISTS, so safe)

## 📝 Policy Explanation

### INSERT Policy (Allows Form Submissions)
```sql
CREATE POLICY "Allow public inserts" 
ON contact_submissions
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);
```
- **What it does**: Allows anyone (even anonymous users) to submit the contact form
- **Why needed**: Your contact form doesn't require login, so it uses `anon` role

### SELECT Policy (Allows Viewing)
```sql
CREATE POLICY "Allow authenticated reads" 
ON contact_submissions
FOR SELECT 
TO authenticated
USING (true);
```
- **What it does**: Allows logged-in users to view submissions
- **Why needed**: You need to be logged into Supabase Dashboard to see the data

## ✅ Success Checklist

- [ ] Old policies dropped
- [ ] INSERT policy created successfully
- [ ] SELECT policy created successfully
- [ ] Contact form submits without errors
- [ ] Data appears in Supabase Table Editor



