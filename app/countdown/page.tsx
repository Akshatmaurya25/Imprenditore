"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { CountdownTimer } from "@/components/countdown-timer";

export default function CountdownPage() {
  // Event date - May 28, 2025 at 11:00 AM
  const eventDate = new Date(2025, 4, 28, 11, 0, 0).getTime();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-green-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background leaves with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/leaves-background.png"
          alt="Green Leaves Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/70 to-green-900/70 backdrop-blur-sm"></div>
      </div>

      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative z-10"
      >
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 relative mb-4">
            <Image
              src="/imprenditore-logo-white.svg"
              alt="Imprenditore 4.0 Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Countdown heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-lg md:text-xl text-green-200 font-light tracking-wider uppercase">
          Imprenditore begins in
        </h2>
      </motion.div>

      {/* Large countdown timer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 scale-150 md:scale-175 lg:scale-200"
      >
        <CountdownTimer targetDate={eventDate} white={true}/>
      </motion.div>

      {/* Event date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 text-center relative z-10"
      >
        <p className="text-white text-xl md:text-2xl font-bold">
          MAY 28, 2025 | 11:00 AM
        </p>
        <p className="text-green-200 mt-2">RGPV Campus, Bhopal</p>
      </motion.div>
    </div>
  );
}
