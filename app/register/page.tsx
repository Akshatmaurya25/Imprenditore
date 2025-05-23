"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-800 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <div className="h-48 md:h-full relative bg-gradient-to-br from-green-400 via-green-600 to-green-900 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-green-300/20 blur-lg"></div>

                {/* Logo centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-32 h-32 relative mb-6">
                    <Image
                      src="/favicon-white.png"
                      alt="Imprenditore 4.0 Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-white text-xl font-bold text-center mb-2">
                    Imprenditore 4.0
                  </h3>
                  <div className="w-16 h-1 bg-green-300 rounded-full mb-4"></div>
                  <p className="text-green-100 text-sm text-center">
                    May 28, 2025 | 11:00 AM onwards
                  </p>
                </div>

                {/* Bottom decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 80.125C1248 89 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
                      fill="rgba(255,255,255,0.1)"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8 md:w-2/3">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-green-800 mb-2">
                  Register for Imprenditore 4.0
                </h1>
                <p className="text-gray-600">
                  Complete your registration through our Luma platform to secure
                  your spot at the event.
                </p>
              </div>

              <div className="relative min-h-[400px] rounded-lg border border-gray-200 bg-white">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full border-4 border-t-green-600 border-b-green-600 border-l-green-600 border-r-transparent animate-spin"></div>
                      <p className="mt-4 text-green-800">
                        Loading registration form...
                      </p>
                    </div>
                  </div>
                )}

                {/* Luma Embed */}
                <div className="w-full h-full">
                  <iframe
                    src="https://lu.ma/embed/calendar/cal-oyl4rD4EVxzc62A/events?lt=light"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{
                      border: "1px solid #bfcbda88",
                      borderRadius: "4px",
                    }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    className="w-full h-[500px] border-0"
                    onLoad={() => setIsLoading(false)}
                  ></iframe>

                  {!isLoading && (
                    <div className="p-6 text-center">
                      <p className="text-gray-500 mb-4">
                        Welcome to the Imprenditore 4.0 registration. Please
                        complete the registration on luma events showed above to
                        secure your spot at this exclusive sustainability
                        summit. Early registration is recommended as seats are
                        limited.
                      </p>
                      <Button className="bg-green-700 hover:bg-green-800 text-white">
                        Register Now on Luma
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>
                  By registering, you agree to our{" "}
                  <Link href="#" className="text-green-700 hover:underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-green-700 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Having trouble registering?{" "}
            <Link href="#" className="text-green-700 hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
