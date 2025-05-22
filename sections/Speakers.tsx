"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { SpeakerCard } from "@/components/speaker-card";
import React from "react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Amelia Chen",
      role: "Sustainability Expert & CEO",
      company: "GreenTech Innovations",
      image: "/speaker-1.png",
      topic: "The Future of Sustainable Entrepreneurship",
      description:
        "Dr. Chen will explore how sustainable practices are reshaping business models and creating new opportunities for entrepreneurs in the green economy. Learn about cutting-edge innovations and strategies for building environmentally responsible ventures.",
    },
    {
      name: "Marcus Johnson",
      role: "Chief Innovation Officer",
      company: "EcoSolutions Global",
      image: "/speaker-2.png",
      topic: "Innovative Approaches to Environmental Challenges",
      description:
        "Marcus brings over 15 years of experience in developing innovative solutions to environmental challenges. His session will cover breakthrough technologies and methodologies that are making a significant impact on sustainability efforts worldwide.",
    },
    {
      name: "Sophia Rodriguez",
      role: "Founder & Creative Director",
      company: "Sustainable Designs Co.",
      image: "/speaker-3.png",
      topic: "Creativity and Sustainability: A Powerful Combination",
      description:
        "Sophia will demonstrate how creative thinking and sustainable practices can work together to produce remarkable results. Her presentation will showcase real-world examples of creative solutions that address environmental concerns while driving business success.",
    },
  ];
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Featured Speakers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from the best minds in the industry who are leading the way in
            sustainable innovation and entrepreneurship.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-green-700 bg-green-50 text-green-700 hover:bg-green-50 rounded-full px-6"
          >
            View All Speakers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
