'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Lock } from 'lucide-react'

const initialModules = [
  {
    week: 0,
    title: "Essential Prerequisites",
    type: "FREE PREVIEW",
    lessons: [
      { type: "video", count: 2 }
    ],
    expanded: false,
    subLessons: []
  },
  {
    week: 1,
    title: "Proprietary Models & Diffusion",
    type: "DIVE STRAIGHT IN THE DEEP END",
    lessons: [
      { type: "live", count: 3 },
      { type: "assignment", count: 1 }
    ],
    expanded: true,
    subLessons: [
      { title: "History of GenAI, How to Research and Intro to Playground AI", type: "LIVE LESSON" },
      { title: "How Diffusion Models Work and Playground AI", type: "LIVE LESSON" },
      { title: "Practice Set - 1", type: "ASSIGNMENT" },
      { title: "Prompt Engineering for Various Outputs", type: "LIVE LESSON" }
    ]
  },
  {
    week: 2,
    title: "Intro to Stable Diffusion",
    type: "PROMPTS, PARAMETERS, SCRIPTS & MORE",
    lessons: [
      { type: "live", count: 1 },
      { type: "video", count: 13 },
      { type: "assignment", count: 1 }
    ],
    expanded: true,
    subLessons: [
      { title: "History of GenAI, How to Research and Intro to Playground AI", type: "LIVE LESSON" },
      { title: "How Diffusion Models Work and Playground AI", type: "LIVE LESSON" },
      { title: "Practice Set - 1", type: "ASSIGNMENT" },
      { title: "Prompt Engineering for Various Outputs", type: "LIVE LESSON" }]
  },
  {
    week: 3,
    title: "Advanced Stable Diffusion",
    type: "IMG2IMG, EXTENSION & INPAINTING",
    lessons: [
      { type: "live", count: 2 },
      { type: "video", count: 3 },
      { type: "assignment", count: 1 }
    ],
    expanded: false,
    subLessons: []
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
        <TimelineItem key={index} module={module} toggleModule={() => toggleModule(index)} />
      ))}
    </div>
  )
}

function TimelineItem({ module, toggleModule }: { module: typeof initialModules[number]; toggleModule: () => void }) {
  return (
    <div className="mb-8 relative">
      <div className="flex items-center mb-2">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
          {`W${module.week}`}
        </div>
        <div className="flex-grow">
          <div className="text-xs text-green-600 font-semibold">{module.type}</div>
          <h3 className="text-lg font-semibold">{module.title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          {module.lessons.map((lesson: { type: string; count: number }, index: number) => (
            <LessonBadge key={index} type={lesson.type} count={lesson.count} />
          ))}
          <button 
            onClick={toggleModule}
            className="p-1 rounded-full hover:bg-blue-100 transition-colors duration-200"
            aria-label={module.expanded ? "Collapse module" : "Expand module"}
          >
            {module.expanded ? <ChevronUp size={20} className="text-blue-600" /> : <ChevronDown size={20} className="text-blue-600" />}
          </button>
        </div>
      </div>
      {module.expanded && (
        <div className="ml-16 mt-4 space-y-2">
          {module.subLessons.map((subLesson: { title: string; type: string }, index: number) => (
            <SubLessonItem key={index} title={subLesson.title} type={subLesson.type} />
          ))}
        </div>
      )}
    </div>
  )
}

function LessonBadge({ type, count }: { type: string; count: number }) {
  const bgColor = type === 'live' ? 'bg-red-100' : type === 'video' ? 'bg-gray-200' : 'bg-yellow-100'
  const textColor = type === 'live' ? 'text-red-600' : type === 'video' ? 'text-gray-600' : 'text-yellow-600'
  
  return (
    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${bgColor} ${textColor}`}>
      {count} {type === 'live' ? 'LIVE SESSIONS' : type === 'video' ? 'VIDEO LESSONS' : 'ASSIGNMENTS'}
    </div>
  )
}

function SubLessonItem({ title, type }: { title: string; type: string }) {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <Lock size={16} className="text-gray-400" />
      <span className="text-gray-600">{title}</span>
      <span className="text-xs text-gray-400">{type}</span>
    </div>
  )
}