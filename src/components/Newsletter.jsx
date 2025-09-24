import React, { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    // Frontend-only: simulate success without a backend
    setStatus('success')
    setMessage('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                <Mail className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with <span className="gradient-text">Travel Deals</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get exclusive travel deals, destination guides, and insider tips delivered straight to your inbox. 
                Join thousands of travelers who never miss an adventure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    disabled={status === 'success'}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>

              {/* Status Message */}
              {message && (
                <div className={`flex items-center justify-center space-x-2 text-sm ${
                  status === 'success' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <span>{message}</span>
                </div>
              )}
            </form>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  Weekly
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Travel deals and destination guides
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  Exclusive
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Early access to special offers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  No Spam
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Unsubscribe anytime
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
              We respect your privacy. Unsubscribe at any time. 
              <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline ml-1">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
