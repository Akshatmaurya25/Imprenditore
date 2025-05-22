"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SponsorsPage() {
  const sponsors = [
    {
      name: "GreenTech Innovations",
      logo: "/sponsors/greentech-logo.png",
      description:
        "Leading provider of sustainable technology solutions for modern businesses.",
      website: "https://greentech-innovations.com",
      email: "partnerships@greentech.com",
      phone: "+1 (555) 123-4567",
      tags: ["Technology", "Sustainability", "Innovation"],
      tier: "Platinum",
      color: "bg-gray-100",
    },
    {
      name: "EcoSolutions Global",
      logo: "/sponsors/ecosolutions-logo.png",
      description:
        "Global leader in environmental consulting and sustainable business practices.",
      website: "https://ecosolutions-global.com",
      email: "info@ecosolutions.com",
      phone: "+1 (555) 234-5678",
      tags: ["Sustainability", "Consulting", "Environment"],
      tier: "Gold",
      color: "bg-yellow-50",
    },
    {
      name: "Future Finance Corp",
      logo: "/sponsors/futurefinance-logo.png",
      description:
        "Innovative financial services focused on sustainable investment opportunities.",
      website: "https://futurefinance.com",
      email: "contact@futurefinance.com",
      phone: "+1 (555) 345-6789",
      tags: ["Finance", "Investment", "Sustainability"],
      tier: "Gold",
      color: "bg-blue-50",
    },
    {
      name: "Smart Energy Systems",
      logo: "/sponsors/smartenergy-logo.png",
      description:
        "Renewable energy solutions and smart grid technology for a sustainable future.",
      website: "https://smartenergy.com",
      email: "partnerships@smartenergy.com",
      phone: "+1 (555) 456-7890",
      tags: ["Energy", "Technology", "Renewable"],
      tier: "Silver",
      color: "bg-green-50",
    },
    {
      name: "Digital Learning Hub",
      logo: "/sponsors/digitallearning-logo.png",
      description:
        "Educational technology platform promoting sustainable learning practices.",
      website: "https://digitallearninghub.com",
      email: "hello@digitallearning.com",
      phone: "+1 (555) 567-8901",
      tags: ["Education", "Technology", "Digital"],
      tier: "Silver",
      color: "bg-purple-50",
    },
    {
      name: "HealthTech Solutions",
      logo: "/sponsors/healthtech-logo.png",
      description:
        "Healthcare technology focused on sustainable and accessible medical solutions.",
      website: "https://healthtech-solutions.com",
      email: "info@healthtech.com",
      phone: "+1 (555) 678-9012",
      tags: ["Healthcare", "Technology", "Innovation"],
      tier: "Bronze",
      color: "bg-red-50",
    },
    {
      name: "Sustainable Materials Co",
      logo: "/sponsors/sustainablematerials-logo.png",
      description:
        "Manufacturer of eco-friendly materials for construction and manufacturing.",
      website: "https://sustainablematerials.com",
      email: "contact@sustainablematerials.com",
      phone: "+1 (555) 789-0123",
      tags: ["Manufacturing", "Materials", "Sustainability"],
      tier: "Bronze",
      color: "bg-orange-50",
    },
    {
      name: "CloudVert Technologies",
      logo: "/sponsors/cloudvert-logo.png",
      description:
        "Cloud computing solutions with a focus on energy efficiency and sustainability.",
      website: "https://cloudvert.com",
      email: "partnerships@cloudvert.com",
      phone: "+1 (555) 890-1234",
      tags: ["Technology", "Cloud", "Efficiency"],
      tier: "Bronze",
      color: "bg-indigo-50",
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "bg-gray-800 text-white";
      case "Gold":
        return "bg-yellow-500 text-white";
      case "Silver":
        return "bg-gray-400 text-white";
      case "Bronze":
        return "bg-orange-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      Technology: "bg-blue-100 text-blue-800",
      Sustainability: "bg-green-100 text-green-800",
      Innovation: "bg-purple-100 text-purple-800",
      Finance: "bg-yellow-100 text-yellow-800",
      Education: "bg-indigo-100 text-indigo-800",
      Healthcare: "bg-red-100 text-red-800",
      Energy: "bg-orange-100 text-orange-800",
      Environment: "bg-emerald-100 text-emerald-800",
      Consulting: "bg-gray-100 text-gray-800",
      Investment: "bg-amber-100 text-amber-800",
      Renewable: "bg-lime-100 text-lime-800",
      Digital: "bg-cyan-100 text-cyan-800",
      Manufacturing: "bg-stone-100 text-stone-800",
      Materials: "bg-brown-100 text-brown-800",
      Cloud: "bg-sky-100 text-sky-800",
      Efficiency: "bg-teal-100 text-teal-800",
    };
    return colors[tag] || "bg-gray-100 text-gray-800";
  };

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
            Our Sponsors
          </h1>
          <p className="mt-2 text-green-100 text-center max-w-2xl">
            Partnering with industry leaders to drive sustainability and
            innovation
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

      {/* Sponsor Wall Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Sponsor Wall
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of all our amazing partners who make Imprenditore 4.0
              possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sponsors/sponsor-wall.png"
                alt="Sponsor Wall - All Partners"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Thank You to All Our Partners
                </h3>
                <p className="text-green-100">
                  Together, we're building a sustainable future
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Sponsor Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Meet Our Sponsors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know the innovative companies supporting sustainable
              entrepreneurship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full hover:shadow-lg transition-shadow duration-300 bg-green-50 border-2 border-gray-100`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="relative w-24 h-24 mx-auto mb-4 bg-white rounded-full p-3 shadow-sm">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} Logo`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex justify-center mb-2">
                      <Badge
                        className={`${getTierColor(
                          sponsor.tier
                        )} font-semibold`}
                      >
                        {sponsor.tier} Sponsor
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-green-800">
                      {sponsor.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 text-center">
                      {sponsor.description}
                    </CardDescription>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-start">
                      {sponsor.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className={getTagColor(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-8">
              Join us in supporting the next generation of sustainable
              entrepreneurs. Partner with Imprenditore 4.0 and showcase your
              commitment to innovation and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-800 hover:bg-green-50">
                Download Sponsorship Package
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800"
              >
                Contact Partnership Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Imprenditore 4.0 | Thank you to all our
            sponsors and partners
          </p>
        </div>
      </footer>
    </div>
  );
}
