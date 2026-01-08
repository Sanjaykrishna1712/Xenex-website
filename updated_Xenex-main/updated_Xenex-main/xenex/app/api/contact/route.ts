import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { validateContactSubmission, sanitizeContactSubmission } from '@/lib/validations/contact'
import type { ContactSubmissionRequest, ContactSubmissionResponse } from '@/lib/types/contact'

/**
 * POST /api/contact
 * 
 * Handles contact form submissions
 * 
 * Security:
 * - Server-side validation
 * - Input sanitization
 * - Rate limiting ready (can be added)
 * - Uses service role key (bypasses RLS) or anon key with proper RLS policies
 * 
 * @param request - HTTP request with contact form data
 * @returns JSON response with success/error status
 */
export async function POST(request: Request): Promise<NextResponse<ContactSubmissionResponse>> {
  try {
    // Parse request body
    let body: ContactSubmissionRequest
    try {
      body = await request.json()
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid JSON in request body',
          error: 'Invalid request format'
        },
        { status: 400 }
      )
    }

    // Validate input data
    const validationErrors = validateContactSubmission(body)
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          error: validationErrors.map(e => `${e.field}: ${e.message}`).join(', '),
          details: JSON.stringify(validationErrors)
        },
        { status: 400 }
      )
    }

    // Sanitize data
    const sanitizedData = sanitizeContactSubmission(body)

    // Create server Supabase client (will prefer service role key if available)
    let supabase
    try {
      supabase = await createServerSupabaseClient()
    } catch (err: any) {
      console.error('Supabase client init error:', err)
      return NextResponse.json(
        {
          success: false,
          message: 'Database configuration error',
          error: err?.message || 'Missing Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY)'
        },
        { status: 500 }
      )
    }

    try {
      const { data, error: insertError } = await supabase
        .from('contact_submissions')
        .insert([sanitizedData])
        .select()

      if (insertError) {
        console.error('Supabase insert error:', insertError)

        let statusCode = 500
        let message = 'Failed to save submission'

        // Map some common Postgres/Supabase errors
        if (insertError.message?.includes('does not exist')) {
          message = 'Database table not found. Please contact administrator.'
        } else if (insertError.message?.toLowerCase().includes('permission denied')) {
          message = 'Permission denied. Please check database permissions.'
          statusCode = 403
        } else if (insertError.code === '23505') {
          message = 'A submission with this email already exists.'
          statusCode = 409
        } else if (insertError.message) {
          message = insertError.message
        }

        return NextResponse.json(
          {
            success: false,
            message,
            error: insertError.message
          },
          { status: statusCode }
        )
      }

      const insertedData = Array.isArray(data) ? data[0] : data

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! Your submission has been received.',
          data: insertedData
        },
        { status: 201 }
      )
    } catch (dbErr: any) {
      console.error('Unexpected DB error:', dbErr)
      
      // Check for connection/DNS errors
      const errorMessage = dbErr?.message || ''
      const errorDetails = dbErr?.details || ''
      
      let message = 'Failed to save submission'
      let errorDetail = dbErr?.message || 'Database error'
      
      if (errorMessage.includes('ENOTFOUND') || errorMessage.includes('fetch failed') || errorDetails.includes('ENOTFOUND')) {
        message = 'Database connection failed. Please check your Supabase configuration.'
        errorDetail = 'Invalid Supabase URL or network error. Verify NEXT_PUBLIC_SUPABASE_URL in your .env.local file matches your Supabase project URL (should be https://ftzbzofhjbcofxssimxr.supabase.co)'
      } else if (errorMessage.includes('getaddrinfo')) {
        message = 'Cannot connect to Supabase. Please verify your Supabase URL is correct.'
        errorDetail = 'DNS lookup failed. Check that NEXT_PUBLIC_SUPABASE_URL in .env.local is set to: https://ftzbzofhjbcofxssimxr.supabase.co'
      }
      
      return NextResponse.json(
        {
          success: false,
          message,
          error: errorDetail
        },
        { status: 500 }
      )
    }

  } catch (error: any) {
    // Handle unexpected errors
    console.error('Unexpected error in contact API:', error)
    
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred',
        error: error.message || 'Internal server error'
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/contact
 * 
 * Health check endpoint
 * Can be used to verify API is working
 */
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: 'Contact API is operational',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}
