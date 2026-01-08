# Supabase Setup

This directory contains the Supabase client configuration for your Next.js application.

## Setup Instructions

1. Create a `.env.local` file in the root directory with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. Get your credentials from your Supabase project:
   - Go to https://app.supabase.com
   - Select your project
   - Go to Settings → API
   - Copy the "Project URL" and "anon public" key

## Usage

### Client-Side (Client Components)

```typescript
'use client'

import { supabase } from '@/lib/supabase/client'

// Example: Fetch data
const { data, error } = await supabase
  .from('your_table')
  .select('*')

// Example: Insert data
const { data, error } = await supabase
  .from('your_table')
  .insert([{ column: 'value' }])

// Example: Update data
const { data, error } = await supabase
  .from('your_table')
  .update({ column: 'new_value' })
  .eq('id', 1)

// Example: Delete data
const { data, error } = await supabase
  .from('your_table')
  .delete()
  .eq('id', 1)
```

### Server-Side (Server Components)

```typescript
import { createServerClient } from '@/lib/supabase/server'

export default async function Page() {
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

**Note:** The server client uses `@supabase/ssr` for proper cookie handling in Next.js App Router.

## Authentication

### Sign Up
```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
})
```

### Sign In
```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})
```

### Sign Out
```typescript
const { error } = await supabase.auth.signOut()
```

### Get Current User
```typescript
const { data: { user } } = await supabase.auth.getUser()
```

