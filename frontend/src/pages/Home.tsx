import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Users, MapPin, ArrowRight, Heart, Shield, Zap, Star, Play, ChevronDown, TrendingUp, Award, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  
  const [currentStat, setCurrentStat] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Animated counter for stats
  const [memberCount, setMemberCount] = useState(0)
  const [eventCount, setEventCount] = useState(0)
  const [satisfactionCount, setSatisfactionCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (memberCount < 347) setMemberCount(prev => prev + 3)
      if (eventCount < 28) setEventCount(prev => prev + 1)
      if (satisfactionCount < 98) setSatisfactionCount(prev => prev + 1)
    }, 50)
    return () => clearTimeout(timer)
  }, [memberCount, eventCount, satisfactionCount])

  const stats = [
    { label: 'Active Members', value: memberCount, suffix: '+' },
    { label: 'Monthly Events', value: eventCount, suffix: '+' },
    { label: 'Satisfaction Rate', value: satisfactionCount, suffix: '%' }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Member since 2018",
      content: "Moving to Saw Creek was the best decision our family ever made. The community spirit here is unmatched, and the amenities make every day feel like a vacation.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "Weekend Resident",
      content: "As someone who works in the city, Saw Creek is my perfect escape. The security, privacy, and recreational opportunities are exactly what I needed.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Young Professional",
      content: "The community events and networking opportunities have helped me build lasting friendships. Plus, the amenities rival any luxury resort!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face", 
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Premium Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-600/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1920&h=1080&fit=crop"
            alt="Luxury Community"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          style={{ y, opacity }}
          className="absolute top-20 left-10 w-20 h-20 bg-accent-400/30 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute bottom-32 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 px-6 py-2 rounded-full text-accent-300 font-medium text-sm">
              <Award className="w-4 h-4 mr-2" />
              #1 Rated Gated Community in the Poconos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Where Luxury Meets{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Community
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed"
          >
            Experience the pinnacle of gated community living with world-class amenities, 
            exclusive recreation, and an vibrant community just 85 miles from NYC
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              to="/register"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-900 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full transition-all duration-300 hover:from-accent-500 hover:to-accent-600 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Join Our Community</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-300 to-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
            </Link>
            
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Community Tour
            </button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent-300 mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2 opacity-70">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
              Unparalleled <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every detail has been crafted to provide you with an extraordinary living experience 
              that exceeds the highest standards of luxury and community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "World-Class Amenities",
                description: "Private ski slopes, 6 premium pools, championship tennis courts, state-of-the-art fitness center, and award-winning dining at The TOP Restaurant.",
                features: ["Private Ski Area", "6 Swimming Pools", "Tennis & Racquetball", "Luxury Spa & Fitness"],
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Shield,
                title: "Ultimate Security & Privacy",
                description: "24/7 gated security with advanced surveillance systems, private lakes, and protected woodland ensuring complete peace of mind.",
                features: ["24/7 Gated Security", "Private Lake Access", "Controlled Entry", "Emergency Response"],
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Zap,
                title: "Vibrant Community Life",
                description: "Year-round events, exclusive social clubs, networking opportunities, and a thriving community of like-minded residents.",
                features: ["Monthly Events", "Social Clubs", "Networking", "Family Activities"],
                color: "from-amber-500 to-orange-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  {/* Feature List */}
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${feature.color}`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">Members Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the families who call Saw Creek home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-200 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-500/20 to-transparent"
          ></motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Your Dream Community <span className="text-accent-300">Awaits</span>
            </h2>
            <p className="text-xl mb-10 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join an exclusive community where luxury living meets authentic connections. 
              Experience the lifestyle you've always envisioned.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/register"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-primary-900 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full transition-all duration-300 hover:from-accent-500 hover:to-accent-600 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-300 to-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              </Link>
              
              <Link
                to="/events"
                className="group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white border-2 border-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Explore Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}