import React from 'react'
import { ArrowRight, Rocket, CheckCircle } from 'lucide-react'

const CTAStrip = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <Rocket className="h-10 w-10 text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Your Adventure?
            </h2>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of travelers who trust Wanderlust Travel to create 
              unforgettable journeys and memories that last a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => scrollToSection('#pricing')}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
              >
                Plan Your Trip
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('#how-it-works')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Best price guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-primary-100">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-primary-100">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-primary-100">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9★</div>
            <div className="text-primary-100">Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAStrip
