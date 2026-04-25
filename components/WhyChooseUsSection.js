"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import Button from "@/components/ui/Button";

/* ============================================================
   WHY CHOOSE US DATA
   ============================================================
   Edit this array to update the cards.
   Each card has: icon, title, description, and highlight (stat).
   ============================================================ */
const reasons = [
  {
    icon: FaAward,
    title: "Quality Assurance",
    description:
      "We use premium materials and follow strict quality standards to ensure every project exceeds expectations.",
    highlight: "100%",
    highlightLabel: "Quality Rate",
  },
  {
    icon: FaUsers,
    title: "Expert Team",
    description:
      "Our skilled engineers, architects, and craftsmen bring decades of combined experience to your project.",
    highlight: "50+",
    highlightLabel: "Professionals",
  },
  {
    icon: FaClock,
    title: "On-Time Delivery",
    description:
      "We respect your time and budget. Our projects are delivered on schedule without compromising quality.",
    highlight: "98%",
    highlightLabel: "On-Time",
  },
  {
    icon: FaShieldAlt,
    title: "Safety First",
    description:
      "Safety is our priority. We maintain the highest safety standards on all our construction sites.",
    highlight: "Zero",
    highlightLabel: "Accidents",
  },
  {
    icon: FaHandshake,
    title: "Client Partnership",
    description:
      "We work closely with clients, providing regular updates and transparent communication throughout.",
    highlight: "200+",
    highlightLabel: "Happy Clients",
  },
  {
    icon: FaChartLine,
    title: "Proven Track Record",
    description:
      "With years of successful projects across Nigeria, we have built a reputation for excellence.",
    highlight: "15+",
    highlightLabel: "Years Experience",
  },
];

/* ============================================================
   ANIMATION CONFIGURATION
   ============================================================
   Adjust these values to change animation behavior.
   - duration: How long the animation takes (in seconds)
   - delay: Wait time before animation starts
   - staggerChildren: Delay between each card animation
   ============================================================ */
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time between each card appearing
      delayChildren: 0.2, // Initial delay before cards start
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40, // Cards start 40px below final position
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const iconAnimation = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function WhyChooseUsSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center mb-12 sm:mb-16">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-yellow-500/10 border-2 border-yellow-500 rounded-full"
          >
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-yellow-600 text-sm font-medium">
              Why Choose Us
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            id="why-choose-us-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
          >
            Building Trust Through{" "}
            <span className="text-yellow-500">Excellence</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
          >
            Tems Group Construction has been delivering exceptional construction
            services across Nigeria. Here&apos;s why clients trust us with their
            most important projects.
          </motion.p>
        </div>

        {/* ==================== CARDS GRID ==================== */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </motion.div>

        {/* ==================== BOTTOM CTA ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Ready to start your project with a team you can trust?
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="/contact" variant="primary" size="lg">
                Get Free Consultation
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="/projects" variant="secondary" size="lg">
                View Our Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   REASON CARD COMPONENT
   ============================================================
   This is a single card component. It receives:
   - reason: Object with icon, title, description, highlight, highlightLabel
   - index: Position in the array (used for animation delay)
   ============================================================ */
function ReasonCard({ reason }) {
  // Extract data from the reason object
  const { icon: Icon, title, description, highlight, highlightLabel } = reason;

  return (
    <motion.article
      variants={cardAnimation}
      whileHover={{ y: -8 }} // Card lifts up on hover
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-yellow-500 hover:shadow-xl transition-all duration-300"
    >
      {/* Decorative gradient (appears on hover) */}
      <div className="absolute inset-0 bg-linear-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content */}
      <div className="relative z-10">
        
        {/* Icon Container */}
        <motion.div
          variants={iconAnimation}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow-500 transition-colors duration-300"
        >
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500 group-hover:text-black transition-colors duration-300" />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
          {description}
        </p>

        {/* Highlight Stat */}
        <div className="pt-5 border-t border-gray-200">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-yellow-500">
              {highlight}
            </span>
            <span className="text-gray-500 text-sm">
              {highlightLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Hover indicator line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-yellow-500 rounded-full group-hover:w-1/2 transition-all duration-300" />
    </motion.article>
  );
}