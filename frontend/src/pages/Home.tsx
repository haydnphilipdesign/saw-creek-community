import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Users, MapPin, ArrowRight, Heart, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Welcome to{' '}
              <span className="text-accent-300">Saw Creek Estates</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-primary-100"
            >
              The #1 rated gated community in the Poconos, offering year-round recreation just 85 miles from NYC
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/register"
                className="btn-primary bg-accent-500 hover:bg-accent-600 text-primary-900 px-8 py-3 text-lg font-semibold"
              >
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/events"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-800 px-8 py-3 text-lg font-semibold"
              >
                View Events
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Saw Creek Estates Community Association is dedicated to providing a premier gated community 
              experience with comprehensive amenities, active lifestyle opportunities, and a strong sense of community 
              for our full-time and weekend residents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Premier Amenities</h3>
              <p className="text-secondary-600">
                Enjoy access to our private ski area, 6 pools, tennis courts, fitness center, 
                and The TOP Restaurant - all within our gated community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Gated Security</h3>
              <p className="text-secondary-600">
                Experience peace of mind in our secure gated community, surrounded by 
                private lakes and woods with controlled access for residents and guests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Year-Round Recreation</h3>
              <p className="text-secondary-600">
                From skiing in winter to swimming and boating in summer, enjoy four seasons 
                of activities with our diverse recreational opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-secondary-600">
              Discover all the ways our community comes together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">Community Events</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                Participate in community events, photo contests, seasonal activities, 
                and join our various clubs and social groups.
              </p>
              <Link
                to="/events"
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
              >
                View Events
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">Community Resources</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                Explore our comprehensive amenities including pools, fitness center, tennis courts, 
                ski area, and dining at The TOP Restaurant.
              </p>
              <Link
                to="/resources"
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
              >
                Browse Resources
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">About Our Community</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                Discover our gated community in Bushkill, PA, featuring private lakes, 
                woods, and the trout-filled Saw Creek running through our property.
              </p>
              <Link
                to="/about"
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Come live and play with us in the premier gated community of the Poconos. 
            Experience the perfect blend of recreation, security, and community spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="btn bg-accent-500 hover:bg-accent-600 text-primary-900 px-8 py-3 text-lg font-semibold"
            >
              Become a Member
            </Link>
            <Link
              to="/events"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-800 px-8 py-3 text-lg font-semibold"
            >
              Attend an Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}