import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import CTAStrip from './components/CTAStrip'
import Footer from './components/Footer'
import TravelForm from './components/TravelForm'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [logoClicked, setLogoClicked] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleLogoClick = () => {
    setLogoClicked(true)
    // Reset the effect after animation completes
    setTimeout(() => {
      setLogoClicked(false)
    }, 2000)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onLogoClick={handleLogoClick} logoClicked={logoClicked} />
        <Hero logoClicked={logoClicked} />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <CTAStrip />
        <TravelForm />
        <Footer />
      </div>
    </div>
  )
}

export default App
