# Supabase Database Setup for Contact Form

## Step 1: Create the Table in Supabase

### Option A: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the SQL from `supabase/migrations/001_create_contact_submissions.sql`
5. Click **Run** to execute the SQL

### Option B: Using Supabase CLI

If you have Supabase CLI installed:

```bash
supabase db push
```

## Step 2: Verify Table Creation

1. Go to **Table Editor** in Supabase Dashboard
2. You should see a new table called `contact_submissions` with the following columns:
   - `id` (UUID, Primary Key)
   - `name` (VARCHAR)
   - `email` (VARCHAR)
   - `phone` (VARCHAR, nullable)
   - `project_type` (VARCHAR)
   - `vision` (TEXT)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

## Step 3: Test the Setup

After updating the contact form, submit a test entry and verify it appears in the Supabase table.

## Security Notes

- **Row Level Security (RLS)** is enabled
- Anyone can **insert** (submit forms) - this is intentional for public contact forms
- Only **authenticated users** can read submissions - adjust this policy in Supabase Dashboard if needed
- For production, consider adding:
  - Rate limiting
  - Email validation
  - Spam protection (reCAPTCHA)

## Viewing Submissions

To view submissions:
1. Go to **Table Editor** → `contact_submissions`
2. Or create a custom dashboard page in your admin panel



