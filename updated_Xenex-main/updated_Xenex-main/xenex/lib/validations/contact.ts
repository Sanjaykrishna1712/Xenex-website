/**
 * Validation utilities for contact form submissions
 */

import { ContactSubmissionRequest } from '../types/contact'

export interface ValidationError {
  field: string
  message: string
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates phone number format (basic validation)
 */
export function isValidPhone(phone: string): boolean {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '')
  // Check if it has between 10-15 digits (international format)
  return digitsOnly.length >= 10 && digitsOnly.length <= 15
}

/**
 * Validates contact submission data
 * 
 * @param data - Contact submission data to validate
 * @returns Array of validation errors (empty if valid)
 */
export function validateContactSubmission(
  data: Partial<ContactSubmissionRequest>
): ValidationError[] {
  const errors: ValidationError[] = []

  // Validate name
  if (!data.name || typeof data.name !== 'string') {
    errors.push({ field: 'name', message: 'Name is required' })
  } else {
    const trimmedName = data.name.trim()
    if (trimmedName.length < 2) {
      errors.push({ field: 'name', message: 'Name must be at least 2 characters' })
    }
    if (trimmedName.length > 255) {
      errors.push({ field: 'name', message: 'Name must be less than 255 characters' })
    }
  }

  // Validate email
  if (!data.email || typeof data.email !== 'string') {
    errors.push({ field: 'email', message: 'Email is required' })
  } else {
    const trimmedEmail = data.email.trim()
    if (!isValidEmail(trimmedEmail)) {
      errors.push({ field: 'email', message: 'Invalid email format' })
    }
    if (trimmedEmail.length > 255) {
      errors.push({ field: 'email', message: 'Email must be less than 255 characters' })
    }
  }

  // Validate phone (optional)
  if (data.phone && typeof data.phone === 'string') {
    const trimmedPhone = data.phone.trim()
    if (trimmedPhone.length > 0 && !isValidPhone(trimmedPhone)) {
      errors.push({ field: 'phone', message: 'Invalid phone number format' })
    }
    if (trimmedPhone.length > 50) {
      errors.push({ field: 'phone', message: 'Phone must be less than 50 characters' })
    }
  }

  // Validate project type
  const validProjectTypes = ['road-build', 'film-build', 'custom-build', 'performance', 'other']
  if (!data.project_type || typeof data.project_type !== 'string') {
    errors.push({ field: 'project_type', message: 'Project type is required' })
  } else if (!validProjectTypes.includes(data.project_type)) {
    errors.push({ field: 'project_type', message: 'Invalid project type selected' })
  }

  // Validate vision
  if (!data.vision || typeof data.vision !== 'string') {
    errors.push({ field: 'vision', message: 'Vision/Message is required' })
  } else {
    const trimmedVision = data.vision.trim()
    if (trimmedVision.length < 10) {
      errors.push({ field: 'vision', message: 'Vision/Message must be at least 10 characters' })
    }
    if (trimmedVision.length > 5000) {
      errors.push({ field: 'vision', message: 'Vision/Message must be less than 5000 characters' })
    }
  }

  return errors
}

/**
 * Sanitizes contact submission data
 * Removes extra whitespace and normalizes data
 */
export function sanitizeContactSubmission(
  data: ContactSubmissionRequest
): ContactSubmissionRequest {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone?.trim() || undefined,
    project_type: data.project_type.trim(),
    vision: data.vision.trim()
  }
}

