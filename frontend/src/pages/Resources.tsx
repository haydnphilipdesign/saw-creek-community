import { motion } from 'framer-motion'
import { Building, Wrench, Users, Sparkles, Phone, Globe, MapPin, Star, ExternalLink } from 'lucide-react'
import { mockResources } from '@/data/mockData'

export default function Resources() {
  // Group resources by category
  const resourcesByCategory = mockResources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = []
    }
    acc[resource.category].push(resource)
    return acc
  }, {} as Record<string, typeof mockResources>)

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'business': return Building
      case 'service': return Wrench
      case 'group': return Users
      case 'amenity': return Sparkles
      default: return Building
    }
  }

  const getCategoryTitle = (category: string) => {
    switch(category) {
      case 'business': return 'Local Businesses'
      case 'service': return 'Professional Services'
      case 'group': return 'Community Groups'
      case 'amenity': return 'Community Amenities'
      default: return category
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  const amenities = [
    {
      category: "Recreation",
      icon: Sparkles,
      items: [
        {
          name: "Private Ski Area",
          description: "Full skiing facilities with lessons available",
          contact: { phone: "(570) 588-9329" }
        },
        {
          name: "Swimming Pools (6 total)",
          description: "4 outdoor pools and 2 indoor pools",
          hours: "6 AM - 10 PM daily"
        },
        {
          name: "Tennis Courts",
          description: "Indoor and outdoor courts available",
          hours: "Dawn to dusk"
        },
        {
          name: "Fitness Center",
          description: "State-of-the-art equipment and facilities",
          hours: "5 AM - 11 PM daily"
        },
        {
          name: "Beach & Boat Access",
          description: "Private lake access with beach area",
          hours: "Seasonal availability"
        },
        {
          name: "Racquetball & Basketball",
          description: "Indoor courts for year-round play",
          hours: "6 AM - 10 PM daily"
        }
      ]
    },
    {
      category: "Dining",
      icon: Building,
      items: [
        {
          name: "The TOP Restaurant",
          description: "Fine dining experience within the community",
          contact: { phone: "(570) 588-9329" },
          hours: "Lunch & Dinner service"
        }
      ]
    },
    {
      category: "Community Services",
      icon: Wrench,
      items: [
        {
          name: "Community Association Office",
          description: "Main office for all community matters",
          contact: { 
            phone: "(570) 588-9329", 
            email: "info@sawcreek.org",
            address: "5728 Decker Road, Bushkill, PA 18324"
          },
          hours: "Mon-Fri 9 AM - 5 PM"
        },
        {
          name: "Security Gate",
          description: "24/7 gated access control",
          hours: "24/7"
        },
        {
          name: "Maintenance Services",
          description: "Community maintenance and landscaping",
          contact: { phone: "(570) 588-9329" }
        }
      ]
    },
    {
      category: "Community Groups",
      icon: Users,
      items: [
        {
          name: "Board of Directors",
          description: "Community governance and oversight",
          contact: { email: "info@sawcreek.org" }
        },
        {
          name: "Social Clubs",
          description: "Various interest-based community groups",
          contact: { email: "info@sawcreek.org" }
        },
        {
          name: "Volunteer Opportunities",
          description: "Ways to get involved in community activities",
          contact: { email: "info@sawcreek.org" }
        }
      ]
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
              Community Resources
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover all the amenities, services, and opportunities available 
              to residents of Saw Creek Estates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(resourcesByCategory).map(([category, resources], categoryIndex) => {
            const CategoryIcon = getCategoryIcon(category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center mb-8">
                  <CategoryIcon className="h-8 w-8 text-primary-600 mr-3" />
                  <h2 className="text-3xl font-display font-bold text-secondary-900">
                    {getCategoryTitle(category)}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: resourceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="card hover:shadow-lg transition-shadow"
                    >
                      {resource.imageUrl && (
                        <img 
                          src={resource.imageUrl} 
                          alt={resource.name}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                      )}
                      
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-secondary-900 flex-1">
                          {resource.name}
                        </h3>
                        {resource.isVerified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
                            Verified
                          </span>
                        )}
                      </div>
                      
                      {resource.rating && (
                        <div className="flex items-center mb-3">
                          <div className="flex mr-2">
                            {renderStars(resource.rating)}
                          </div>
                          <span className="text-sm text-secondary-600">
                            {resource.rating.toFixed(1)}
                          </span>
                        </div>
                      )}
                      
                      <p className="text-secondary-600 mb-4 text-sm">
                        {resource.description}
                      </p>
                      
                      {resource.hours && (
                        <div className="mb-3">
                          <span className="text-sm font-medium text-secondary-700">Hours: </span>
                          <span className="text-sm text-secondary-600">{resource.hours}</span>
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        {resource.contactInfo.phone && (
                          <div className="flex items-center text-sm">
                            <Phone className="h-4 w-4 text-secondary-400 mr-2" />
                            <a 
                              href={`tel:${resource.contactInfo.phone}`}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {resource.contactInfo.phone}
                            </a>
                          </div>
                        )}
                        {resource.contactInfo.website && (
                          <div className="flex items-center text-sm">
                            <ExternalLink className="h-4 w-4 text-secondary-400 mr-2" />
                            <a 
                              href={resource.contactInfo.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700"
                            >
                              Visit Website
                            </a>
                          </div>
                        )}
                        {resource.contactInfo.email && (
                          <div className="flex items-center text-sm">
                            <Globe className="h-4 w-4 text-secondary-400 mr-2" />
                            <a 
                              href={`mailto:${resource.contactInfo.email}`}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {resource.contactInfo.email}
                            </a>
                          </div>
                        )}
                        {resource.contactInfo.address && (
                          <div className="flex items-start text-sm">
                            <MapPin className="h-4 w-4 text-secondary-400 mr-2 mt-0.5" />
                            <span className="text-secondary-600">
                              {resource.contactInfo.address}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Traditional Community Amenities */}
          {amenities.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <category.icon className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-display font-bold text-secondary-900">
                  {category.category}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="card hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {item.description}
                    </p>
                    
                    {'hours' in item && item.hours && (
                      <div className="mb-3">
                        <span className="text-sm font-medium text-secondary-700">Hours: </span>
                        <span className="text-sm text-secondary-600">{item.hours}</span>
                      </div>
                    )}
                    
                    {'contact' in item && item.contact && (
                      <div className="space-y-2">
                        {'phone' in item.contact && item.contact.phone && (
                          <div className="flex items-center text-sm">
                            <Phone className="h-4 w-4 text-secondary-400 mr-2" />
                            <a 
                              href={`tel:${item.contact.phone}`}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {item.contact.phone}
                            </a>
                          </div>
                        )}
                        {'email' in item.contact && item.contact.email && (
                          <div className="flex items-center text-sm">
                            <Globe className="h-4 w-4 text-secondary-400 mr-2" />
                            <a 
                              href={`mailto:${item.contact.email}`}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {item.contact.email}
                            </a>
                          </div>
                        )}
                        {'address' in item.contact && item.contact.address && (
                          <div className="flex items-start text-sm">
                            <MapPin className="h-4 w-4 text-secondary-400 mr-2 mt-0.5" />
                            <span className="text-secondary-600">
                              {item.contact.address}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
              Need More Information?
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Our community association office is here to help with any questions 
              about amenities, services, or community life.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-primary-600 mb-2" />
                <h3 className="font-semibold text-secondary-900 mb-1">Call Us</h3>
                <a 
                  href="tel:+15705889329"
                  className="text-primary-600 hover:text-primary-700"
                >
                  (570) 588-9329
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-8 w-8 text-primary-600 mb-2" />
                <h3 className="font-semibold text-secondary-900 mb-1">Email Us</h3>
                <a 
                  href="mailto:info@sawcreek.org"
                  className="text-primary-600 hover:text-primary-700"
                >
                  info@sawcreek.org
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-primary-600 mb-2" />
                <h3 className="font-semibold text-secondary-900 mb-1">Visit Us</h3>
                <span className="text-secondary-600 text-center">
                  5728 Decker Road<br />
                  Bushkill, PA 18324
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}