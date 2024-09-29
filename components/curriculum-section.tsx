'use client'

import React, { useState } from 'react'
import { ChevronDown, Lock, Video, Users, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

// Updated custom SVG icons for modules 1, 2, and 3
const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const ToolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ecc94b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const KeyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48bb78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
);

// Add two more icon components
const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ed64a6">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9f7aea">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

// Add a new icon for week 2
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f6ad55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const initialModules = [
  {
    week: 0,
    title: "Introduction to Generative AI",
    icon: <BrainIcon />,
    type: "FREE PREVIEW",
    lessons: [
      { type: "live", count: 1 },
      { type: "video", count: 3 
        
      } // Updated count for new lessons
    ],
    expanded: true,
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
    icon: <ToolsIcon />,
    type: "DIVE STRAIGHT IN THE DEEP END",
    lessons: [
      { type: "assignment", count: 2 } // Updated count for new lessons
    ],
    expanded: false,
    subLessons: [
      { title: "Overview of No-Code AI Platforms" },
      { title: "Introduction to platforms like Bubble, Appy Pie, Wix with AI tools, and Zapier" },
      { title: "Use cases of AI integrations (Chatbots, content generators, AI-powered customer service)" },
    
    ]
  },
  {
    week: 2,
    title: "Overview of AI tools we are going to use",
    icon: <CodeIcon />, // Use the new CodeIcon here
    type: "DIVE STRAIGHT IN THE DEEP END",
    lessons: [
      { type: "assignment", count: 2 }
    ],
    expanded: false,
    subLessons: [
      { title: "Introduction to v0." },
      { title: "Introduction to Cursor and installation of cursor" },
      { title: "Introduction to Supabase" },
      { title: "Introduction to Clerk" }
    ]
  },
  {
    week: 3,
    title: "Obtaining API keys from LLM's",
    icon: <KeyIcon />,
    type: "PROMPTS, PARAMETERS, SCRIPTS & MORE",
    lessons: [
      { type: "video", count: 2 }, // Updated count for new lessons
      { type: "assignment", count: 1 }
    ],
    expanded: false,
    subLessons: [
      { title: "Overview of LLM's" },
      { title: "Introduction to Gemini API" },
      { title: "Introduction to Groq's API" }
    ]
  },
  {
    week: 4,
    title: "Advanced AI Integration",
    icon: <RocketIcon />,
    type: "TAKING IT TO THE NEXT LEVEL",
    lessons: [
      { type: "video", count: 4 },
      { type: "assignment", count: 2 }
    ],
    expanded: false,
    subLessons: [
      { title: "Integrating Multiple AI Services" },
      { title: "Creating Complex AI Workflows" },
      { title: "Handling API Responses and Errors" },
      { title: "Optimizing AI Performance in Web Apps" },
      { title: "Case Study: Building a Multi-functional AI Assistant" }
    ]
  },
  {
    week: 5,
    title: "AI Ethics and Best Practices",
    icon: <GearIcon />,
    type: "RESPONSIBLE AI DEVELOPMENT",
    lessons: [
      { type: "video", count: 3 },
      { type: "live", count: 1 },
      { type: "assignment", count: 1 }
    ],
    expanded: false,
    subLessons: [
      { title: "Ethical Considerations in AI Development" },
      { title: "Bias and Fairness in AI Systems" },
      { title: "Privacy and Data Protection" },
      { title: "Transparency and Explainability" },
      { title: "Best Practices for Responsible AI Implementation" }
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
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          What you will {' '}
          <TypeAnimation
            sequence={[
              'learn',
              1000,
              'create',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="text-blue-600"
          />
          <span className="text-blue-600">?</span>
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            The <span className="text-blue-600">most beginner-friendly</span> curriculum in Generative AI.
          </p>
          <div className="relative inline-block">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 left-0 h-3 bg-yellow-300 z-0"
            ></motion.div>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900 relative z-10">
              Zero to Pro
            </p>
          </div>
        </motion.div>
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
    <div className="mb-6 md:mb-8 relative">
      <motion.div
        className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md border border-gray-100"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md mb-2 md:mb-0">
            {module.icon}
          </div>
          <div className="flex-grow mb-2 md:mb-0">
            <div className="text-xs text-green-600 font-semibold uppercase tracking-wide">{module.type}</div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800">{module.title}</h3>
          </div>
          <div className="flex flex-wrap items-center space-x-2 md:space-x-3">
            {module.lessons.map((lesson, index) => (
              <LessonBadge key={index} type={lesson.type} count={lesson.count} />
            ))}
            <motion.button 
              onClick={toggleModule}
              className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-200 mt-2 md:mt-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={module.expanded ? "Collapse module" : "Expand module"}
            >
              <motion.div
                animate={{ rotate: module.expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-blue-600" />
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
              <div className="ml-0 md:ml-16 mt-4 space-y-3">
                {module.subLessons.map((subLesson, index) => (
                  <SubLessonItem key={index} title={subLesson.title} />
                ))}
              </div>
              <motion.button
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full font-semibold text-sm shadow-md w-full md:w-auto"
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

function LessonBadge({ type, count }: { type: string; count: number }) {
  const bgColor = type === 'live' ? 'bg-red-100' : type === 'video' ? 'bg-blue-100' : 'bg-yellow-100'
  const textColor = type === 'live' ? 'text-red-600' : type === 'video' ? 'text-blue-600' : 'text-yellow-600'
  const Icon = type === 'live' ? Users : type === 'video' ? Video : FileText
  
  return (
    <div className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${bgColor} ${textColor} mb-1 md:mb-0`}>
      <Icon size={12} />
      <span>{count}</span>
    </div>
  )
}

function SubLessonItem({ title }: { title: string }) {
  return (
    <motion.div
      className="flex items-center space-x-3 text-xs md:text-sm"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Lock size={14} className="text-gray-400" />
      <span className="text-gray-700 font-medium">{title}</span>
    </motion.div>
  )
}