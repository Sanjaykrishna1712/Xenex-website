# Supabase Setup Guide

## ✅ Installation Complete

Supabase has been installed and configured in your project.

## 📝 Next Steps

### 1. Create Environment Variables File

Create a `.env.local` file in the root directory of your project with the following content:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Sign in or create an account
3. Create a new project or select an existing one
4. Go to **Settings** → **API**
5. Copy the following:
   - **Project URL** → Use for `https://ftzbzofhjbcofxssimxr.supabase.co`
   - **anon public** key → Use for `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0emJ6b2ZoamJjb2Z4c3NpbXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxMTY5NTMsImV4cCI6MjA4MTY5Mjk1M30.7qfudcAiAN9AFCZv42YFRP9con73CKB_vvxiOFwJP_s`

### 3. Replace Placeholder Values

Update your `.env.local` file with the actual values from Supabase.

## 📁 Files Created

- `lib/supabase/client.ts` - Client-side Supabase client (for use in Client Components)
- `lib/supabase/server.ts` - Server-side Supabase client (for use in Server Components)
- `lib/supabase/README.md` - Detailed usage examples

## 🚀 Quick Start Examples

### Client Component Example

```typescript
'use client'

import { supabase } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function ExampleComponent() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('your_table')
        .select('*')
      
      if (error) {
        console.error('Error:', error)
      } else {
        setData(data)
      }
    }
    
    fetchData()
  }, [])

  return <div>{/* Your component */}</div>
}
```

### Server Component Example

```typescript
import { createServerClient } from '@/lib/supabase/server'

export default async function ExamplePage() {
  const supabase = await createServerClient()
  
  const { data, error } = await supabase
    .from('your_table')
    .select('*')
  
  if (error) {
    console.error('Error:', error)
  }
  
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
```

## 📚 Documentation

For more information, see:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- Check `lib/supabase/README.md` for detailed usage examples

