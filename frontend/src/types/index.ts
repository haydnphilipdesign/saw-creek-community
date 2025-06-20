export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'member' | 'admin'
  membershipStatus: 'active' | 'inactive' | 'pending'
  joinDate: string
  avatar?: string
  phone?: string
  address?: string
  emergencyContact?: string
  interests?: string[]
  createdAt: string
  updatedAt: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  maxAttendees?: number
  currentAttendees: number
  imageUrl?: string
  category: 'community' | 'social' | 'educational' | 'recreational'
  isPublic: boolean
  rsvpRequired: boolean
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface RSVP {
  id: string
  eventId: string
  userId: string
  status: 'attending' | 'not_attending' | 'maybe'
  createdAt: string
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
  createdAt: string
  updatedAt: string
}

export interface NewsArticle {
  id: string
  title: string
  content: string
  summary: string
  author: string
  publishDate: string
  imageUrl?: string
  category: 'news' | 'announcement' | 'event' | 'community'
  isPublished: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
  loading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
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

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface EventFilters {
  category?: string
  dateFrom?: string
  dateTo?: string
  search?: string
  isPublic?: boolean
}

export interface ResourceFilters {
  category?: string
  search?: string
  isVerified?: boolean
}