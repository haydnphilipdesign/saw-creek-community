import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PremiumCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  gradient?: boolean
}

export function PremiumCard({ 
  children, 
  className = '', 
  hover = true, 
  glow = false, 
  gradient = false 
}: PremiumCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative bg-white/90 backdrop-blur-lg rounded-3xl border border-white/20 p-8
        ${hover ? 'hover:shadow-2xl hover:shadow-primary-500/10' : 'shadow-xl'}
        ${glow ? 'shadow-2xl shadow-primary-500/20' : ''}
        ${gradient ? 'bg-gradient-to-br from-white/95 to-primary-50/30' : ''}
        transition-all duration-300 overflow-hidden
        ${className}
      `}
    >
      {/* Gradient overlay for premium effect */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/20 to-accent-50/30 pointer-events-none" />
      )}
      
      {/* Glow effect */}
      {glow && (
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity" />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}