"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, X, ZoomIn } from "lucide-react";

export default function EventGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images with different aspect ratios and sizes
  const galleryImages = [
    {
      src: "/gallery/sustainability-conference.png",
      alt: "Sustainability Conference Panel",
      className: "col-span-2 row-span-2", // Large square
    },
    {
      src: "/gallery/eco-innovation.png",
      alt: "Eco Innovation Workshop",
      className: "col-span-1 row-span-1", // Small square
    },
    {
      src: "/gallery/green-tech-demo.png",
      alt: "Green Technology Demonstration",
      className: "col-span-1 row-span-1", // Small square
    },
    {
      src: "/gallery/keynote-speaker.png",
      alt: "Keynote Speaker on Sustainability",
      className: "col-span-1 row-span-2", // Vertical rectangle
    },
    {
      src: "/gallery/networking-event.png",
      alt: "Networking Event",
      className: "col-span-2 row-span-1", // Horizontal rectangle
    },
    {
      src: "/gallery/award-ceremony.png",
      alt: "Sustainability Award Ceremony",
      className: "col-span-1 row-span-1", // Small square
    },
    {
      src: "/gallery/workshop-session.png",
      alt: "Interactive Workshop Session",
      className: "col-span-2 row-span-1", // Horizontal rectangle
    },
    {
      src: "/gallery/exhibition-booth.png",
      alt: "Eco-friendly Exhibition Booth",
      className: "col-span-1 row-span-1", // Small square
    },
    {
      src: "/gallery/panel-discussion.png",
      alt: "Panel Discussion on Green Innovation",
      className: "col-span-1 row-span-2", // Vertical rectangle
    },
    {
      src: "/gallery/audience-engagement.png",
      alt: "Audience Engagement Session",
      className: "col-span-2 row-span-2", // Large square
    },
    {
      src: "/gallery/startup-pitch.png",
      alt: "Green Startup Pitch Competition",
      className: "col-span-1 row-span-1", // Small square
    },
    {
      src: "/gallery/networking-lunch.png",
      alt: "Sustainable Networking Lunch",
      className: "col-span-1 row-span-1", // Small square
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with background */}
      <div className="relative h-64 bg-gradient-to-r from-green-700 to-green-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/leaves-background.png"
            alt="Leaves Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <div className="w-20 h-20 relative mb-4">
            <Image
              src="/imprenditore-logo-white.svg"
              alt="Imprenditore 4.0 Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Event Gallery
          </h1>
          <p className="mt-2 text-green-100 text-center max-w-2xl">
            Capturing the moments of innovation, sustainability, and creativity
            at Imprenditore 4.0
          </p>
        </div>
        <div className="absolute top-6 left-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(100px,auto)]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl ${image.className} group cursor-pointer`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 text-white">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-1 rounded-full">
                  <ZoomIn className="h-4 w-4 text-white" />
                </div>
              </div>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged gallery image"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-100">
            © {new Date().getFullYear()} Imprenditore 4.0 | All images from
            previous events
          </p>
        </div>
      </div>
    </div>
  );
}
