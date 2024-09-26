'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Lock, Video, Users, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const initialModules = [
  {
    week: 0,
    title: "Introduction to Generative AI",
    type: "FREE PREVIEW",
    lessons: [
      { type: "live", count: 1 },
      { type: "video", count: 3 
        
      } // Updated count for new lessons
    ],
    expanded: false,
    subLessons: [
      { title: "What is Generative AI?" },
      { title: "Definitions and Examples" },
      { title: "Overview of AI's role in content creation (text, image, audio, video)" },
      { title: "Key technologies (Neural Networks, GPT, GANs)" },
      { title: "Applications of Generative AI" },
      { title: "Industry use-cases: marketing, entertainment, software development, art, etc." },
      { title: "How businesses are leveraging Generative AI" }
    ]
  },
  {
    week: 1,
    title: "AI Tools and Platforms for Non-Coders",
    type: "DIVE STRAIGHT IN THE DEEP END",
    lessons: [
      { type: "assignment", count: 2 } // Updated count for new lessons
    ],
    expanded: true,
    subLessons: [
      { title: "Overview of No-Code AI Platforms" },
      { title: "Introduction to platforms like Bubble, Appy Pie, Wix with AI tools, and Zapier" },
      { title: "Use cases of AI integrations (Chatbots, content generators, AI-powered customer service)" },
      { title: "Overview of AI tools we are going to use" },
      { title: "Introduction to v0." },
      { title: "Introduction to Cursor and installation of cursor" },
      { title: "Introduction to Supabase" },
      { title: "Introduction to Clerk" }
    ]
  },
  {
    week: 2,
    title: "Obtaining API keys from LLM's",
    type: "PROMPTS, PARAMETERS, SCRIPTS & MORE",
    lessons: [
      { type: "video", count: 2 }, // Updated count for new lessons
      { type: "assignment", count: 1 }
    ],
    expanded: true,
    subLessons: [
      { title: "Overview of LLM's" },
      { title: "Introduction to Gemini API" },
      { title: "Introduction to Groq's API" }
    ]
  },
  {
    week: 3,
    title: "Practical Project",
    type: "IMG2IMG, EXTENSION & INPAINTING",
    lessons: [
      { type: "video", count: 3 }, // Updated count for new lessons
      { type: "assignment", count: 1 }
    ],
    expanded: false,
    subLessons: [
      { title: "Build an AI-Powered Web App" },
      { title: "Step-by-step guide to creating a simple AI-powered web app (e.g., an AI writing assistant, chatbot, or image generator)" },
      { title: "Focus on using a no-code platform and integrating APIs (e.g., GPT-4) for added functionality" }
    ]
  },
  {
    week: 4,
    title: "Practical Project",
    type: "IMG2IMG, EXTENSION & INPAINTING",
    lessons: [
      { type: "video", count: 3 }, // Updated count for new lessons
      { type: "assignment", count: 1 }
    ],
    expanded: false,
    subLessons: [
      { title: "Build an AI-Powered Web App" },
      { title: "Step-by-step guide to creating a simple AI-powered web app (e.g., an AI writing assistant, chatbot, or image generator)" },
      { title: "Focus on using a no-code platform and integrating APIs (e.g., GPT-4) for added functionality" }
    ]
  }
]

export function CurriculumSectionComponent() {
  const [modules, setModules] = useState(initialModules)

  const toggleModule = (index: number) => {
    setModules(prevModules => 
      prevModules.map((module, i) => 
        i === index ? { ...module, expanded: !module.expanded } : module
      )
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center">
          What will you <span className="text-blue-600">learn?</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          The most beginner-friendly curriculum in Generative AI.<br />
          Zero to Pro in 6 months.
        </p>
        <Timeline modules={modules} toggleModule={toggleModule} />
      </div>
    </section>
  )
}

function Timeline({ modules, toggleModule }: { modules: typeof initialModules; toggleModule: (index: number) => void }) {
  return (
    <div className="relative">
      {modules.map((module, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TimelineItem module={module} toggleModule={() => toggleModule(index)} />
        </motion.div>
      ))}
    </div>
  )
}

function TimelineItem({ module, toggleModule }: { module: typeof initialModules[number]; toggleModule: () => void }) {
  return (
    <div className="mb-8 relative">
      <motion.div
        className="p-6 bg-white rounded-2xl shadow-md border border-gray-100"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md">
            {`W${module.week}`}
          </div>
          <div className="flex-grow">
            <div className="text-xs text-green-600 font-semibold uppercase tracking-wide">{module.type}</div>
            <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
          </div>
          <div className="flex items-center space-x-3">
            {module.lessons.map((lesson, index) => (
              <LessonBadge key={index} type={lesson.type} count={lesson.count} />
            ))}
            <motion.button 
              onClick={toggleModule}
              className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={module.expanded ? "Collapse module" : "Expand module"}
            >
              <motion.div
                animate={{ rotate: module.expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} className="text-blue-600" />
              </motion.div>
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {module.expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="ml-16 mt-4 space-y-3">
                {module.subLessons.map((subLesson, index) => (
                  <SubLessonItem key={index} title={subLesson.title} />
                ))}
              </div>
              <motion.button
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full font-semibold text-sm shadow-md"
                whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
                whileTap={{ scale: 0.95 }}
              >
                Watch for free
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

interface SubLesson {
    title: string; // Removed 'type'
}

function LessonBadge({ type, count }: { type: string; count: number }) {
  const bgColor = type === 'live' ? 'bg-red-100' : type === 'video' ? 'bg-blue-100' : 'bg-yellow-100'
  const textColor = type === 'live' ? 'text-red-600' : type === 'video' ? 'text-blue-600' : 'text-yellow-600'
  const Icon = type === 'live' ? Users : type === 'video' ? Video : FileText
  
  return (
    <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${bgColor} ${textColor}`}>
      <Icon size={14} />
      <span>{count}</span>
    </div>
  )
}

function SubLessonItem({ title }: { title: string }) {
  return (
    <motion.div
      className="flex items-center space-x-3 text-sm"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Lock size={16} className="text-gray-400" />
      <span className="text-gray-700 font-medium">{title}</span>
    </motion.div>
  )
}