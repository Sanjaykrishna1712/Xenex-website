/**
 * TypeScript types for contact form submissions
 */

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone?: string | null
  project_type: string
  vision: string
  created_at?: string
  updated_at?: string
}

export interface ContactSubmissionRequest {
  name: string
  email: string
  phone?: string
  project_type: string
  vision: string
}

export interface ContactSubmissionResponse {
  success: boolean
  message: string
  data?: ContactSubmission
  error?: string
  details?: string
}

export type ProjectType = 
  | 'road-build' 
  | 'film-build' 
  | 'custom-build' 
  | 'performance' 
  | 'other'


