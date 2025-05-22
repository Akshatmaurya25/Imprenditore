"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (section: string) => void
}

export function MobileNav({ isOpen, onClose, onNavigate }: MobileNavProps) {
  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/imprenditore-logo.png"
                  alt="Imprenditore 4.0 Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="font-bold text-xl text-green-800">Menu</span>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <button
                onClick={() => onNavigate("speakers")}
                className="py-2 text-left text-lg font-medium text-green-800 hover:text-green-600 border-b border-gray-100"
              >
                Speakers
              </button>
              <button
                onClick={() => onNavigate("timeline")}
                className="py-2 text-left text-lg font-medium text-green-800 hover:text-green-600 border-b border-gray-100"
              >
                Schedule
              </button>
              <button
                onClick={() => onNavigate("features")}
                className="py-2 text-left text-lg font-medium text-green-800 hover:text-green-600 border-b border-gray-100"
              >
                Features
              </button>
              <button
                onClick={() => onNavigate("faqs")}
                className="py-2 text-left text-lg font-medium text-green-800 hover:text-green-600 border-b border-gray-100"
              >
                FAQs
              </button>

              <div className="mt-4">
                <Link href="/register">
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">Register Now</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
