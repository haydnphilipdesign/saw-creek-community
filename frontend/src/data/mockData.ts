export const mockEvents = [
  {
    id: '1',
    title: 'Annual Summer BBQ',
    description: 'Join us for our annual community barbecue! Food, games, and great company await. Bring your family and friends for an afternoon of fun.',
    date: '2024-07-15',
    time: '2:00 PM - 6:00 PM',
    location: 'Community Center Pavilion',
    maxAttendees: 100,
    currentAttendees: 67,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=300&fit=crop',
    category: 'social' as const,
    isPublic: true,
    rsvpRequired: true,
    createdById: 'admin1',
    createdAt: '2024-06-01',
    updatedAt: '2024-06-15'
  },
  {
    id: '2',
    title: 'Home Security Workshop',
    description: 'Learn essential home security tips from local law enforcement. Topics include alarm systems, surveillance, and neighborhood watch programs.',
    date: '2024-07-22',
    time: '7:00 PM - 8:30 PM',
    location: 'Community Center Meeting Room A',
    maxAttendees: 30,
    currentAttendees: 18,
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop',
    category: 'educational' as const,
    isPublic: true,
    rsvpRequired: true,
    createdById: 'admin1',
    createdAt: '2024-06-10',
    updatedAt: '2024-06-10'
  },
  {
    id: '3',
    title: 'Monthly Board Meeting',
    description: 'Regular monthly meeting of the community association board. All residents welcome to attend and participate in community discussions.',
    date: '2024-07-28',
    time: '7:00 PM - 9:00 PM',
    location: 'Community Center Conference Room',
    currentAttendees: 12,
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&h=300&fit=crop',
    category: 'community' as const,
    isPublic: true,
    rsvpRequired: false,
    createdById: 'admin1',
    createdAt: '2024-06-20',
    updatedAt: '2024-06-20'
  },
  {
    id: '4',
    title: 'Kids Movie Night',
    description: 'Family-friendly movie screening under the stars! Bring blankets and snacks. This month we\'re showing "The Incredibles 2".',
    date: '2024-08-05',
    time: '8:00 PM - 10:30 PM',
    location: 'Community Park Amphitheater',
    maxAttendees: 150,
    currentAttendees: 89,
    imageUrl: 'https://images.unsplash.com/photo-1489599739916-0da2fada5e87?w=500&h=300&fit=crop',
    category: 'recreational' as const,
    isPublic: true,
    rsvpRequired: true,
    createdById: 'admin2',
    createdAt: '2024-06-25',
    updatedAt: '2024-06-25'
  },
  {
    id: '5',
    title: 'Gardening Club Meeting',
    description: 'Monthly meeting of the community gardening club. This month: preparing your garden for fall harvest season.',
    date: '2024-08-12',
    time: '10:00 AM - 11:30 AM',
    location: 'Community Garden Shed',
    maxAttendees: 25,
    currentAttendees: 16,
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop',
    category: 'recreational' as const,
    isPublic: true,
    rsvpRequired: false,
    createdById: 'user1',
    createdAt: '2024-07-01',
    updatedAt: '2024-07-01'
  }
]

export const mockResources = [
  {
    id: '1',
    name: 'Saw Creek General Store',
    description: 'Your neighborhood convenience store with groceries, essentials, and local goods. Family-owned and operated for over 20 years.',
    category: 'business' as const,
    contactInfo: {
      phone: '(570) 555-0123',
      email: 'info@sawcreekstore.com',
      website: 'https://sawcreekstore.com',
      address: '123 Main Street, Saw Creek, PA 18347'
    },
    hours: 'Mon-Sun: 6:00 AM - 10:00 PM',
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    isVerified: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-06-10'
  },
  {
    id: '2',
    name: 'Mountain View Plumbing',
    description: 'Professional plumbing services for residential and commercial properties. 24/7 emergency service available.',
    category: 'service' as const,
    contactInfo: {
      phone: '(570) 555-0456',
      email: 'service@mountainviewplumbing.com',
      website: 'https://mountainviewplumbing.com',
      address: '456 Oak Avenue, Saw Creek, PA 18347'
    },
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Emergency service available 24/7',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=300&fit=crop',
    isVerified: true,
    createdAt: '2024-02-01',
    updatedAt: '2024-05-20'
  },
  {
    id: '3',
    name: 'Community Tennis Courts',
    description: 'Two professionally maintained tennis courts available for community use. Courts are lit for evening play.',
    category: 'amenity' as const,
    contactInfo: {
      phone: '(570) 555-0789',
      address: 'Recreation Center, 789 Pine Street, Saw Creek, PA 18347'
    },
    hours: 'Daily: 6:00 AM - 10:00 PM',
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&h=300&fit=crop',
    isVerified: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-04-15'
  },
  {
    id: '4',
    name: 'Saw Creek Book Club',
    description: 'Monthly book club meeting for literature enthusiasts. Currently reading contemporary fiction with lively discussions.',
    category: 'group' as const,
    contactInfo: {
      email: 'books@sawcreekcommunity.com',
      address: 'Community Center Library, Saw Creek, PA 18347'
    },
    hours: 'Monthly meetings: First Thursday at 7:00 PM',
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
    isVerified: true,
    createdAt: '2024-03-01',
    updatedAt: '2024-06-01'
  },
  {
    id: '5',
    name: 'Elite Home Cleaning',
    description: 'Professional residential cleaning services. Eco-friendly products, flexible scheduling, and trusted staff.',
    category: 'service' as const,
    contactInfo: {
      phone: '(570) 555-0321',
      email: 'hello@elitehomecleaning.com',
      website: 'https://elitehomecleaning.com'
    },
    hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
    isVerified: true,
    createdAt: '2024-04-01',
    updatedAt: '2024-06-15'
  }
]

export const mockNews = [
  {
    id: '1',
    title: 'New Playground Equipment Installation Complete',
    content: `We're excited to announce that the new playground equipment at Saw Creek Community Park has been successfully installed and is now open for use!
    
The new playground features:
- Modern climbing structures suitable for ages 2-12
- Updated safety surfacing throughout
- New swings including accessible options
- Interactive play panels and sensory elements
- Improved lighting for evening visibility

The project was funded through community fundraising efforts and a generous grant from the county. We extend our heartfelt thanks to all residents who contributed to making this dream a reality.

Safety inspections have been completed and all equipment meets current safety standards. Please remind children to follow posted playground rules and supervise young children at all times.

The playground is open daily from dawn to dusk. We hope families will enjoy this wonderful new addition to our community!`,
    summary: 'New playground equipment at Community Park is now open with modern, safe features for all ages.',
    authorId: 'admin1',
    publishDate: '2024-06-15',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop',
    category: 'announcement' as const,
    isPublished: true,
    tags: ['playground', 'community', 'safety', 'families'],
    createdAt: '2024-06-14',
    updatedAt: '2024-06-15'
  },
  {
    id: '2',
    title: 'Summer Pool Hours Extended',
    content: `Due to popular request and the warm weather, we're extending community pool hours for the remainder of July and August.
    
New extended hours:
- Monday-Friday: 6:00 AM - 9:00 PM
- Saturday-Sunday: 8:00 AM - 9:00 PM
- Lap swimming: 6:00 AM - 8:00 AM (weekdays only)

Please note that lifeguards are on duty during all operational hours. Pool rules remain in effect:
- No diving in shallow end
- Children under 14 must be accompanied by an adult
- Pool capacity limited to 50 people
- No glass containers in pool area

Pool passes are still available at the community center office for $25 per family for the season. Day passes are $5 per person.

Beat the heat and enjoy our beautiful community pool!`,
    summary: 'Community pool hours extended through August with new schedule and continued safety protocols.',
    authorId: 'admin2',
    publishDate: '2024-07-01',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=300&fit=crop',
    category: 'announcement' as const,
    isPublished: true,
    tags: ['pool', 'summer', 'hours', 'recreation'],
    createdAt: '2024-06-30',
    updatedAt: '2024-07-01'
  },
  {
    id: '3',
    title: 'Road Maintenance Schedule - July 2024',
    content: `The community association will be conducting routine road maintenance during the month of July. Please plan accordingly for potential delays.
    
Scheduled maintenance:
- July 8-10: Oak Avenue repaving
- July 15-17: Pine Street crack sealing  
- July 22-24: Maple Drive line repainting
- July 29-31: Community Center parking lot repair

Work will typically occur between 8:00 AM and 4:00 PM on weekdays. Residents will receive 48-hour advance notice before work begins on their street.

During maintenance periods:
- Local traffic only on affected streets
- Temporary parking restrictions may apply
- Emergency vehicle access will be maintained
- Contractors will provide alternate routes when needed

We appreciate your patience as we work to maintain our community infrastructure. Contact the office at (570) 555-0100 with any questions or concerns.`,
    summary: 'July road maintenance schedule announced with dates and details for various community streets.',
    authorId: 'admin1',
    publishDate: '2024-06-25',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop',
    category: 'news' as const,
    isPublished: true,
    tags: ['maintenance', 'roads', 'infrastructure', 'schedule'],
    createdAt: '2024-06-24',
    updatedAt: '2024-06-25'
  },
  {
    id: '4',
    title: 'Community Garden Plots Still Available',
    content: `There are still a few plots available in our community garden for the 2024 growing season!
    
Available plots:
- 5 standard plots (10x10 feet) - $30/season
- 2 large plots (10x20 feet) - $50/season
- 1 accessible raised bed - $40/season

Plot rental includes:
- Water access and basic tools
- Organic compost and soil amendments
- Storage shed access
- Community workshop attendance
- Harvest sharing opportunities

The garden is located behind the community center and features:
- Deer-resistant fencing
- Tool shed with basic gardening equipment  
- Composting area for garden waste
- Picnic area for garden club meetings
- Educational signage about organic gardening

Plots are assigned on a first-come, first-served basis. Contact Sarah Johnson at (570) 555-0200 or visit the community center office to reserve your plot.

Join our growing community of gardeners and enjoy fresh, homegrown vegetables all season long!`,
    summary: 'Community garden plots still available for 2024 season with various sizes and amenities included.',
    authorId: 'user1',
    publishDate: '2024-06-20',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop',
    category: 'community' as const,
    isPublished: true,
    tags: ['garden', 'plots', 'available', 'vegetables', 'community'],
    createdAt: '2024-06-19',
    updatedAt: '2024-06-20'
  }
]

export const mockUser = {
  id: 'demo-user-1',
  email: 'demo@sawcreekcommmunity.com',
  firstName: 'Demo',
  lastName: 'User',
  role: 'member' as const,
  membershipStatus: 'active' as const,
  joinDate: '2024-01-15',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  phone: '(570) 555-0123',
  address: '123 Oak Avenue, Saw Creek, PA 18347',
  emergencyContact: 'Jane User - (570) 555-0456',
  interests: ['gardening', 'community events', 'tennis'],
  createdAt: '2024-01-15',
  updatedAt: '2024-06-01'
}

export const mockStats = {
  totalMembers: 347,
  activeEvents: 12,
  totalResources: 28,
  recentNews: 8,
  upcomingEvents: 5,
  membershipGrowth: '+12%',
  eventAttendance: '85%',
  resourceRating: 4.6
}