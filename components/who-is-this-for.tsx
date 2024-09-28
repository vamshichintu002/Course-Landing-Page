'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function WhoIsThisFor() {
  return (
    <Card className="bg-gray-900 text-white overflow-hidden relative max-w-4xl mx-auto">
      <CardContent className="p-8">
        <div className="flex justify-between items-start">
          <div className="space-y-6 max-w-lg">
            <h2 className="text-4xl font-bold">
              Who is this <span className="text-blue-500">for?</span>
            </h2>
            <p className="text-gray-300">
              From complete programming noobs to experienced professionals. No prior coding experience required, but surely helpful.
            </p>
            <ul className="space-y-2">
              {[
                "Looking to upskill in GenAI",
                "Looking to change career paths into GenAI",
                "Looking to build your own GenAI Products",
                "Generally curious about this field"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-64 h-64">
            <div className="absolute inset-0">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.1)" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.1)" />
                {[
                  { cx: 100, cy: 20, icon: "🧠" },
                  { cx: 180, cy: 100, icon: "🐍" },
                  { cx: 140, cy: 160, icon: "🐱" },
                  { cx: 60, cy: 160, icon: "🅰️" },
                  { cx: 20, cy: 100, icon: "S" },
                ].map((item, index) => (
                  <g key={index}>
                    <circle cx={item.cx} cy={item.cy} r="20" fill="white" />
                    <text x={item.cx} y={item.cy} textAnchor="middle" dominantBaseline="central" fontSize="20">
                      {item.icon}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}