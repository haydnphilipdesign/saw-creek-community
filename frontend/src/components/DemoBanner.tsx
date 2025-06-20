import { X, Eye } from 'lucide-react'
import { useState } from 'react'

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-blue-600 text-white relative">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <Eye className="h-5 w-5 mr-2" />
            <p className="font-medium text-sm">
              <span className="md:hidden">
                Demo Mode: Explore the platform features
              </span>
              <span className="hidden md:inline">
                🎯 Demo Mode: This is a demonstration of the Saw Creek Community platform. All data is simulated for demo purposes.
              </span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 ml-4 text-blue-200 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}