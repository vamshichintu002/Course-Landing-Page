'use client'

import { useState } from 'react'
import { ChevronDownIcon, Menu } from 'lucide-react'
import Image from 'next/image'
import { WhoIsThisFor } from './who-is-this-for'
import { TailoredTracks } from './tailored-tracks'  // Add this import
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import { CurriculumSectionComponent } from './curriculum-section'
import { TypeAnimation } from 'react-type-animation'  // Add this import
import Link from 'next/link'
import styles from './LandingPage.module.css'
import { motion, Variants } from 'framer-motion'
import TechStackCarousel from './TechStackCarousel'  // Add this import

const AnimatedAdoptionLifecycleChart = dynamic(
  () => import('./AnimatedAdoptionLifecycleChart'),
  {
    loading: () => <div className="w-full h-[300px] md:h-[400px] bg-gray-200 animate-pulse"></div>,
    ssr: false
  }
)

export function LandingPageComponent() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const questions = [
    "What is Generative AI and how is it used?",
    "What will I learn in this Generative AI course?",
    "Who is the ideal candidate for this course?",
    "What type of projects will I work on during the course?",
    "Will I receive a certificate upon completing the course?",
    "How does this course prepare me for the AI industry job market?",
    "How long does the course last?"
  ]

  // Add this function inside your LandingPageComponent, before the return statement
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Devtern Logo"
              width={160}
              height={100}
              className="mr-2"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-600">Overview</a>
            <a href="#" className="hover:text-blue-600">Mentors</a>
            <a href="#" className="hover:text-blue-600">Curriculum</a>
            <a href="#" className="hover:text-blue-600">FAQs</a>
            <a href="#" className="hover:text-blue-600">About Us</a>
            <a href="#" className="hover:text-blue-600">Contact Us</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Enroll Now
            </button>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 md:hidden"
          >
            <ul className="space-y-2">
              <li><a href="#" className="block py-2 hover:text-blue-600">Overview</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Mentors</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Curriculum</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">FAQs</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Contact Us</a></li>
              <li>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                  Enroll Now
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </header>

      <main>
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 py-20 md:py-32"
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              GenAi-Powered{' '}
              <span className="text-blue-600">
                <TypeAnimation
                  sequence={[
                    'Full Stack Web Development',
                    1000,
                    'AI-Driven Web Apps',
                    1000,
                    'Next-Gen Web Apps',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                />
              </span>
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-mono text-sm md:text-lg mb-8 space-y-2"
            >
              <p>{'>'} Are you dreaming of creating your own web applications but don&apos;t know how to code?</p>
              <p>{'>'} No experience in frontend or backend development?</p>
              <p>{'>'} Feeling stuck on how to turn ideas into real-world projects?</p>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl font-mono mb-8 text-blue-600"
            >
              &gt; Next Cohort Starts 4th October
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4 mr-4">
              Enroll Now
            </button>
              <button className="bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-gray-800 transition duration-300">
                Join Free Masterclass
              </button>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mt-4 text-sm md:text-base text-gray-600 font-mono"
            >
              Webinar Date - 29th September, Sunday
            </motion.p>
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-blue-200 transform -skew-y-6"></div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"
          ></motion.div>
        </motion.section>

        <section className="bg-gray-100 py-8 md:py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12"
            >
              Be a <span className="text-blue-600">pioneer</span>. Build the <span className="text-blue-600">future</span>.
            </motion.h2>
            <Suspense fallback={<div className="w-full h-[250px] md:h-[400px] bg-gray-200 animate-pulse"></div>}>
              <AnimatedAdoptionLifecycleChart />
            </Suspense>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-12">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "The Next Tech Revolution",
                  description: "Generative AI is reshaping industries from healthcare to entertainment."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: "High Demand, High Reward",
                  description: "Demand for skilled AI professionals is skyrocketing."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Future-Proof Your Career",
                  description: "Gain skills essential for the technologically advanced future."
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="text-blue-600 text-2xl md:text-3xl mb-3 md:mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-600">{card.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <WhoIsThisFor />
          </div>
        </section>

        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <TailoredTracks />
          </div>
        </section>

   

       

        <CurriculumSectionComponent />

        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="bg-white py-12 md:py-24"
        >
          <div className="container mx-auto px-4 max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-16 h-16 md:w-32 md:h-32 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
            <div className="text-center mb-8 md:mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-100 text-blue-600 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold inline-block"
              >
                FAQs
              </motion.span>
            </div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-gray-900"
            >
              You'll have questions!
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-12"
            >
              Everything you need to know about the course and payments.
            </motion.p>
            <div className="space-y-3 md:space-y-4">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                >
                  <motion.button
                    className="w-full text-left p-4 md:p-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => toggleQuestion(index)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-800 pr-4">{question}</span>
                    <motion.div
                      animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDownIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                    </motion.div>
                  </motion.button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeQuestion === index ? 'auto' : 0,
                      opacity: activeQuestion === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0 border-t border-gray-200">
                      <p className="text-sm md:text-base text-gray-600">This is a placeholder answer for the question. Replace this with the actual answer.</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Devtern Logo"
              width={140}
              height={87}
              className="mb-6"
            />
            <p className="text-sm md:text-base text-gray-600 mb-6 text-center max-w-md">
              Empowering the next generation of AI-driven developers with cutting-edge skills and knowledge.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
              Enroll Now
            </button>
            <p className="mt-8 text-sm text-gray-600">&copy; 2023 Devtern. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}