import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Camera } from 'lucide-react'

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Photo Contest",
      date: "2024-02-15",
      time: "All Day",
      location: "Throughout Community",
      description: "Submit your best photos of Saw Creek Estates for our annual photo contest!",
      category: "community",
      attendees: 25
    },
    {
      id: 2,
      title: "Winter Ski Lessons",
      date: "2024-02-20",
      time: "10:00 AM",
      location: "Private Ski Area",
      description: "Learn to ski or improve your skills with our certified instructors.",
      category: "recreational",
      attendees: 15
    },
    {
      id: 3,
      title: "Community Board Meeting",
      date: "2024-02-25",
      time: "7:00 PM",
      location: "Community Center",
      description: "Monthly board meeting - all residents welcome to attend.",
      category: "community",
      attendees: 45
    }
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Holiday Winter Festival",
      date: "2023-12-15",
      description: "A magical evening celebrating the holiday season with the community."
    },
    {
      id: 5,
      title: "Summer Pool Party",
      date: "2023-08-12",
      description: "Annual summer celebration at our outdoor pool complex."
    }
  ]

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
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.category === 'community' 
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {event.category}
                  </span>
                </div>
                
                <p className="text-secondary-600 mb-4">
                  {event.description}
                </p>
                
                <button className="btn-primary">
                  RSVP Now
                </button>
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
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">
              Recent Past Events
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-secondary-500 mb-2">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-secondary-600">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}