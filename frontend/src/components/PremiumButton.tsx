import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PremiumButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  disabled?: boolean
  glow?: boolean
}

export function PremiumButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  glow = false
}: PremiumButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white shadow-md hover:shadow-lg backdrop-blur-sm',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center font-semibold rounded-xl
        transition-all duration-300 transform focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${glow ? 'shadow-2xl shadow-primary-500/25' : ''}
        ${className}
      `}
    >
      {/* Glow effect */}
      {glow && variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
      )}
      
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </motion.button>
  )
}