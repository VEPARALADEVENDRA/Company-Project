import React from 'react'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Code,
  Database
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    Travel: [
      { name: 'Destinations', href: '#features' },
      { name: 'Packages', href: '#pricing' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Travel Guides', href: '#' },
      { name: 'Group Travel', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Travel Blog', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#' },
      { name: 'Emergency Support', href: '#' },
      { name: 'Travel Community', href: '#' },
      { name: 'Travel Tips', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Travel Insurance', href: '#' },
      { name: 'Cancellation Policy', href: '#' },
      { name: 'Safety & Security', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com/VEPARALADEVENDRA' },
    { name: 'IEEE', icon: <Code className="h-5 w-5" />, href: 'https://ieeexplore.ieee.org/author/968720097337954' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/veparala-devendra-41034226a' },
    { name: 'Firebase', icon: <Database className="h-5 w-5" />, href: 'https://console.firebase.google.com' }
  ]
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text">Wanderlust Travel</h3>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Create unforgettable travel experiences with our curated destinations and expert planning. 
                  From adventure seekers to luxury travelers, we make every journey extraordinary.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span>hello@wanderlusttravel.com / vdevendra746@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <span>+91 (INDIA) 9247897027</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5" />
                  <span>Bangalore, INDIA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : null}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Wanderlust Travel. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button onClick={() => scrollToSection('#privacy')} className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button onClick={() => scrollToSection('#terms')} className="hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button onClick={() => scrollToSection('#cookies')} className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </button>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
