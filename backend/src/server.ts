import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import path from 'path'

import { errorHandler } from '@/middleware/errorHandler'
import { notFound } from '@/middleware/notFound'
import { connectDatabase } from '@/services/database'
import authRoutes from '@/routes/auth'
import userRoutes from '@/routes/users'
import eventRoutes from '@/routes/events'
import resourceRoutes from '@/routes/resources'
import newsRoutes from '@/routes/news'
import adminRoutes from '@/routes/admin'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Security middleware
app.use(helmet())
app.use(compression())

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
})
app.use('/api/', limiter)

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}))

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
} else {
  app.use(morgan('combined'))
}

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  })
})

// API routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/resources', resourceRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/admin', adminRoutes)

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

// Initialize database and start server
const startServer = async () => {
  try {
    await connectDatabase()
    
    app.listen(PORT, () => {
      console.log(`
🚀 Server is running on port ${PORT}
📱 Environment: ${process.env.NODE_ENV}
🌐 CORS Origin: ${process.env.CORS_ORIGIN}
📊 Health check: http://localhost:${PORT}/health
      `)
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

startServer()

export default app