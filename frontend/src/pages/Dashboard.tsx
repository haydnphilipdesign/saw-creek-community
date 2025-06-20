import { motion } from 'framer-motion'
import { Calendar, Users, Bell, Settings } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-secondary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-secondary-900">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-secondary-600 mt-2">
            Here's what's happening in your Saw Creek Estates community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <button className="btn-primary flex items-center justify-center py-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  View Events
                </button>
                <button className="btn-secondary flex items-center justify-center py-3">
                  <Users className="h-5 w-5 mr-2" />
                  Community Directory
                </button>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 rounded-full p-2">
                    <Calendar className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-secondary-900 font-medium">Community Photo Contest</p>
                    <p className="text-secondary-600 text-sm">Submissions due February 15th</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-secondary-900 font-medium">New Member Welcome</p>
                    <p className="text-secondary-600 text-sm">5 new families joined this month</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">Your Profile</h2>
              <div className="text-center">
                <img
                  className="h-16 w-16 rounded-full mx-auto mb-4"
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=0ea5e9&color=fff`}
                  alt={`${user?.firstName} ${user?.lastName}`}
                />
                <h3 className="font-semibold text-secondary-900">{user?.firstName} {user?.lastName}</h3>
                <p className="text-secondary-600 text-sm capitalize">{user?.membershipStatus} Member</p>
                <button className="mt-4 btn-outline w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">Upcoming Events</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-primary-600 pl-3">
                  <p className="font-medium text-secondary-900">Winter Ski Lessons</p>
                  <p className="text-secondary-600 text-sm">Feb 20, 10:00 AM</p>
                </div>
                <div className="border-l-4 border-green-600 pl-3">
                  <p className="font-medium text-secondary-900">Board Meeting</p>
                  <p className="text-secondary-600 text-sm">Feb 25, 7:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                <Bell className="h-5 w-5 inline mr-2" />
                Notifications
              </h2>
              <div className="space-y-2">
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                  <p className="text-yellow-800 text-sm">
                    Pool maintenance scheduled for this weekend
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-blue-800 text-sm">
                    New community guidelines posted
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}