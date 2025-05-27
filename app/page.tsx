"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Award, BarChart3, BotIcon as Robot, Mic } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CountdownTimer } from "@/components/countdown-timer";
import { MobileNav } from "@/components/mobile-nav";
import { EventTimeline } from "@/components/event-timeline";
import { SpeakerCard } from "@/components/speaker-card";
import Speakers from "@/sections/Speakers";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Event date - May 28, 2025 at 11:00 AM
  const eventDate = new Date(2025, 4, 28, 11, 0, 0).getTime();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileNavOpen(false);
  };

  const timelineEvents = [
    {
      time: "10:30 AM - 12:00 PM",
      title: "Inauguration Ceremony",
      description: "Held at RGPV Conference Hall",
      date: "May 28, 2025",
    },
    {
      time: "12:00 PM - 01:00 PM",
      title: "Speaker Session",
      description: "Held at RGPV Conference Hall",
      date: "May 28, 2025",
    },
    {
      time: "12:00 PM - 04:00 PM",
      title: "Stock Market Simulation",
      description: "Held at RGPV Conference Hall",
      date: "May 28, 2025",
    },
    {
      time: "12:00 PM - 04:30 PM",
      title: "Start-Up Sprint",
      description: "Held at KRC Lab",
      date: "May 28, 2025",
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "Lunch Break",
      description: "Lunch Break",
      date: "May 28, 2025",
    },
    {
      time: "02:00 PM - 03:00 PM",
      title: "Sustainability Quiz",
      description: "Held at KRC/RGPV Conference Hall",
      date: "May 28, 2025",
    },
    {
      time: "02:00 PM - 04:00 PM",
      title: "Robo Arena",
      description: "Held at KRC",
      date: "May 28, 2025",
    },
    {
      time: "03:00 PM - 04:00 PM",
      title: "Social Media Sustainability Challenge",
      description: "Held at KRC",
      date: "May 28, 2025",
    },
    {
      time: "04:00 PM - 05:00 PM",
      title: "Valedictory Session",
      description: "Held at RGPV Conference Hall",
      date: "May 28, 2025",
    },
  ];

  const eventStats = [
    { number: "1", label: "Day" },
    { number: "10k+", label: "Prizes" },
    { number: "50k+", label: "Worth Incentives" },
    { number: "3+", label: "sessions" },
  ];

  return (
    <div className="relative min-h-screen bg-white font-montserrat">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/imprenditore-logo.png"
              alt="Imprenditore 4.0 Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-bold text-xl text-green-800">
              Imprenditore 4.0
            </span>
          </Link>


          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("speakers")}
              className="text-green-800 hover:text-green-600 font-medium"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-green-800 hover:text-green-600 font-medium"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-green-800 hover:text-green-600 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="text-green-800 hover:text-green-600 font-medium"
            >
              FAQs
            </button>
            <Link href="/register">
              <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-6">
                Register Now
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden text-green-800"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/green-forest-landscape.png"
            alt="Sustainable Forest Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 to-green-900/50"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10 py-20 md:py-0">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
                Imprenditore <span className="text-green-800">4.0</span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8">
                LIVE IN BHOPAL | MAY 28, 2025
              </div>
              <Link href={"/register"}>
                <Button
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8"
                >
                  Register Now
                </Button>
                </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {eventStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold text-green-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-2">
              Event Countdown
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mark your calendars and get ready for an unforgettable experience
              at Imprenditore 4.0
            </p>
          </motion.div>
          <CountdownTimer targetDate={eventDate} />

          {/* Wave Divider */}
          <div className="mt-20">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 80.125C1248 89 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/leaves-background.png"
            alt="Green Leaves Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/90 to-green-900/90"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">About Imprenditore 4.0</h2>
            <p className="text-lg text-green-100">
              Imprenditore 4.0 is the flagship event of E-Cell RGPV Bhopal,
              focused on sustainability and innovative creativity. This event
              brings together entrepreneurs, innovators, and industry experts to
              foster a culture of sustainable entrepreneurship and creative
              problem-solving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/90 to-green-700 p-1"
            >
              <div className="absolute inset-0 bg-[url('/pattern-dots.png')] opacity-10"></div>
              <div className="relative h-full rounded-xl bg-gradient-to-br from-green-600/90 to-green-800/90 backdrop-blur-sm p-6">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/20 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-green-300"
                  >
                    <path d="M12 2v8"></path>
                    <path d="m16 6-4 4-4-4"></path>
                    <path d="M3 10h18"></path>
                    <path d="M12 22v-8"></path>
                    <path d="m16 18-4-4-4 4"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Innovation
                </h3>
                <p className="text-green-100">
                  Fostering creative solutions to real-world problems with a
                  focus on sustainability and environmental impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/90 to-green-700 p-1"
            >
              <div className="absolute inset-0 bg-[url('/pattern-dots.png')] opacity-10"></div>
              <div className="relative h-full rounded-xl bg-gradient-to-br from-green-600/90 to-green-800/90 backdrop-blur-sm p-6">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/20 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-green-300"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Networking
                </h3>
                <p className="text-green-100">
                  Connect with industry leaders, experts, and fellow
                  entrepreneurs to expand your professional network.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/90 to-green-700 p-1"
            >
              <div className="absolute inset-0 bg-[url('/pattern-dots.png')] opacity-10"></div>
              <div className="relative h-full rounded-xl bg-gradient-to-br from-green-600/90 to-green-800/90 backdrop-blur-sm p-6">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/20 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-green-300"
                  >
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Recognition
                </h3>
                <p className="text-green-100">
                  Showcase your ideas and get recognized for your innovative
                  solutions and entrepreneurial spirit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      {/* <Speakers/> */}

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Event Schedule
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plan your day at Imprenditore 4.0 with our detailed event
              schedule.
            </p>
          </motion.div>

          <EventTimeline events={timelineEvents} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Event Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the exciting activities and competitions that await you at
              Imprenditore 4.0.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-green-200 hover:border-green-400 bg-green-50 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-800">Hackathon</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Participate in our sustainability-focused hackathon with
                    reflection provided for all participants. Showcase your
                    problem-solving skills and win exciting prizes.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-green-200 bg-green-50 hover:border-green-400 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-800">
                    Stock Market Simulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Experience the thrill of trading in our simulated stock
                    market environment. Learn investment strategies and
                    financial decision-making in real-time.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-green-200 bg-green-50 hover:border-green-400 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Robot className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-800">Robo Arena</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Compete in our Robo Arena where the risk is against time.
                    Showcase your robot spinner and compete to be crowned the
                    best in the arena.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full border-green-200 bg-green-50 hover:border-green-400 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Mic className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-800">
                    Speaker Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Gain insights from industry experts and influential speakers
                    who will share their knowledge and experiences in
                    sustainable innovation and entrepreneurship.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Find answers to common questions about Imprenditore 4.0.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Who can participate in Imprenditore 4.0?",
                  answer:
                    "Imprenditore 4.0 is open to students, entrepreneurs, innovators, and professionals interested in sustainability and innovation. There are no specific eligibility criteria, but registration is required.",
                },
                {
                  question: "Is there a registration fee?",
                  answer:
                    "Registration details including any fees will be available on the registration page. Some activities may have separate registration requirements.",
                },
                {
                  question: "How can I register for the hackathon?",
                  answer:
                    "You can register for the hackathon through our registration page. Team formation details and hackathon rules will be shared after registration.",
                },
                {
                  question: "Will certificates be provided?",
                  answer:
                    "Yes, certificates of participation will be provided to all registered participants who attend the event. Winners of competitions will receive special recognition certificates.",
                },
                {
                  question: "Can I participate in multiple activities?",
                  answer:
                    "Yes, you can participate in multiple activities based on the event schedule. However, some activities may run in parallel, so plan accordingly.",
                },
                {
                  question: "Will accommodation be provided?",
                  answer:
                    "Accommodation details will be shared with outstation participants after registration. Limited accommodation may be available on a first-come, first-served basis.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-green-700"
                  >
                    <AccordionTrigger className="text-left hover:text-green-300 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-green-100 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-green-100 mb-4">Still have questions?</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Ready to Join Imprenditore 4.0?
            </h2>
            <p className="text-gray-600 mb-8">
              Don't miss this opportunity to be part of one of the biggest
              flagship events focused on sustainability and innovative
              creativity.
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8"
              >
                Register Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-700 to-green-900 text-green-100 py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/favicon-white.png"
                  alt="Imprenditore 4.0 Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="font-bold text-xl">Imprenditore 4.0</span>
              </div>
              <p className="text-green-200 mb-4">
                The flagship event of E-Cell RGPV Bhopal focused on
                sustainability and innovative creativity.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("speakers")}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Speakers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("timeline")}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Schedule
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faqs")}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>RGPV Campus, Bhopal, Madhya Pradesh, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 1234567890</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>ecell@rgpv.ac.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-600/30 mt-12 pt-6 text-center">
            <p className="text-green-300">
              &copy; {new Date().getFullYear()} Imprenditore 4.0 | E-Cell RGPV
              Bhopal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
