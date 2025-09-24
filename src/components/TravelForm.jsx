// import React, { useMemo, useState } from 'react'

// const randomPastel = () => {
//   const hues = [200, 260, 320, 20, 140]
//   const h = hues[Math.floor(Math.random() * hues.length)]
//   return `hsla(${h}, 80%, 92%, 1)`
// }

// const TravelForm = () => {
//   const [status, setStatus] = useState({ type: 'idle', message: '' })
//   const bg = useMemo(() => randomPastel(), [])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const form = new FormData(e.currentTarget)
//     const payload = Object.fromEntries(form.entries())
//     setStatus({ type: 'loading', message: 'Submitting...' })
//     // Frontend-only: simulate a short delay and success
//     setTimeout(() => {
//       setStatus({ type: 'success', message: 'Booking submitted successfully!' })
//       e.currentTarget.reset()
//     }, 600)
//   }

//   return (
//     <section className="section-padding" style={{ background: bg }}>
//       <div className="container-max">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2">Plan Your Journey</h2>
//           <p className="text-gray-700">Tell us about your trip and we'll handle the rest.</p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label htmlFor="tf-name" className="text-sm font-medium">Name</label>
//               <input id="tf-name" name="name" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder="Your full name" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="tf-gender" className="text-sm font-medium">Gender</label>
//               <select id="tf-gender" name="gender" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
//                 <option value="">Select</option>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Other</option>
//                 <option>Prefer not to say</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="tf-contact" className="text-sm font-medium">Contact Details (Email)</label>
//               <input id="tf-contact" type="email" name="contact" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder="you@example.com" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="tf-phone" className="text-sm font-medium">Phone Number</label>
//               <input id="tf-phone" type="tel" name="phone" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder="+1 555 000 1234" />
//             </div>

//             <div className="md:col-span-2 space-y-2">
//               <label htmlFor="tf-address" className="text-sm font-medium">Address</label>
//               <input id="tf-address" name="address" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder="Street, City, Country" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="tf-trip" className="text-sm font-medium">Which Trip</label>
//               <select id="tf-trip" name="trip" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
//                 <option value="">Select a trip</option>
//                 <option>Beach Escape</option>
//                 <option>Mountain Trek</option>
//                 <option>City Explorer</option>
//                 <option>Safari Adventure</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="tf-direction" className="text-sm font-medium">Trip Direction</label>
//               <select id="tf-direction" name="direction" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
//                 <option value="">Select</option>
//                 <option>One-way</option>
//                 <option>Round trip (Up & Down)</option>
//               </select>
//             </div>
//           </div>

//           <div className="mt-6 flex items-center justify-between">
//             <div className={`text-sm ${status.type === 'error' ? 'text-red-600 dark:text-red-400' : status.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
//               {status.message}
//             </div>
//             <button type="submit" disabled={status.type === 'loading'} className="btn-primary transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-60">
//               {status.type === 'loading' ? 'Submitting...' : 'Book Trip'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default TravelForm


import React, { useMemo, useState } from 'react'

const randomPastel = () => {
  const hues = [200, 260, 320, 20, 140]
  const h = hues[Math.floor(Math.random() * hues.length)]
  return `hsla(${h}, 80%, 92%, 1)`
}

const TravelForm = () => {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const bg = useMemo(() => randomPastel(), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget // ✅ keep reference

    setStatus({ type: 'loading', message: 'Submitting...' })

    setTimeout(() => {
      setStatus({ type: 'success', message: 'Booking submitted successfully!' })
      form.reset() // ✅ safe now

      setTimeout(() => {
        setStatus({ type: 'idle', message: '' })
      }, 2000)
    }, 600)
  }

  return (
    <section className="section-padding" style={{ background: bg }}>
      <div className="container-max">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Plan Your Journey</h2>
          <p className="text-gray-700">Tell us about your trip and we'll handle the rest.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="tf-name" className="text-sm font-medium">Name</label>
              <input
                id="tf-name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="tf-gender" className="text-sm font-medium">Gender</label>
              <select
                id="tf-gender"
                name="gender"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="tf-contact" className="text-sm font-medium">Contact Details (Email)</label>
              <input
                id="tf-contact"
                type="email"
                name="contact"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="tf-phone" className="text-sm font-medium">Phone Number</label>
              <input
                id="tf-phone"
                type="tel"
                name="phone"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="+1 555 000 1234"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label htmlFor="tf-address" className="text-sm font-medium">Address</label>
              <input
                id="tf-address"
                name="address"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Street, City, Country"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="tf-trip" className="text-sm font-medium">Which Trip</label>
              <select
                id="tf-trip"
                name="trip"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              >
                <option value="">Select a trip</option>
                <option>Beach Escape</option>
                <option>Mountain Trek</option>
                <option>City Explorer</option>
                <option>Safari Adventure</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="tf-direction" className="text-sm font-medium">Trip Direction</label>
              <select
                id="tf-direction"
                name="direction"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              >
                <option value="">Select</option>
                <option>One-way</option>
                <option>Round trip (Up & Down)</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div
              className={`text-sm ${
                status.type === 'error'
                  ? 'text-red-600 dark:text-red-400'
                  : status.type === 'success'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {status.message}
            </div>
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="btn-primary transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-60"
            >
              {status.type === 'loading' ? 'Submitting...' : 'Book Trip'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default TravelForm
