import React, { useState } from 'react'
import { Check, X } from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Explorer",
      description: "Perfect for budget-conscious travelers and weekend getaways",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Basic destination guides",
        "Standard accommodations",
        "Email support",
        "Basic trip planning",
        "Mobile app access"
      ],
      limitations: [
        "Limited premium experiences",
        "No personal travel consultant"
      ],
      cta: "Start Exploring",
      popular: false
    },
    {
      name: "Adventurer",
      description: "Ideal for frequent travelers seeking unique experiences",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "Premium destination guides",
        "Curated accommodations",
        "Priority support",
        "Advanced trip planning",
        "Exclusive experiences",
        "Travel insurance included",
        "Mobile app with offline maps",
        "Personal travel consultant"
      ],
      limitations: [],
      cta: "Start Adventure",
      popular: true
    },
    {
      name: "Luxury",
      description: "For discerning travelers who demand the finest experiences",
      monthlyPrice: 149,
      annualPrice: 1490,
      features: [
        "Luxury destination guides",
        "5-star accommodations",
        "24/7 concierge support",
        "Bespoke trip planning",
        "VIP experiences",
        "Comprehensive travel insurance",
        "Private transfers",
        "Dedicated travel manager",
        "Exclusive access to events",
        "White-glove service"
      ],
      limitations: [],
      cta: "Contact Concierge",
      popular: false
    }
  ]

  const formatPrice = (price) => {
    if (price === 0) return "Free"
    return `$${price}`
  }

  const getPrice = (plan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice
  }

  const getBillingPeriod = () => {
    return isAnnual ? "/year" : "/month"
  }

  return (
    <section id="pricing" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Select the perfect travel package for your journey. All plans include our core services 
            with transparent pricing and no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Per Trip
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual Pass
            </span>
            {isAnnual && (
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl'
                  : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-primary-100' : 'text-gray-600 dark:text-gray-300'}`}>
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {formatPrice(getPrice(plan))}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className={`text-lg ${plan.popular ? 'text-primary-100' : 'text-gray-600 dark:text-gray-300'}`}>
                      {getBillingPeriod()}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${
                      plan.popular ? 'text-green-300' : 'text-green-500'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <div key={limitationIndex} className="flex items-center">
                    <X className={`h-5 w-5 mr-3 flex-shrink-0 ${
                      plan.popular ? 'text-red-300' : 'text-red-500'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'}`}>
                      {limitation}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.popular
                    ? 'bg-white text-primary-600 hover:bg-gray-100 hover:shadow-md'
                    : 'btn-primary hover:shadow-md'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All plans include free consultation and best price guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              Free cancellation
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              No booking fees
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              24/7 support
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
