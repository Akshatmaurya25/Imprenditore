"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, Users, MessageCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactUsPage() {
  // Volunteer contacts data
  const volunteers = [
    {
      id: 1,
      name: "Arjun Sharma",
      phone: "+91 98765 43210",
      role: "Event Coordinator",
    },
    {
      id: 2,
      name: "Priya Patel",
      phone: "+91 87654 32109",
      role: "Registration Lead",
    },
    {
      id: 3,
      name: "Rahul Gupta",
      phone: "+91 76543 21098",
      role: "Technical Support",
    },
    {
      id: 4,
      name: "Sneha Verma",
      phone: "+91 65432 10987",
      role: "Sponsorship Manager",
    },
    {
      id: 5,
      name: "Vikash Kumar",
      phone: "+91 54321 09876",
      role: "Logistics Head",
    },
    {
      id: 6,
      name: "Ananya Singh",
      phone: "+91 43210 98765",
      role: "Marketing Lead",
    },
  ];

  // Official support emails data
  const supportEmails = [
    {
      id: 1,
      title: "General Inquiries",
      email: "info@imprenditore4.com",
      description: "For general questions about the event",
    },
    {
      id: 2,
      title: "Registration Support",
      email: "registration@imprenditore4.com",
      description: "Help with registration and ticketing",
    },
    {
      id: 3,
      title: "Sponsorship Opportunities",
      email: "sponsors@imprenditore4.com",
      description: "Partnership and sponsorship inquiries",
    },
    {
      id: 4,
      title: "Media & Press",
      email: "media@imprenditore4.com",
      description: "Press releases and media coverage",
    },
    {
      id: 5,
      title: "Technical Support",
      email: "tech@imprenditore4.com",
      description: "Technical issues and website support",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            Contact Us
          </h1>
          <p className="mt-2 text-green-100 text-center max-w-2xl">
            Get in touch with our team for any questions or support
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

      {/* Official Support Emails Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-green-700" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Official Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to our official support channels for specific inquiries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {supportEmails.map((support, index) => (
              <motion.div
                key={support.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-green-100">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg text-green-800">
                      {support.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-2 text-green-700">
                      <Mail className="h-4 w-4" />
                      <a
                        href={`mailto:${support.email}`}
                        className="font-medium hover:text-green-600 transition-colors"
                      >
                        {support.email}
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">
                      {support.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-green-700" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Volunteer Contacts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect directly with our dedicated volunteer team members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={volunteer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-green-50 hover:shadow-lg transition-shadow duration-300 border-2 border-green-100">
                  <CardHeader className="text-center pb-3">
                    <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-green-800 font-bold text-xl">
                        {volunteer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-green-800">
                      {volunteer.name}
                    </CardTitle>
                    <p className="text-sm text-green-600 font-medium">
                      {volunteer.role}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center gap-2 text-green-700">
                      <Phone className="h-4 w-4" />
                      <a
                        href={`tel:${volunteer.phone}`}
                        className="font-medium hover:text-green-600 transition-colors"
                      >
                        {volunteer.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-8">
              For urgent matters or immediate assistance, please call our main
              helpline or visit our campus location.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Main Helpline</h3>
                <p className="text-green-100 mb-2">Available 9 AM - 6 PM</p>
                <a
                  href="tel:+911234567890"
                  className="text-2xl font-bold hover:text-green-300 transition-colors"
                >
                  +91 1234 567 890
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Campus Location</h3>
                <p className="text-green-100 mb-2">RGPV Campus</p>
                <p className="text-lg">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Imprenditore 4.0 | We're here to help
          </p>
        </div>
      </footer>
    </div>
  );
}
