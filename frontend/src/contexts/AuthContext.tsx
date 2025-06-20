import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, AuthContextType, RegisterData } from '@/types'
import { mockUser } from '@/data/mockData'
import toast from 'react-hot-toast'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = () => {
      try {
        const isLoggedIn = localStorage.getItem('demo-auth') === 'true'
        if (isLoggedIn) {
          setUser(mockUser)
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        localStorage.removeItem('demo-auth')
      } finally {
        setLoading(false)
      }
    }

    // Simulate loading delay for demo
    setTimeout(initAuth, 500)
  }, [])

  const login = async (_email: string, _password: string) => {
    try {
      setLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Demo login - accept any email/password combination
      localStorage.setItem('demo-auth', 'true')
      setUser(mockUser)
      toast.success('Welcome back to the demo!')
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Login failed. Please try again.')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData: RegisterData) => {
    try {
      setLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Demo registration - create user from form data
      const demoUser = {
        ...mockUser,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        address: userData.address
      }
      
      localStorage.setItem('demo-auth', 'true')
      setUser(demoUser)
      toast.success('Demo account created successfully!')
    } catch (error) {
      console.error('Registration error:', error)
      toast.error('Registration failed. Please try again.')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('demo-auth')
    setUser(null)
    toast.success('Logged out of demo successfully')
  }

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}