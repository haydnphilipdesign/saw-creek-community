import { Router } from 'express'
import { authenticate, authorize } from '@/middleware/auth'

const router = Router()

// All user routes require authentication
router.use(authenticate)

// Get user profile
router.get('/profile', (req, res) => {
  res.json({ message: 'User profile endpoint - to be implemented' })
})

// Update user profile
router.put('/profile', (req, res) => {
  res.json({ message: 'Update user profile endpoint - to be implemented' })
})

// Get user's events
router.get('/events', (req, res) => {
  res.json({ message: 'User events endpoint - to be implemented' })
})

// Admin only routes
router.get('/', authorize('admin'), (req, res) => {
  res.json({ message: 'Get all users endpoint - to be implemented' })
})

router.put('/:id/status', authorize('admin'), (req, res) => {
  res.json({ message: 'Update user status endpoint - to be implemented' })
})

export default router