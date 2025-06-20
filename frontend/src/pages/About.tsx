import { motion } from 'framer-motion'
import { MapPin, Users, Calendar, Award } from 'lucide-react'

export default function About() {
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
              About Saw Creek Estates
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover the premier gated community in the Pocono Mountains, 
              where recreation meets tranquility just 85 miles from New York City.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
                The #1 Gated Community in the Poconos
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Saw Creek Estates has earned its reputation as the premier gated community 
                in the Pocono Mountains region. Our beautiful location in Bushkill, Pennsylvania 
                offers residents the perfect blend of natural beauty, comprehensive amenities, 
                and community spirit.
              </p>
              <p className="text-lg text-secondary-600">
                Located just 85 miles from New York City, our community provides an ideal 
                retreat for both full-time residents and weekend getaway enthusiasts. 
                Experience the tranquility of private lakes and woods while enjoying 
                world-class recreational facilities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary-50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3" />
                  <span>5728 Decker Road, Bushkill, PA 18324</span>
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-primary-600 mr-3" />
                  <span>#1 Rated Gated Community in the Poconos</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Family-friendly environment</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Year-round recreational activities</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Amenities Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">
              World-Class Amenities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Private Ski Area", description: "Enjoy skiing and winter sports right in our community" },
                { title: "6 Swimming Pools", description: "4 outdoor and 2 indoor pools for year-round swimming" },
                { title: "Tennis Courts", description: "Indoor and outdoor courts for all skill levels" },
                { title: "Fitness Center", description: "State-of-the-art equipment and facilities" },
                { title: "The TOP Restaurant", description: "Fine dining experience within the community" },
                { title: "Beach & Boat Access", description: "Private lake access with beach and boating facilities" },
                { title: "Sports Facilities", description: "Racquetball and basketball courts" },
                { title: "Natural Beauty", description: "Private lakes, woods, and trout-filled Saw Creek" },
                { title: "Gated Security", description: "24/7 secure access for peace of mind" }
              ].map((amenity, index) => (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-secondary-600">
                    {amenity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Community Values */}
          <div className="bg-primary-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
              Our Community Values
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Active Lifestyle", description: "Promoting health and wellness through recreation" },
                { title: "Family-Friendly", description: "Creating a safe environment for all ages" },
                { title: "Financial Strength", description: "Responsible management and stable community" },
                { title: "Diverse Recreation", description: "Something for everyone, year-round" }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600">
                    {value.description}
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