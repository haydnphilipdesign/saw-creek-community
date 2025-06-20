import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Camera, Star } from 'lucide-react'
import { mockEvents } from '@/data/mockData'

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Community Events
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stay connected with your neighbors through our exciting community events, 
              seasonal activities, and social gatherings throughout the year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">
            Upcoming Events
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-lg transition-shadow"
              >
                {event.imageUrl && (
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-secondary-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {event.currentAttendees} attending
                        {event.maxAttendees && ` / ${event.maxAttendees} max`}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                
                <p className="text-secondary-600 mb-4">
                  {event.description}
                </p>
                
                <div className="flex gap-2">
                  <button className="btn-primary flex-1">
                    {event.rsvpRequired ? 'RSVP Now' : 'Mark Interested'}
                  </button>
                  <button className="btn-secondary">
                    <Star className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Event Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-8">
              Types of Events We Host
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-secondary-50 rounded-lg"
                >
                  <category.icon className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">
                Recent Past Events
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card opacity-75"
                  >
                    {event.imageUrl && (
                      <img 
                        src={event.imageUrl} 
                        alt={event.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                    )}
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-sm text-secondary-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <p className="text-secondary-600 text-sm">
                      {event.description.length > 100 
                        ? `${event.description.substring(0, 100)}...` 
                        : event.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}