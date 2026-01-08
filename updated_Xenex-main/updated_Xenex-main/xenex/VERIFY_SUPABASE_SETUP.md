# Verify Supabase Table Setup

## ✅ Table Structure Check

Your `contact_submissions` table should have these columns:

| Column Name | Type | Required | Description |
|------------|------|----------|-------------|
| `id` | UUID | Yes | Primary key (auto-generated) |
| `name` | VARCHAR(255) | Yes | User's name |
| `email` | VARCHAR(255) | Yes | User's email |
| `phone` | VARCHAR(50) | No | User's phone number (optional) |
| `project_type` | VARCHAR(100) | Yes | Type of project (road-build, film-build, etc.) |
| `vision` | TEXT | Yes | User's vision/message |
| `created_at` | TIMESTAMP | Yes | Auto-generated timestamp |
| `updated_at` | TIMESTAMP | Yes | Auto-updated timestamp |

## 🔍 How to Verify Your Table

### Step 1: Check Table Exists
1. Go to Supabase Dashboard: https://app.supabase.com
2. Navigate to **Table Editor**
3. Look for `contact_submissions` table
4. If it doesn't exist, run the SQL from `supabase/migrations/001_create_contact_submissions.sql`

### Step 2: Verify Column Names
Make sure the column names match exactly:
- ✅ `name` (not `user_name` or `full_name`)
- ✅ `email` (not `user_email` or `email_address`)
- ✅ `phone` (not `phone_number` or `mobile`)
- ✅ `project_type` (with underscore, not `projectType`)
- ✅ `vision` (not `message` or `description`)

### Step 3: Check Row Level Security (RLS)
1. Go to **Authentication** → **Policies**
2. Find `contact_submissions` table
3. Verify there's a policy named **"Allow public inserts"** that allows:
   - **Operation**: INSERT
   - **Roles**: `anon`, `authenticated`
   - **WITH CHECK**: `true`

### Step 4: Test the Form
1. Start your dev server: `npm run dev`
2. Go to `/contact` page
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +91 98765 43210
   - Project Type: Road Build
   - Vision: This is a test submission
4. Submit the form
5. Check browser console (F12) for logs:
   - Should see: "Submitting to Supabase: {...}"
   - Should see: "Successfully inserted: [...]"
6. Check Supabase Dashboard → Table Editor → `contact_submissions`
   - Your test entry should appear there

## 🐛 Troubleshooting

### Error: "table does not exist"
- Run the SQL migration in Supabase SQL Editor
- Check table name spelling: `contact_submissions` (with underscore)

### Error: "permission denied" or "new row violates row-level security policy"
- Go to Supabase → Authentication → Policies
- Create/verify the INSERT policy for `contact_submissions`
- Policy should allow `anon` role to INSERT

### Error: "column does not exist"
- Check column names match exactly (case-sensitive)
- Verify `project_type` uses underscore (not `projectType`)
- Check all required columns exist

### Form submits but no data appears
- Check RLS policies allow SELECT for viewing
- Verify you're logged into Supabase Dashboard
- Check browser console for any errors

## 📊 Viewing Submissions

### In Supabase Dashboard:
```sql
SELECT * FROM contact_submissions 
ORDER BY created_at DESC;
```

### Count submissions:
```sql
SELECT COUNT(*) FROM contact_submissions;
```

### Filter by project type:
```sql
SELECT * FROM contact_submissions 
WHERE project_type = 'road-build'
ORDER BY created_at DESC;
```

## ✅ Success Indicators

When everything is working correctly:
- ✅ Form shows "Submitting..." when clicked
- ✅ Success message appears: "✓ Thank you! Your vision has been submitted..."
- ✅ Form fields clear after submission
- ✅ Browser console shows "Successfully inserted: [...]"
- ✅ Data appears in Supabase `contact_submissions` table
- ✅ No error messages displayed



