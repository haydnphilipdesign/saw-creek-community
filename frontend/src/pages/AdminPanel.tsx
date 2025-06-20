import { motion } from 'framer-motion'
import { Users, Calendar, FileText, Settings, BarChart3, Shield, TrendingUp, AlertTriangle } from 'lucide-react'
import { mockStats, mockEvents, mockNews, mockUser } from '@/data/mockData'

export default function AdminPanel() {
  const stats = [
    { title: 'Total Members', value: mockStats.totalMembers.toString(), icon: Users, color: 'bg-blue-500', change: mockStats.membershipGrowth },
    { title: 'Active Events', value: mockStats.activeEvents.toString(), icon: Calendar, color: 'bg-green-500', change: '+2 this week' },
    { title: 'Recent News', value: mockStats.recentNews.toString(), icon: FileText, color: 'bg-purple-500', change: '+3 this month' },
    { title: 'System Status', value: 'Healthy', icon: Shield, color: 'bg-emerald-500', change: '99.9% uptime' },
  ]

  const adminSections = [
    {
      title: 'User Management',
      description: 'Manage community members, roles, and permissions',
      icon: Users,
      actions: ['View All Users', 'Pending Registrations', 'Member Status']
    },
    {
      title: 'Event Management',
      description: 'Create, edit, and manage community events',
      icon: Calendar,
      actions: ['Create Event', 'Manage RSVPs', 'Event Analytics']
    },
    {
      title: 'Content Management',
      description: 'Manage news articles, announcements, and resources',
      icon: FileText,
      actions: ['Create Article', 'Manage Resources', 'Community Updates']
    },
    {
      title: 'System Settings',
      description: 'Configure system settings and preferences',
      icon: Settings,
      actions: ['General Settings', 'Email Templates', 'Security Settings']
    }
  ]

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
            Admin Dashboard
          </h1>
          <p className="text-secondary-600 mt-2">
            Manage your Saw Creek Estates community platform
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-secondary-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Admin Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {adminSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <section.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-secondary-900">{section.title}</h3>
                  <p className="text-secondary-600 text-sm">{section.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {section.actions.map((action) => (
                  <button
                    key={action}
                    className="w-full text-left px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-secondary-900">Recent Admin Activity</h2>
            <button className="btn-outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Reports
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
              <div className="bg-green-100 rounded-full p-2">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-secondary-900 font-medium">New member registered</p>
                <p className="text-secondary-600 text-sm">{mockUser.firstName} {mockUser.lastName} completed registration • 2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
              <div className="bg-blue-100 rounded-full p-2">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-secondary-900 font-medium">Event updated</p>
                <p className="text-secondary-600 text-sm">{mockEvents[0].title} registration updated • 4 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
              <div className="bg-purple-100 rounded-full p-2">
                <FileText className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-secondary-900 font-medium">News article published</p>
                <p className="text-secondary-600 text-sm">{mockNews[0].title} was published • 1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="bg-yellow-100 rounded-full p-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-secondary-900 font-medium">Pending action required</p>
                <p className="text-secondary-600 text-sm">3 new resource submissions await approval • 2 days ago</p>
              </div>
              <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                Review
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}