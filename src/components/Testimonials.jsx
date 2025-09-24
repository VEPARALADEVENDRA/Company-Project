import React, { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const res = await fetch('/content.json')
        if (!res.ok) throw new Error('Failed to load content')
        const data = await res.json()
        if (isMounted) {
          const items = Array.isArray(data.testimonials) ? data.testimonials : []
          const normalized = items.map((t) => ({
            ...t,
            image: /^https?:\/\//.test(t.image) ? t.image : (t.image?.startsWith('/') ? t.image : `/${t.image || ''}`)
          }))
          setTestimonials(normalized)
          setLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to load testimonials')
          setLoading(false)
        }
      }
    }
    fetchData()
    return () => { isMounted = false }
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real travelers have to say 
            about their unforgettable experiences with Wanderlust Travel.
          </p>
        </div>

        {loading && (
          <div className="text-center text-gray-600 dark:text-gray-300">Loading testimonials...</div>
        )}
        {error && (
          <div className="text-center text-red-600 dark:text-red-400">{error}</div>
        )}

        {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200 dark:text-primary-800">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 transition-transform duration-200 hover:scale-105"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary-600 dark:text-primary-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                50,000+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Happy Travelers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                150+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Destinations
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
