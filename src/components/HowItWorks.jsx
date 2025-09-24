import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Destination",
      description: "Browse our curated collection of destinations and select your dream location. Get personalized recommendations based on your preferences.",
      features: ["Browse destinations", "Get recommendations", "Compare options"]
    },
    {
      number: "02", 
      title: "Customize Your Trip",
      description: "Personalize your itinerary with activities, accommodations, and experiences that match your interests and budget.",
      features: ["Select activities", "Choose accommodations", "Set preferences"]
    },
    {
      number: "03",
      title: "Book & Confirm",
      description: "Secure your booking with our easy payment system. Get instant confirmation and detailed travel documents.",
      features: ["Secure payment", "Instant confirmation", "Travel documents"]
    },
    {
      number: "04",
      title: "Travel & Enjoy",
      description: "Embark on your adventure with 24/7 support and real-time assistance. Create memories that last a lifetime.",
      features: ["24/7 support", "Real-time assistance", "Unforgettable experiences"]
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Plan your perfect trip in four simple steps. From destination selection 
            to unforgettable memories, we make travel planning effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:bg-primary-700 transition-colors duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 mt-16 w-0.5 h-16 bg-gradient-to-b from-primary-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Trip Planning Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                {/* Steps Indicator */}
                <div className="grid grid-cols-4 gap-4">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold ${
                        index < 3 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {step.title.split(' ')[0]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Demo Content */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Trip Confirmed</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-primary-200 dark:bg-primary-800 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary inline-flex items-center group">
            Start Planning Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Free consultation • Best price guarantee • 24/7 support
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
