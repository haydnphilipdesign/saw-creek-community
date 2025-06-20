import { Request, Response, NextFunction } from 'express'
import { AuthenticatedRequest, ApiResponse, RegisterData, LoginData } from '@/types'
import { prisma } from '@/services/database'
import { AppError } from '@/middleware/errorHandler'
import { hashPassword, comparePassword, generateRandomToken } from '@/utils/password'
import { generateToken, generateRefreshToken } from '@/utils/jwt'
import { registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } from '@/utils/validation'

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = registerSchema.validate(req.body)
    if (error) {
      throw new AppError(error.details[0].message, 400)
    }

    const { email, password, firstName, lastName, phone, address }: RegisterData = value

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new AppError('User with this email already exists', 409)
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
        address,
        emailVerificationToken: generateRandomToken(),
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        membershipStatus: true,
        joinDate: true,
        avatar: true,
        phone: true,
        address: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    // Generate tokens
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role.toLowerCase() as 'member' | 'admin',
    })

    const refreshToken = generateRefreshToken({
      userId: user.id,
      email: user.email,
      role: user.role.toLowerCase() as 'member' | 'admin',
    })

    const response: ApiResponse = {
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          ...user,
          role: user.role.toLowerCase(),
          membershipStatus: user.membershipStatus.toLowerCase(),
        },
        token,
        refreshToken,
      },
    }

    res.status(201).json(response)
  } catch (error) {
    next(error)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = loginSchema.validate(req.body)
    if (error) {
      throw new AppError(error.details[0].message, 400)
    }

    const { email, password }: LoginData = value

    // Find user with password
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        firstName: true,
        lastName: true,
        role: true,
        membershipStatus: true,
        joinDate: true,
        avatar: true,
        phone: true,
        address: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (!user || !user.isActive) {
      throw new AppError('Invalid credentials', 401)
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, user.password)
    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401)
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    })

    // Generate tokens
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role.toLowerCase() as 'member' | 'admin',
    })

    const refreshToken = generateRefreshToken({
      userId: user.id,
      email: user.email,
      role: user.role.toLowerCase() as 'member' | 'admin',
    })

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    const response: ApiResponse = {
      success: true,
      message: 'Login successful',
      data: {
        user: {
          ...userWithoutPassword,
          role: user.role.toLowerCase(),
          membershipStatus: user.membershipStatus.toLowerCase(),
        },
        token,
        refreshToken,
      },
    }

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

export const getCurrentUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new AppError('Authentication required', 401)
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        membershipStatus: true,
        joinDate: true,
        avatar: true,
        phone: true,
        address: true,
        interests: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (!user) {
      throw new AppError('User not found', 404)
    }

    const response: ApiResponse = {
      success: true,
      message: 'User retrieved successfully',
      data: {
        ...user,
        role: user.role.toLowerCase(),
        membershipStatus: user.membershipStatus.toLowerCase(),
      },
    }

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      throw new AppError('Refresh token is required', 400)
    }

    // This would typically involve verifying the refresh token and generating new tokens
    // For now, we'll implement a basic version
    throw new AppError('Refresh token functionality not implemented yet', 501)
  } catch (error) {
    next(error)
  }
}

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = forgotPasswordSchema.validate(req.body)
    if (error) {
      throw new AppError(error.details[0].message, 400)
    }

    const { email } = value

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      // Don't reveal if user exists or not
      const response: ApiResponse = {
        success: true,
        message: 'If a user with that email exists, a reset link has been sent',
      }
      return res.status(200).json(response)
    }

    // Generate reset token
    const resetToken = generateRandomToken()
    const resetExpires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken: resetToken,
        passwordResetExpires: resetExpires,
      },
    })

    // TODO: Send email with reset link
    // await sendPasswordResetEmail(user.email, resetToken)

    const response: ApiResponse = {
      success: true,
      message: 'If a user with that email exists, a reset link has been sent',
    }

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = resetPasswordSchema.validate(req.body)
    if (error) {
      throw new AppError(error.details[0].message, 400)
    }

    const { token, password } = value

    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: token,
        passwordResetExpires: {
          gt: new Date(),
        },
      },
    })

    if (!user) {
      throw new AppError('Invalid or expired reset token', 400)
    }

    // Hash new password
    const hashedPassword = await hashPassword(password)

    // Update user password and clear reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
      },
    })

    const response: ApiResponse = {
      success: true,
      message: 'Password reset successfully',
    }

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}