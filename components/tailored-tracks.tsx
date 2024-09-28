'use client'

import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function TailoredTracks() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 md:p-12 font-sans max-w-6xl mx-auto text-gray-800 rounded-xl shadow-lg relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-64 h-64 text-blue-100 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-blue-100 transform translate-x-1/3 translate-y-1/3" fill="currentColor" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-10 relative z-10"
      >
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
        >
          COURSE HIGHLIGHTS
        </motion.span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          What You Will <span className="text-blue-600">Achieve</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Unlock your potential in web development with AI-powered tools
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 border border-blue-100 hover:border-blue-300 transition-colors duration-300 relative z-10"
      >
        <div className="flex flex-col items-center space-y-6">
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 rounded-2xl flex items-center justify-center overflow-hidden">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">For <span className="text-blue-600">Aspiring Developers</span></h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
              Your journey to becoming a proficient web developer starts here. Learn to build powerful web applications using AI-powered platforms, without extensive coding knowledge.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'Build web apps with AI-powered platforms',
                'Develop full-stack applications effortlessly',
                'Create an impressive project portfolio'
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="text-green-500 mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}