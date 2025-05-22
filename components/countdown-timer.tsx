"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: number,
  white?: boolean
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate, white }: CountdownTimerProps ) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Calculate initial time left
    const calculateTimeLeft = () => {
      const difference = targetDate - Date.now()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Set up interval
    const timer = setInterval(calculateTimeLeft, 1000)

    // Clean up interval
    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white w-24 h-24 md:w-32 md:h-32 rounded-xl shadow-lg flex items-center justify-center border-2 border-green-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white opacity-[70%]"></div>
            <div className="text-center relative z-10">
              <div className="text-3xl md:text-5xl font-bold text-green-800">
                {unit.value.toString().padStart(2, "0")}
              </div>
            </div>
          </div>
          <div className={`mt-2 ${white? "text-white" : 'text-green-800'} font-medium`}>{unit.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
