import { Router } from 'express'
import { authenticate, authorize, optionalAuth } from '@/middleware/auth'

const router = Router()

// Public routes
router.get('/', optionalAuth, (req, res) => {
  res.json({ message: 'Get news articles endpoint - to be implemented' })
})

router.get('/:id', optionalAuth, (req, res) => {
  res.json({ message: 'Get article by ID endpoint - to be implemented' })
})

// Protected routes (admin only for news management)
router.use(authenticate)
router.use(authorize('admin'))

router.post('/', (req, res) => {
  res.json({ message: 'Create article endpoint - to be implemented' })
})

router.put('/:id', (req, res) => {
  res.json({ message: 'Update article endpoint - to be implemented' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete article endpoint - to be implemented' })
})

router.patch('/:id/publish', (req, res) => {
  res.json({ message: 'Publish article endpoint - to be implemented' })
})

export default router