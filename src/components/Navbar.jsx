import React, { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode, onLogoClick, logoClicked }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Logo', href: '#travel-hero' },
    { name: 'Destinations', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Packages', href: '#pricing' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ]

  const scrollToSection = (href) => {
    console.log('Navigation clicked:', href) // Debug log
    
    // If clicking on Logo navigation, trigger the logo click effect
    if (href === '#travel-hero') {
      console.log('Logo navigation clicked - triggering effects!') // Debug log
      handleLogoClick()
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    console.log('Navbar logo clicked!') // Debug log
    onLogoClick() // Trigger the effect first
    setTimeout(() => {
      scrollToSection('#travel-hero')
    }, 100) // Small delay to ensure effect starts before scroll
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <div className="flex items-center">
             <button
               onClick={handleLogoClick}
               className={`flex items-center space-x-3 hover:opacity-80 transition-all duration-200 group ${
                 logoClicked ? 'animate-pulse' : ''
               }`}
             >
               <img 
                 src="/LOGO.image.webp" 
                 alt="Wanderlust Travel Logo" 
                 className={`h-8 w-8 group-hover:scale-110 transition-transform duration-200 ${
                   logoClicked ? 'scale-110 rotate-12' : ''
                 }`}
               />
               <h1 className={`text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-200 ${
                 logoClicked ? 'scale-105' : ''
               }`}>Wanderlust Travel</h1>
             </button>
           </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-4"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => scrollToSection('#pricing')}
              className="btn-primary transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              title="Go to pricing"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow"
              aria-label="Toggle menu"
              title="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#pricing')}
                className="btn-primary w-full mt-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
