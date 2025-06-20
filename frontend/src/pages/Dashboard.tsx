import { motion } from 'framer-motion'
import { Calendar, Users, Bell, Settings, Home, Star, Clock, Crown, Sparkles, TrendingUp, Award } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { mockEvents, mockNews, mockStats } from '@/data/mockData'
import { PremiumCard } from '@/components/PremiumCard'
import { PremiumButton } from '@/components/PremiumButton'
import { AnimatedCounter } from '@/components/AnimatedCounter'

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-8">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white mb-6 shadow-lg"
            >
              <Crown className="h-5 w-5 mr-2" />
              <span className="font-semibold">Welcome to Your Exclusive Dashboard</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl font-display font-bold mb-4"
            >
              Welcome back,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                {user?.firstName}!
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto"
            >
              Your personalized gateway to exclusive community insights, events, and premium amenities.
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PremiumCard hover={true} glow={true} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                <AnimatedCounter from={0} to={parseInt(mockStats.totalMembers.replace(',', ''))} />
              </h3>
              <p className="text-secondary-600 font-semibold mb-2">Elite Members</p>
              <div className="flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-600 text-sm font-medium">{mockStats.membershipGrowth} this year</span>
              </div>
            </PremiumCard>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <PremiumCard hover={true} glow={true} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                <AnimatedCounter from={0} to={mockStats.upcomingEvents} />
              </h3>
              <p className="text-secondary-600 font-semibold mb-2">Exclusive Events</p>
              <div className="flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-blue-500 mr-1" />
                <span className="text-blue-600 text-sm font-medium">{mockStats.eventAttendance} avg attendance</span>
              </div>
            </PremiumCard>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <PremiumCard hover={true} glow={true} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                <AnimatedCounter from={0} to={mockStats.totalResources} suffix="+" />
              </h3>
              <p className="text-secondary-600 font-semibold mb-2">Luxury Amenities</p>
              <div className="flex items-center justify-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-yellow-600 text-sm font-medium">{mockStats.resourceRating} rating</span>
              </div>
            </PremiumCard>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <PremiumCard hover={true} glow={true} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                <AnimatedCounter from={0} to={mockStats.recentNews} />
              </h3>
              <p className="text-secondary-600 font-semibold mb-2">Community Updates</p>
              <div className="flex items-center justify-center">
                <Award className="h-4 w-4 text-orange-500 mr-1" />
                <span className="text-orange-600 text-sm font-medium">This month</span>
              </div>
            </PremiumCard>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <PremiumCard glow={true} gradient={true}>
                <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6">Premium Actions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <PremiumButton variant="primary" size="lg" glow={true} className="flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Exclusive Events
                  </PremiumButton>
                  <PremiumButton variant="outline" size="lg" className="flex items-center justify-center">
                    <Users className="h-5 w-5 mr-2" />
                    Elite Directory
                  </PremiumButton>
                </div>
              </PremiumCard>
            </motion.div>

            {/* Latest News */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <PremiumCard hover={true}>
                <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6">Community Spotlight</h2>
                <div className="space-y-6">
                {latestNews.map((article, index) => (
                  <motion.div 
                    key={article.id} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0 group hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-accent-50/50 rounded-xl hover:shadow-md transition-all duration-300 p-4 -m-4"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title}
                          className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-secondary-900 font-display font-bold mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors duration-300">{article.title}</h3>
                        <p className="text-secondary-600 mb-3 line-clamp-2 leading-relaxed">{article.summary}</p>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center text-sm text-secondary-500">
                            <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center mr-2">
                              <Clock className="h-3 w-3 text-white" />
                            </div>
                            {new Date(article.publishDate).toLocaleDateString()}
                          </div>
                          <span className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-xs font-semibold capitalize">{article.category}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <PremiumButton variant="outline" className="w-full">
                  View All News →
                </PremiumButton>
              </div>
              </PremiumCard>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <PremiumCard glow={true} gradient={true}>
                <h2 className="text-xl font-display font-bold text-secondary-900 mb-6 text-center">Elite Profile</h2>
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full p-1">
                      <div className="bg-white rounded-full p-1">
                        <img
                          className="h-20 w-20 rounded-full"
                          src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=0ea5e9&color=fff`}
                          alt={`${user?.firstName} ${user?.lastName}`}
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-2">{user?.firstName} {user?.lastName}</h3>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-6">
                    <Crown className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-primary-700 font-semibold capitalize">{user?.membershipStatus} Member</span>
                  </div>
                  <PremiumButton variant="outline" className="w-full">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Profile
                  </PremiumButton>
                </div>
              </PremiumCard>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <PremiumCard hover={true}>
                <h2 className="text-xl font-display font-bold text-secondary-900 mb-6">Exclusive Events</h2>
                <div className="space-y-4">
                {upcomingEvents.map((event, index) => {
                  const gradients = [
                    'from-primary-500 to-primary-600',
                    'from-green-500 to-green-600',
                    'from-purple-500 to-purple-600'
                  ]
                  return (
                    <motion.div 
                      key={event.id} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                      className="group p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-accent-50/50"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-display font-bold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">{event.title}</p>
                          <div className="space-y-1">
                            <p className="text-secondary-600 text-sm font-medium">
                              {new Date(event.date).toLocaleDateString()}, {event.time}
                            </p>
                            <p className="text-secondary-500 text-sm">{event.location}</p>
                          </div>
                          {event.rsvpRequired && (
                            <div className="mt-3">
                              <PremiumButton variant="outline" size="sm">
                                Reserve Spot
                              </PremiumButton>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              <div className="mt-6">
                <PremiumButton variant="outline" className="w-full">
                  View All Events →
                </PremiumButton>
              </div>
              </PremiumCard>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <PremiumCard hover={true}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                    <Bell className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-secondary-900">
                    Premium Alerts
                  </h2>
                </div>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="group p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-900 font-bold mb-1">Pool Hours Extended</p>
                        <p className="text-blue-700 text-sm">Luxury pool facilities now open with extended summer hours through August</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                    className="group p-4 bg-gradient-to-r from-yellow-50 to-yellow-100/50 border border-yellow-200/50 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <Settings className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-yellow-900 font-bold mb-1">Infrastructure Enhancement</p>
                        <p className="text-yellow-700 text-sm">Oak Avenue premium resurfacing project July 8-10</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="group p-4 bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200/50 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-green-900 font-bold mb-1">New Premium Playground</p>
                        <p className="text-green-700 text-sm">State-of-the-art playground equipment now available at Community Park</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="mt-6">
                  <PremiumButton variant="ghost" className="w-full">
                    View All Alerts →
                  </PremiumButton>
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}