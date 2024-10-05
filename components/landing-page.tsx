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
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import PaymentOptionsPopup from './PaymentOptionsPopup'

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
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false)

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPaymentPopup = () => setIsPaymentPopupOpen(true)
  const closePaymentPopup = () => setIsPaymentPopupOpen(false)

  const questions = [
    {
      question: "What is Generative AI and how is it used?",
      answer: "Generative AI creates content like code, text, or images using machine learning. In this course, you'll use AI tools to build full stack web apps without coding."
    },
    {
      question: "What will I learn in this Generative AI course?",
      answer: "You'll learn to: Build web apps with AI, design both frontend and backend, create a portfolio and start your own SaaS business."
    },
    {
      question: "Who is the ideal candidate for this course?",
      answer: "This course is ideal for non-coders, tech enthusiasts, aspiring entrepreneurs, and professionals looking to develop web apps using AI."
    },
    {
      question: "What type of projects will I work on during the course?",
      answer: "You'll build full stack web apps, create a portfolio, and develop SaaS products to solve real-world problems."
    },
    {
      question: "Will I receive a certificate upon completing the course?",
      answer: "Yes, you'll get a StudentNest certificate of completion to add to your portfolio."
    },
    {
      question: "How does this course prepare me for the AI industry job market?",
      answer: "You'll gain real-world experience in AI-powered development, creating projects that showcase your skills to employers and clients."
    },
    {
      question: "How long does the course last?",
      answer: "The duration of the course is not specified. Please contact the course provider for more information."
    }
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

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white shadow-md sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.button 
              onClick={() => window.location.reload()} 
              className="flex items-center focus:outline-none"
              // Removed motion effects
            >
              <Image
                src="/logo.png"
                alt="studentnest Logo"
                width={120}
                height={75}
                className="mr-2"
              />
            </motion.button>
            <nav className="hidden md:flex space-x-6">
              {['overview', 'curriculum', 'FAQs', 'Contact Us'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => item === 'Contact Us' 
                    ? window.open("https://api.whatsapp.com/send/?phone=917396149081&text&type=phone_number&app_absent=0", "_blank")
                    : scrollToSection(item.toLowerCase())
                  }
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item === 'FAQs' ? item : item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
              <motion.button 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={openPaymentPopup}
              >
                Enroll Now
              </motion.button>
            </nav>
            <motion.button 
              className="md:hidden"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu />
            </motion.button>
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
                {['overview', 'curriculum', 'FAQs', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => item === 'Contact Us'
                        ? window.open("https://api.whatsapp.com/send/?phone=917396149081&text&type=phone_number&app_absent=0", "_blank")
                        : scrollToSection(item.toLowerCase())
                      } 
                      className="block py-2 hover:text-blue-600 w-full text-left"
                    >
                      {item === 'FAQs' ? item : item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </li>
                ))}
                <li>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                    Enroll Now
                  </button>
                </li>
              </ul>
            </motion.nav>
          )}
        </div>
      </motion.header>

      <main className="flex-grow">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 py-20 md:py-32"
        >
          {/* Remove this motion.div containing the Image component */}
          {/* <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image
              src="/background-pattern.svg"
              alt="Background Pattern"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
          </motion.div> */}
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
              &gt; Next Webinar Starts 6th November
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4"
            >
              <motion.button 
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={openPaymentPopup}
              >
                Enroll Now
              </motion.button>
              <motion.button 
                className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-600"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Join Free Masterclass
              </motion.button>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mt-4 text-sm md:text-base text-gray-600 font-mono"
            >
              Webinar Date -6th November, Sunday
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
                  <div className="text-blue-600 text-2xl md:text-2xl mb-3 md:mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-600">{card.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          id="overview"
          className="py-10 md:py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <WhoIsThisFor />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          id="curriculum"
          className="py-10 md:py-20"
        >
          <div className="container mx-auto px-4">
            <CurriculumSectionComponent />
          </div>
        </motion.section>

        <TailoredTracks />

        <motion.section
          id="faqs"
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
              {questions.map((item, index) => (
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
                    <span className="text-base md:text-lg font-semibold text-gray-800 pr-4">{item.question}</span>
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
                      <p className="text-sm md:text-base text-gray-600">{item.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-24 relative overflow-hidden"
      >
        <Card className="bg-blue-600 text-white overflow-hidden relative max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
              <div className="space-y-4 md:space-y-6 max-w-lg w-full md:w-auto">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-center md:text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Be a part of a <span className="text-black">new era</span> in programming.
                </motion.h2>
                <motion.p 
                  className="text-xl md:text-2xl font-semibold text-center md:text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span className="font-mono text-base md:text-lg mb-4 md:mb-8 space-y-2 block">
                  Build Smarter,<span className="font-bold text-black"> Not Harder –</span> Full Stack Development with AI
                  </span>
                </motion.p>
                <ul className="space-y-2 mb-6 md:mb-0">
                  {[
                    "Master Generative AI",
                    "Build cutting-edge applications",
                    "Transform your career",
                    "Join a community of innovators"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center space-x-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    >
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-black flex-shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="flex justify-center md:justify-start"
                >
                  <button className="bg-white text-blue-600 px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg" onClick={openPaymentPopup}>
                    Enroll Now
                  </button>
                </motion.div>
              </div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 mt-8 md:mt-0">
                <motion.div 
                  className="absolute inset-0"
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    {[
                      { cx: 100, cy: 20, icon: "🚀" },
                      { cx: 180, cy: 100, icon: "💡" },
                      { cx: 140, cy: 160, icon: "🌟" },
                      { cx: 60, cy: 160, icon: "🔧" },
                      { cx: 20, cy: 100, icon: "🧠" },
                    ].map((item, index) => (
                      <motion.g 
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                      >
                        <circle cx={item.cx} cy={item.cy} r="15" fill="white" />
                        <text x={item.cx} y={item.cy} textAnchor="middle" dominantBaseline="central" fontSize="15">
                          {item.icon}
                        </text>
                      </motion.g>
                    ))}
                  </svg>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <motion.button 
                onClick={() => window.location.reload()} 
                className="focus:outline-none mr-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/logo-white.png"
                  alt="StudentNest Logo"
                  width={80}
                  height={50}
                />
              </motion.button>
              <p className="text-sm text-gray-400">
                Empowering the next generation of AI-driven developers
              </p>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=917396149081&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Us 
              </motion.button>
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-400">&copy; 2024 StudentNest. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <PaymentOptionsPopup isOpen={isPaymentPopupOpen} onClose={closePaymentPopup} />
    </div>
  )
}
