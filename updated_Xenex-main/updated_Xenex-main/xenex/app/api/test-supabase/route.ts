import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    // Use the shared server client (uses anon key or service role key)
    const supabase = await createServerSupabaseClient()
    
    // Test connection by checking if table exists
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('id')
      .limit(1)

    if (error) {
      return NextResponse.json(
        { 
          error: 'Database connection failed',
          message: error.message,
          code: error.code,
          details: error
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase connection successful',
      tableExists: true
    })
  } catch (err: any) {
    return NextResponse.json(
      { 
        error: 'Server error',
        message: err.message
      },
      { status: 500 }
    )
  }
}


