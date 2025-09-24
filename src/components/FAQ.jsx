import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const faqs = [
    {
      question: "How far in advance should I book my trip?",
      answer: "We recommend booking 2-3 months in advance for domestic trips and 3-6 months for international travel to secure the best prices and availability. However, we can also arrange last-minute trips with our emergency travel services."
    },
    {
      question: "What kind of support do you offer during my trip?",
      answer: "We provide 24/7 support throughout your entire journey. Our team is available via phone, email, and our mobile app to assist with any issues, changes, or emergencies that may arise during your travels."
    },
    {
      question: "Can I customize my travel itinerary?",
      answer: "Absolutely! All our packages are fully customizable. You can modify accommodations, activities, transportation, and dining options to match your preferences, interests, and budget. Our travel consultants work with you to create the perfect itinerary."
    },
    {
      question: "What travel insurance options do you provide?",
      answer: "We offer comprehensive travel insurance covering trip cancellation, medical emergencies, lost luggage, and travel delays. Insurance is included in our Adventurer and Luxury packages, and can be added to any Explorer package for additional protection."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or modify your booking based on our flexible cancellation policy. Most bookings can be cancelled up to 24-48 hours before departure with minimal fees. We also offer travel credits for future trips."
    },
    {
      question: "Do you offer group travel packages?",
      answer: "Yes! We specialize in group travel for families, friends, corporate groups, and special occasions. We offer group discounts, dedicated group coordinators, and customized itineraries for groups of 6 or more people."
    },
    {
      question: "What happens if there's an emergency during my trip?",
      answer: "Our 24/7 emergency support team is always available to assist you. We have local contacts in all our destinations and can help with medical emergencies, travel disruptions, lost documents, or any other urgent situations."
    },
    {
      question: "Do you provide travel documents and visa assistance?",
      answer: "Yes! We provide detailed travel document checklists and can assist with visa applications for many destinations. Our team stays updated on entry requirements and can guide you through the documentation process."
    }
  ]

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section id="faq" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            we receive from our customers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems[index] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems[index] && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Plan Your Trip?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Have more questions or ready to start planning your dream vacation? 
              Our travel experts are here to help you create the perfect journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Contact Travel Expert
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
