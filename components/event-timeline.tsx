"use client"

import { motion } from "framer-motion"

interface TimelineEvent {
  time: string
  title: string
  description: string
  date: string
}

interface EventTimelineProps {
  events: TimelineEvent[]
}

export function EventTimeline({ events }: EventTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600 ml-6 md:ml-0 md:left-1/2 md:-translate-x-1/2"></div>

      {/* Timeline Items */}
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative mb-12 md:mb-16 pl-16 md:pl-0 ${
            index % 2 === 0 ? "md:pr-16 md:text-right md:ml-0 md:mr-auto" : "md:pl-16 md:ml-auto md:mr-0"
          } md:w-1/2`}
        >
          {/* Timeline Dot */}
          <div
            className={`absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold z-10 transform -translate-y-1/2 md:top-1/2 ${
              index % 2 === 0 ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
            }`}
          >
            {index + 1}
          </div>

          {/* Timeline Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <div className="text-green-600 font-bold mb-1">{event.time}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
