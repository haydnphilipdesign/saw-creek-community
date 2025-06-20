import { motion } from 'framer-motion'
import { Calendar, Users, Bell, Settings, Home, Star, Clock } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { mockEvents, mockNews, mockStats } from '@/data/mockData'

export default function Dashboard() {
  const { user } = useAuth()
  
  // Get upcoming events (next 3)
  const upcomingEvents = mockEvents
    .filter(event => new Date(event.date) >= new Date())
    .slice(0, 3)
  
  // Get latest news (last 2)
  const latestNews = mockNews
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 2)

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
            Here's what's happening in your Saw Creek Community.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="card text-center">
            <Users className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-secondary-900">{mockStats.totalMembers}</h3>
            <p className="text-secondary-600 text-sm">Total Members</p>
            <span className="text-green-600 text-xs font-medium">{mockStats.membershipGrowth} this year</span>
          </div>
          <div className="card text-center">
            <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-secondary-900">{mockStats.upcomingEvents}</h3>
            <p className="text-secondary-600 text-sm">Upcoming Events</p>
            <span className="text-blue-600 text-xs font-medium">{mockStats.eventAttendance} avg attendance</span>
          </div>
          <div className="card text-center">
            <Home className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-secondary-900">{mockStats.totalResources}</h3>
            <p className="text-secondary-600 text-sm">Community Resources</p>
            <div className="flex items-center justify-center mt-1">
              <Star className="h-3 w-3 text-yellow-400 mr-1" />
              <span className="text-yellow-600 text-xs font-medium">{mockStats.resourceRating} rating</span>
            </div>
          </div>
          <div className="card text-center">
            <Bell className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-secondary-900">{mockStats.recentNews}</h3>
            <p className="text-secondary-600 text-sm">Recent Updates</p>
            <span className="text-orange-600 text-xs font-medium">This month</span>
          </div>
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

            {/* Latest News */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">Latest Community News</h2>
              <div className="space-y-4">
                {latestNews.map((article) => (
                  <div key={article.id} className="border-b border-secondary-200 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-start space-x-3">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-secondary-900 font-medium mb-1 line-clamp-2">{article.title}</h3>
                        <p className="text-secondary-600 text-sm mb-2 line-clamp-2">{article.summary}</p>
                        <div className="flex items-center text-xs text-secondary-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {new Date(article.publishDate).toLocaleDateString()}
                          <span className="mx-2">•</span>
                          <span className="bg-secondary-100 px-2 py-1 rounded capitalize">{article.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All News →
              </button>
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
                {upcomingEvents.map((event, index) => {
                  const colors = ['border-primary-600', 'border-green-600', 'border-purple-600']
                  return (
                    <div key={event.id} className={`border-l-4 ${colors[index]} pl-3`}>
                      <p className="font-medium text-secondary-900">{event.title}</p>
                      <p className="text-secondary-600 text-sm">
                        {new Date(event.date).toLocaleDateString()}, {event.time}
                      </p>
                      <p className="text-secondary-500 text-xs">{event.location}</p>
                      {event.rsvpRequired && (
                        <button className="mt-2 text-xs text-primary-600 hover:text-primary-700 font-medium">
                          RSVP Now
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
              <button className="w-full mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All Events →
              </button>
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
                Community Alerts
              </h2>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start">
                    <Bell className="h-4 w-4 text-blue-600 mt-0.5 mr-2" />
                    <div>
                      <p className="text-blue-800 text-sm font-medium">Pool Hours Extended</p>
                      <p className="text-blue-700 text-xs">Summer hours now in effect through August</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-start">
                    <Settings className="h-4 w-4 text-yellow-600 mt-0.5 mr-2" />
                    <div>
                      <p className="text-yellow-800 text-sm font-medium">Road Maintenance</p>
                      <p className="text-yellow-700 text-xs">Oak Avenue repaving July 8-10</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-start">
                    <Star className="h-4 w-4 text-green-600 mt-0.5 mr-2" />
                    <div>
                      <p className="text-green-800 text-sm font-medium">New Playground Open</p>
                      <p className="text-green-700 text-xs">Modern equipment now available at Community Park</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-secondary-600 hover:text-secondary-700 text-sm">
                View All Alerts →
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}