import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero = ({ logoClicked }) => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-16 relative overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        webkit-playsinline="true"
        x5-playsinline="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Travel.img.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10"></div>
      
      <div className="container-max section-padding relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-orange-500">Discover Amazing</span>{' '}
                <span className="gradient-text">Destinations</span>
              </h1>
              <p className="text-xl text-yellow-600 dark:text-green-300 leading-relaxed">
                Embark on unforgettable journeys with our curated travel experiences. 
                From exotic beaches to mountain adventures, create memories that last 
                a lifetime.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#pricing')}
                className="btn-primary flex items-center justify-center group"
              >
                Book Your Trip
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('#how-it-works')}
                className="btn-secondary flex items-center justify-center group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
            {/* Hero Illustration */}
            <div id="travel-hero" className={`bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group ${
              logoClicked 
                ? 'ring-4 ring-yellow-400 ring-opacity-75 shadow-3xl scale-110' 
                : ''
            }`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className={`transition-all duration-500 ${
                    logoClicked 
                      ? '-translate-x-4' 
                      : ''
                  }`}>
                    <img 
                      src="/LOGO.image.webp" 
                      alt="Travel Logo" 
                      className={`h-10 w-10 group-hover:rotate-12 transition-all duration-300 ${
                        logoClicked 
                          ? 'animate-pulse scale-125 rotate-180 drop-shadow-2xl hover:scale-150 hover:rotate-360 hover:brightness-125' 
                          : 'hover:scale-110 hover:rotate-12 hover:brightness-110'
                      }`}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-primary-200 dark:bg-primary-800 rounded w-2/3"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-3 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-200">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">Destinations</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">150+ countries</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-3 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors duration-200">
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">Experiences</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">500+ adventures</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
