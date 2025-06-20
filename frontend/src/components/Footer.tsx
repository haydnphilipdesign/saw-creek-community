import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Saw Creek Community Association"
              />
              <span className="ml-2 text-xl font-display font-semibold">
                Saw Creek Estates
              </span>
            </Link>
            <p className="text-secondary-300 mb-4 max-w-md">
              The #1 rated gated community in the Poconos, offering year-round recreation 
              and premier amenities for residents and families.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-secondary-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-secondary-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-secondary-300 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 text-secondary-400 mr-2 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">
                  5728 Decker Road, Bushkill, PA 18324
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-secondary-400 mr-2 flex-shrink-0" />
                <a
                  href="tel:+15705889329"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  (570) 588-9329
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-secondary-400 mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@sawcreek.org"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  info@sawcreek.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © 2024 Saw Creek Estates Community Association. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                to="/privacy"
                className="text-secondary-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-secondary-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}