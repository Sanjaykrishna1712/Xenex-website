# 🏗️ Supabase Connection - Best Practices Implementation

## 📁 Project Structure

```
lib/
├── supabase/
│   ├── client.ts          # Client-side Supabase client (browser-safe)
│   └── server.ts          # Server-side Supabase client (API routes)
├── types/
│   └── contact.ts         # TypeScript types for contact submissions
└── validations/
    └── contact.ts         # Input validation and sanitization

app/
├── api/
│   └── contact/
│       └── route.ts       # Backend API endpoint (server-side)
└── contact/
    └── page.tsx            # Frontend contact form (client-side)
```

## 🔐 Security Architecture

### Client-Side (`lib/supabase/client.ts`)
- ✅ Uses **anon key** (safe for browser)
- ✅ Respects Row Level Security (RLS)
- ✅ Singleton pattern (efficient)
- ✅ Proper error handling

### Server-Side (`lib/supabase/server.ts`)
- ✅ Uses **service role key** (if available) or anon key
- ✅ Server-only (never exposed to browser)
- ✅ Bypasses RLS when using service role key
- ✅ Optimized for server-side operations

### API Route (`app/api/contact/route.ts`)
- ✅ Server-side only (secure)
- ✅ Input validation
- ✅ Data sanitization
- ✅ Proper error handling
- ✅ Type-safe responses

## 🔄 Data Flow

```
Frontend (Contact Form)
    ↓
    POST /api/contact
    ↓
Backend API Route (route.ts)
    ↓
    Validation (validations/contact.ts)
    ↓
    Sanitization
    ↓
Server Supabase Client (server.ts)
    ↓
Supabase Database
    ↓
Response (success/error)
    ↓
Frontend (displays result)
```

## 📝 Usage Examples

### Frontend: Submit Contact Form

```typescript
// app/contact/page.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  const result = await response.json();
  
  if (result.success) {
    // Handle success
  } else {
    // Handle error
  }
};
```

### Backend: API Route

```typescript
// app/api/contact/route.ts
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { validateContactSubmission } from '@/lib/validations/contact'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Validate
  const errors = validateContactSubmission(body)
  if (errors.length > 0) {
    return NextResponse.json({ error: 'Validation failed' }, { status: 400 })
  }
  
  // Insert
  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert(body)
    .select()
  
  // Handle response
}
```

### Client-Side: Direct Database Access (if needed)

```typescript
// For client-side database operations (if RLS allows)
import { getSupabaseClient } from '@/lib/supabase/client'

const supabase = getSupabaseClient()
const { data, error } = await supabase
  .from('some_table')
  .select('*')
```

## ✅ Best Practices Implemented

1. **Security**
   - ✅ Anon key for client-side (safe)
   - ✅ Service role key only in server-side (secure)
   - ✅ Input validation and sanitization
   - ✅ Proper error handling (no sensitive data leaked)

2. **Code Organization**
   - ✅ Separation of concerns (client/server)
   - ✅ Type safety (TypeScript types)
   - ✅ Reusable validation functions
   - ✅ Clean API structure

3. **Error Handling**
   - ✅ Validation errors (400)
   - ✅ Database errors (500/403)
   - ✅ User-friendly error messages
   - ✅ Detailed logging for debugging

4. **Performance**
   - ✅ Singleton client pattern
   - ✅ Efficient API calls
   - ✅ Proper caching

## 🚀 Setup Instructions

1. **Copy environment file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your Supabase credentials:**
   - Get from Supabase Dashboard → Settings → API
   - Add to `.env.local`

3. **Create database table:**
   - Run SQL from `supabase/migrations/001_create_contact_submissions.sql`

4. **Set up RLS policies:**
   - Allow INSERT for `anon` role
   - Allow SELECT for `authenticated` role

5. **Start development:**
   ```bash
   npm run dev
   ```

## 📚 Key Files

- **`.env.local`** - Environment variables (not committed to git)
- **`lib/supabase/client.ts`** - Client-side Supabase client
- **`lib/supabase/server.ts`** - Server-side Supabase client
- **`app/api/contact/route.ts`** - Backend API endpoint
- **`lib/validations/contact.ts`** - Input validation
- **`lib/types/contact.ts`** - TypeScript types

## 🔒 Security Notes

- ✅ Never expose service role key in client-side code
- ✅ Always validate input on server-side
- ✅ Sanitize data before database insertion
- ✅ Use RLS policies for additional security
- ✅ Handle errors without exposing sensitive information

This implementation follows Next.js and Supabase best practices!


