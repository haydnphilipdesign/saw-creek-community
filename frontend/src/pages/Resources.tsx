import { motion } from 'framer-motion'
import { Building, Wrench, Users, Sparkles, Phone, Globe, MapPin, Star, ExternalLink, Shield, Award } from 'lucide-react'
import { mockResources } from '@/data/mockData'
import { PremiumCard } from '@/components/PremiumCard'
import { PremiumButton } from '@/components/PremiumButton'
import { AnimatedCounter } from '@/components/AnimatedCounter'

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-32 overflow-hidden">
        {/* Hero Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary-700/50 to-transparent"></div>
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
              <Award className="h-5 w-5 mr-2 text-accent-300" />
              <span className="text-white font-semibold">Premium Community Resources</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight"
            >
              World-Class
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-white"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Amenities
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed"
            >
              Experience unparalleled luxury with our 
              <span className="text-accent-300 font-semibold">exclusive amenities</span>, 
              curated services, and premium community resources designed for the distinguished lifestyle.
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
                  <AnimatedCounter from={0} to={25} suffix="+" />
                </div>
                <div className="text-primary-200 text-sm font-medium">Premium Amenities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter from={0} to={6} suffix="" />
                </div>
                <div className="text-primary-200 text-sm font-medium">Swimming Pools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter from={0} to={24} suffix="/7" />
                </div>
                <div className="text-primary-200 text-sm font-medium">Concierge Service</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(resourcesByCategory).map(([category, resources], categoryIndex) => {
            const CategoryIcon = getCategoryIcon(category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-24"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-6 shadow-lg">
                    <CategoryIcon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-4">
                    {getCategoryTitle(category)}
                  </h2>
                  <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                    Carefully curated {category} resources for our exclusive community
                  </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.8, delay: resourceIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <PremiumCard hover={true} glow={true} gradient={true} className="h-full">
                      {resource.imageUrl && (
                        <div className="relative overflow-hidden rounded-2xl mb-6 group">
                          <img 
                            src={resource.imageUrl} 
                            alt={resource.name}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          {resource.isVerified && (
                            <div className="absolute top-4 right-4">
                              <div className="flex items-center px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm">
                                <Shield className="h-4 w-4 text-white mr-1" />
                                <span className="text-white text-xs font-semibold">Verified</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-display font-bold text-secondary-900 mb-4 leading-tight">
                          {resource.name}
                        </h3>
                        
                        {resource.rating && (
                          <div className="flex items-center mb-4">
                            <div className="flex mr-3">
                              {renderStars(resource.rating)}
                            </div>
                            <span className="text-sm font-semibold text-secondary-700">
                              {resource.rating.toFixed(1)} / 5.0
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-secondary-600 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      {resource.hours && (
                        <div className="mb-6 p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
                              <Sparkles className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary-900">Operating Hours</div>
                              <div className="text-sm text-secondary-600">{resource.hours}</div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        {resource.contactInfo.phone && (
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                              <Phone className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary-900">Phone</div>
                              <a 
                                href={`tel:${resource.contactInfo.phone}`}
                                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                              >
                                {resource.contactInfo.phone}
                              </a>
                            </div>
                          </div>
                        )}
                        {resource.contactInfo.website && (
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3">
                              <ExternalLink className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary-900">Website</div>
                              <a 
                                href={resource.contactInfo.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                              >
                                Visit Website
                              </a>
                            </div>
                          </div>
                        )}
                        {resource.contactInfo.email && (
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                              <Globe className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary-900">Email</div>
                              <a 
                                href={`mailto:${resource.contactInfo.email}`}
                                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                              >
                                {resource.contactInfo.email}
                              </a>
                            </div>
                          </div>
                        )}
                        {resource.contactInfo.address && (
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3 mt-0.5">
                              <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary-900">Address</div>
                              <span className="text-secondary-600">
                                {resource.contactInfo.address}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      </PremiumCard>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-6 shadow-lg">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                  Premium {category.category.toLowerCase()} designed for luxury living
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <PremiumCard hover={true} className="h-full">
                    <h3 className="text-xl font-display font-bold text-secondary-900 mb-4 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-secondary-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {'hours' in item && item.hours && (
                      <div className="mb-6 p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
                            <Sparkles className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-secondary-900">Hours</div>
                            <div className="text-sm text-secondary-600">{item.hours}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {'contact' in item && item.contact && (
                      <div className="space-y-4">
                        {'phone' in item.contact && item.contact.phone && (
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                              <Phone className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary-900">Phone</div>
                              <a 
                                href={`tel:${item.contact.phone}`}
                                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                              >
                                {item.contact.phone}
                              </a>
                            </div>
                          </div>
                        )}
                        {'email' in item.contact && item.contact.email && (
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                              <Globe className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary-900">Email</div>
                              <a 
                                href={`mailto:${item.contact.email}`}
                                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                              >
                                {item.contact.email}
                              </a>
                            </div>
                          </div>
                        )}
                        {'address' in item.contact && item.contact.address && (
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3 mt-0.5">
                              <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary-900">Address</div>
                              <span className="text-secondary-600">
                                {item.contact.address}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    </PremiumCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <PremiumCard glow={true} gradient={true} className="text-center">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none"></div>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-8 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-6">
                  Premium Concierge
                </h2>
                <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Our dedicated concierge team is available 24/7 to assist with any questions 
                  about our world-class amenities, exclusive services, or luxury community life.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">24/7 Phone Support</h3>
                    <PremiumButton variant="outline" size="sm">
                      <a href="tel:+15705889329" className="flex items-center">
                        (570) 588-9329
                      </a>
                    </PremiumButton>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Email Concierge</h3>
                    <PremiumButton variant="outline" size="sm">
                      <a href="mailto:info@sawcreek.org" className="flex items-center">
                        info@sawcreek.org
                      </a>
                    </PremiumButton>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Private Office</h3>
                    <div className="text-secondary-600 leading-relaxed">
                      5728 Decker Road<br />
                      Bushkill, PA 18324
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </PremiumCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}