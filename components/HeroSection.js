
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/hero-bg.jpg"
        alt="Tems Group Construction Site"
        fill
        className="absolute inset-0 object-cover -z-10"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-gray-900/60 -z-10" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-yellow-500/20 border-2 border-yellow-500 rounded-full shadow-lg backdrop-blur-md"
        >
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          <span className="text-yellow-600 text-sm font-semibold tracking-wide uppercase">
            Building Excellence Since 1970
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          <span className="text-yellow-500">Tems Group</span> Builds the Future
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-100 mb-10 md:mb-12"
        >
          Innovative, sustainable, and precise construction solutions for tomorrow’s world. Experience quality, safety, and partnership with Nigeria’s trusted construction experts.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-yellow-500 text-black font-bold text-lg shadow-md hover:bg-yellow-400 active:bg-yellow-600 transition-all text-center"
          >
            Get a Quote
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-lg shadow-md hover:bg-white hover:text-black transition-all text-center"
          >
            Our Projects
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Shape */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-linear-to-t from-gray-100 to-transparent pointer-events-none"
      />
    </section>
  );
}