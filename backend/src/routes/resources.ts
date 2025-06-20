import { Router } from 'express'
import { authenticate, authorize, optionalAuth } from '@/middleware/auth'

const router = Router()

// Public routes
router.get('/', optionalAuth, (req, res) => {
  res.json({ message: 'Get community resources endpoint - to be implemented' })
})

router.get('/:id', optionalAuth, (req, res) => {
  res.json({ message: 'Get resource by ID endpoint - to be implemented' })
})

// Protected routes
router.use(authenticate)

router.post('/', (req, res) => {
  res.json({ message: 'Create resource endpoint - to be implemented' })
})

router.put('/:id', (req, res) => {
  res.json({ message: 'Update resource endpoint - to be implemented' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete resource endpoint - to be implemented' })
})

// Admin routes
router.patch('/:id/verify', authorize('admin'), (req, res) => {
  res.json({ message: 'Verify resource endpoint - to be implemented' })
})

export default router