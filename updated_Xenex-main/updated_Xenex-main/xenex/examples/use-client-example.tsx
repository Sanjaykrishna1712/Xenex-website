/**
 * Example: How to use the Supabase client in a client component
 * 
 * This demonstrates the client connection and basic usage
 */

'use client'

import { supabase } from '@/lib/supabase/client'
import { useState } from 'react'

export default function ClientExample() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Example: Fetch data using the connected client
  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const { data: fetchedData, error: fetchError } = await supabase
        .from('contact_submissions')
        .select('*')
        .limit(10)
        .order('created_at', { ascending: false })

      if (fetchError) {
        throw fetchError
      }

      setData(fetchedData || [])
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  // Example: Insert data using the connected client
  const insertData = async () => {
    setLoading(true)
    setError(null)

    try {
      const { data: insertedData, error: insertError } = await supabase
        .from('contact_submissions')
        .insert({
          name: 'Test User',
          email: 'test@example.com',
          project_type: 'custom-build',
          vision: 'This is a test submission from the client example'
        })
        .select()
        .single()

      if (insertError) {
        throw insertError
      }

      console.log('Inserted:', insertedData)
      alert('Data inserted successfully!')
    } catch (err: any) {
      setError(err.message || 'Failed to insert data')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Client Connection Example</h1>
      
      <div className="space-x-4 mb-6">
        <button
          onClick={fetchData}
          disabled={loading}
          className="px-4 py-2 bg-xenex-red text-white rounded disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
        
        <button
          onClick={insertData}
          disabled={loading}
          className="px-4 py-2 bg-xenex-red text-white rounded disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Insert Test Data'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-900/20 border border-red-500 rounded">
          <p className="text-red-400">Error: {error}</p>
        </div>
      )}

      {data.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Fetched Data:</h2>
          <pre className="bg-xenex-gray p-4 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}


