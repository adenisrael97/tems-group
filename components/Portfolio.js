"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRulerCombined, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Portfolio() {
  const projects = [
    {
      image: "/image/project1.jpg",
      type: "Residential Building",
      location: "Lagos, Nigeria",
      price: "₦50M",
      area: "3,000 sq ft",
      year: "2024",
      status: "Completed",
    },
    {
      image: "/image/project2.jpg",
      type: "Commercial Complex",
      location: "Abuja, Nigeria",
      price: "₦120M",
      area: "8,000 sq ft",
      year: "2023",
      status: "Completed",
    },
    {
      image: "/image/project3.jpg",
      type: "Industrial Warehouse",
      location: "Port Harcourt, Nigeria",
      price: "₦90M",
      area: "5,000 sq ft",
      year: "2022",
      status: "Completed",
    },
    {
      image: "/image/project4.jpg",
      type: "Luxury Villa",
      location: "Ibadan, Nigeria",
      price: "₦70M",
      area: "4,000 sq ft",
      year: "2023",
      status: "Completed",
    },
    {
      image: "/image/project5.jpg",
      type: "Office Building",
      location: "Kano, Nigeria",
      price: "₦100M",
      area: "6,000 sq ft",
      year: "2024",
      status: "Completed",
    },
    {
      image: "/image/project6.jpg",
      type: "Shopping Mall",
      location: "Cross River, Nigeria",
      price: "₦250M",
      area: "15,000 sq ft",
      year: "2024",
      status: "In Progress",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 border-2 border-yellow-500 rounded-full text-xs sm:text-sm font-medium text-yellow-600 bg-yellow-50"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              Our Portfolio
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            >
              Featured Projects
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-xl text-sm sm:text-base lg:text-lg"
            >
              Explore our portfolio of successful construction projects across Nigeria, 
              showcasing excellence in quality and craftsmanship.
            </motion.p>
          </div>

          {/* View All Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 w-full sm:w-auto group flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-yellow-500 text-black text-sm sm:text-base font-semibold rounded-full hover:bg-yellow-400 active:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/25"
          >
            View All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.type} in ${project.location}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
                    project.status === "Completed" 
                      ? "bg-green-500 text-white" 
                      : "bg-yellow-500 text-black"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold text-gray-900">
                    {project.price}
                  </span>
                </div>

                {/* Project Type - On Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 line-clamp-1">
                    {project.type}
                  </h3>
                  <div className="flex items-center gap-1 text-white/90 text-xs sm:text-sm">
                    <FaMapMarkerAlt className="text-yellow-400 text-xs sm:text-sm shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3 sm:p-4 lg:p-5">
                {/* Project Details */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                    <FaRulerCombined className="text-yellow-500 text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm font-medium">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                    <FaCalendarAlt className="text-yellow-500 text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm font-medium">{project.year}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl hover:bg-yellow-500 hover:text-black active:bg-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  View Project Details
                  <FaArrowRight className="text-xs sm:text-sm group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center px-4"
        >
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Have a project in mind? Let&apos;s bring your vision to life.
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-sm sm:text-base font-semibold rounded-full hover:bg-gray-800 active:bg-gray-900 transition-all shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}


