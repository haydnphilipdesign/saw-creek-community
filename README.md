# Saw Creek Community Association Website

A modern, responsive website for the Saw Creek Community Association, built with React and Node.js.

## Project Structure

```
saw-creek/
├── frontend/          # React TypeScript frontend
├── backend/           # Node.js Express backend
├── shared/            # Shared types and utilities
├── docs/              # Documentation
└── docker-compose.yml # Development environment
```

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- React Query for state management
- Framer Motion for animations

### Backend
- Node.js with Express and TypeScript
- PostgreSQL database
- Prisma ORM
- JWT authentication
- Multer for file uploads
- Nodemailer for email notifications

### Development
- ESLint and Prettier for code formatting
- Husky for pre-commit hooks
- Jest and React Testing Library for testing
- Docker for containerization

## Features

- 🏠 **Home Page**: Mission statement, upcoming events, news
- 👥 **Community Resources**: Local business directory, community groups
- 📅 **Event Management**: RSVP system, calendar integration
- 🔐 **Membership System**: Secure login, member benefits
- 📝 **Content Management**: Admin CMS for easy updates
- 📱 **Responsive Design**: Mobile-first approach
- ♿ **Accessibility**: WCAG 2.1 compliant

## Getting Started

1. Clone the repository
2. Install dependencies: `npm run install:all`
3. Set up environment variables
4. Start development servers: `npm run dev`

## Development Commands

```bash
npm run dev          # Start both frontend and backend
npm run build        # Build for production
npm run test         # Run all tests
npm run lint         # Run linting
npm run type-check   # Run TypeScript checks
```

## Security Features

- SSL/TLS encryption
- JWT-based authentication
- Input validation and sanitization
- CSRF protection
- Rate limiting
- Secure headers
- Data encryption at rest