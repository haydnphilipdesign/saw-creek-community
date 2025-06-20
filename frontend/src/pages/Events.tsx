import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Camera, Star, Sparkles } from 'lucide-react'
import { mockEvents } from '@/data/mockData'
import { PremiumCard } from '@/components/PremiumCard'
import { PremiumButton } from '@/components/PremiumButton'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export default function Events() {
  // Filter events into upcoming and past
  const now = new Date()
  const upcomingEvents = mockEvents.filter(event => new Date(event.date) >= now)
  const pastEvents = mockEvents.filter(event => new Date(event.date) < now)

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'social': return 'bg-pink-100 text-pink-800'
      case 'educational': return 'bg-blue-100 text-blue-800'
      case 'community': return 'bg-green-100 text-green-800'
      case 'recreational': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-32 overflow-hidden">
        {/* Hero Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-700/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8"
            >
              <Sparkles className="h-5 w-5 mr-2 text-accent-300" />
              <span className="text-white font-semibold">Exclusive Community Events</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight"
            >
              Extraordinary
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-white"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Experiences
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed"
            >
              Curated events that bring our exclusive community together through 
              <span className="text-accent-300 font-semibold">luxury experiences</span>, seasonal celebrations, 
              and meaningful connections.
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter from={0} to={50} suffix="+" />
                </div>
                <div className="text-primary-200 text-sm font-medium">Annual Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter from={0} to={98} suffix="%" />
                </div>
                <div className="text-primary-200 text-sm font-medium">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter from={0} to={500} suffix="+" />
                </div>
                <div className="text-primary-200 text-sm font-medium">Members Engaged</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-4">
              Upcoming Experiences
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Reserve your spot at our carefully curated events designed for our distinguished community
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard hover={true} glow={true} gradient={true} className="h-full">
                {event.imageUrl && (
                  <div className="relative overflow-hidden rounded-2xl mb-6 group">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm ${getCategoryColor(event.category).replace('bg-', 'text-').replace('text-', 'text-')}`}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4 leading-tight">
                    {event.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-secondary-600">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-3">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary-900">{new Date(event.date).toLocaleDateString()}</div>
                        <div className="text-sm">{event.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-secondary-600">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-3">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="font-medium">{event.location}</div>
                    </div>
                    <div className="flex items-center text-secondary-600">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary-900">{event.currentAttendees} attending</div>
                        {event.maxAttendees && <div className="text-sm">Max {event.maxAttendees} guests</div>}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex gap-3">
                  <PremiumButton 
                    variant="primary" 
                    size="lg" 
                    glow={true}
                    className="flex-1"
                  >
                    {event.rsvpRequired ? 'Reserve Your Spot' : 'Express Interest'}
                  </PremiumButton>
                  <PremiumButton variant="outline" size="lg">
                    <Star className="h-5 w-5" />
                  </PremiumButton>
                </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>

          {/* Event Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-4">
                Event Categories
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Discover the diverse range of premium experiences we curate for our community
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Photo Contests",
                  description: "Showcase the beauty of our community through photography competitions"
                },
                {
                  icon: Calendar,
                  title: "Seasonal Activities",
                  description: "Celebrate each season with themed events and activities"
                },
                {
                  icon: Users,
                  title: "Social Gatherings",
                  description: "Connect with neighbors at community mixers and parties"
                },
                {
                  icon: MapPin,
                  title: "Outdoor Adventures",
                  description: "Explore our natural surroundings with guided activities"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PremiumCard hover={true} className="text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {category.description}
                    </p>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-4">
                  Recent Highlights
                </h2>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                  Take a look at the memorable experiences our community has enjoyed
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <PremiumCard hover={true} className="h-full opacity-90 hover:opacity-100 transition-opacity duration-300">
                      {event.imageUrl && (
                        <div className="relative overflow-hidden rounded-xl mb-4 group">
                          <img 
                            src={event.imageUrl} 
                            alt={event.title}
                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      )}
                      <h3 className="text-lg font-display font-bold text-secondary-900 mb-3">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-sm text-secondary-500 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center mr-3">
                          <Calendar className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {event.description.length > 100 
                          ? `${event.description.substring(0, 100)}...` 
                          : event.description}
                      </p>
                    </PremiumCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}