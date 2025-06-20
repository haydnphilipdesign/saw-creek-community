import { X, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
            </motion.div>
            <p className="font-medium text-sm">
              <span className="md:hidden">
                ✨ Interactive Demo Experience
              </span>
              <span className="hidden md:inline">
                ✨ You're experiencing an interactive demo of our premium community platform
              </span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 ml-4 text-purple-200 hover:text-white transition-colors group"
          >
            <X className="h-4 w-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}