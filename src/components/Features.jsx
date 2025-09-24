import React from 'react'
import { 
  MapPin, 
  Shield, 
  Users, 
  Star, 
  Smartphone, 
  Globe 
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Curated Destinations",
      description: "Discover handpicked destinations with detailed guides, local insights, and hidden gems that only locals know about."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Travel Protection",
      description: "Comprehensive travel insurance and 24/7 emergency support to ensure your safety and peace of mind wherever you go."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Guides",
      description: "Connect with local experts and professional guides who will make your journey unforgettable with insider knowledge."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Experiences",
      description: "Access exclusive experiences, luxury accommodations, and unique activities that create memories to last a lifetime."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App",
      description: "Plan, book, and manage your entire trip with our intuitive mobile app. Offline maps and real-time updates included."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Network",
      description: "Explore 150+ countries with our worldwide network of partners, ensuring authentic experiences in every destination."
    }
  ]

  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Amazing Features for <span className="gradient-text">Every Traveler</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to plan the perfect trip, discover new destinations, 
            and create unforgettable travel memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                <div className="text-primary-600 dark:text-primary-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Adventure?
              </h3>
              <p className="text-primary-100 mb-6">
                Join thousands of travelers who trust us to create their dream vacations. 
                From planning to execution, we make every journey extraordinary.
              </p>
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                Plan Your Trip
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-primary-100">Happy Travelers</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-primary-100">Destinations</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-primary-100">Support</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-primary-100">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
