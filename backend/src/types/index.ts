import { Request } from 'express'

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string
    email: string
    role: 'member' | 'admin'
  }
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'member' | 'admin'
  membershipStatus: 'active' | 'inactive' | 'pending'
  joinDate: Date
  avatar?: string
  phone?: string
  address?: string
  emergencyContact?: string
  interests?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Event {
  id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  maxAttendees?: number
  currentAttendees: number
  imageUrl?: string
  category: 'community' | 'social' | 'educational' | 'recreational'
  isPublic: boolean
  rsvpRequired: boolean
  createdById: string
  createdAt: Date
  updatedAt: Date
}

export interface RSVP {
  id: string
  eventId: string
  userId: string
  status: 'attending' | 'not_attending' | 'maybe'
  createdAt: Date
  updatedAt: Date
}

export interface CommunityResource {
  id: string
  name: string
  description: string
  category: 'business' | 'service' | 'group' | 'amenity'
  contactInfo: {
    phone?: string
    email?: string
    website?: string
    address?: string
  }
  hours?: string
  rating?: number
  imageUrl?: string
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface NewsArticle {
  id: string
  title: string
  content: string
  summary: string
  authorId: string
  publishDate: Date
  imageUrl?: string
  category: 'news' | 'announcement' | 'event' | 'community'
  isPublished: boolean
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}

export interface PaginationQuery {
  page?: string
  limit?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

export interface EventFilters {
  category?: string
  dateFrom?: string
  dateTo?: string
  search?: string
  isPublic?: string
}

export interface ResourceFilters {
  category?: string
  search?: string
  isVerified?: string
}

export interface RegisterData {
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
  address?: string
}

export interface LoginData {
  email: string
  password: string
}

export interface JWTPayload {
  userId: string
  email: string
  role: 'member' | 'admin'
  iat?: number
  exp?: number
}