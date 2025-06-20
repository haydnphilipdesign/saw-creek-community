import { Router } from 'express'
import { authenticate } from '@/middleware/auth'
import {
  register,
  login,
  getCurrentUser,
  refreshToken,
  forgotPassword,
  resetPassword,
} from '@/controllers/authController'

const router = Router()

// Public routes
router.post('/register', register)
router.post('/login', login)
router.post('/refresh', refreshToken)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)

// Protected routes
router.get('/me', authenticate, getCurrentUser)

export default router