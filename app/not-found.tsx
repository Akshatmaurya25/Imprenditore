"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Quick links for navigation
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Event Gallery", href: "/event-gallery" },
    { name: "Countdown", href: "/countdown" },
    { name: "Register", href: "/register" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Decorative top section */}
      <div className="h-24 bg-gradient-to-r from-green-700 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/leaves-background.png"
            alt="Leaves Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48H1440V0C1380 16 1320 24 1260 24C1180 24 1100 0 1020 0C940 0 860 16 780 16C700 16 620 8 540 8C460 8 380 16 300 16C220 16 140 8 60 8C40 8 20 10.6667 0 16V48Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 graphic and plant illustration */}
          <motion.div variants={itemVariants} className="mb-8 relative">
            <div className="relative h-64 w-64 mx-auto">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-green-800 opacity-90">
                404
              </div>
            </div>
          </motion.div>

          {/* Error message */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-8 max-w-lg mx-auto"
          >
            We couldn't find the page you're looking for. It might have been
            moved, deleted, or never existed - just like some endangered species
            we're trying to save.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/">
              <Button className="bg-green-700 hover:bg-green-800 text-white gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="javascript:history.back()">
              <Button
                variant="outline"
                className="border-green-700 bg-green-50 text-green-700 hover:bg-green-50 gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </Link>
          </motion.div>

          {/* Growing plant animation */}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Imprenditore 4.0 | Lost but not forgotten
        </p>
      </footer>
    </div>
  );
}
