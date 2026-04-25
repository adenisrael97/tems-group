"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHardHat,
  FaRoad,
  FaTools,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import Card, { CardContent } from "@/components/ui/Card";

/* ================================
   SERVICES DATA (EDIT HERE)
================================ */
const services = [
  {
    icon: FaBuilding,
    title: "Building Construction",
    description:
      "Residential and commercial building construction using durable materials and modern architectural designs.",
  },
  {
    icon: FaHardHat,
    title: "Project Management",
    description:
      "Professional construction project management ensuring quality control, safety, and timely delivery.",
  },
  {
    icon: FaRoad,
    title: "Road & Infrastructure",
    description:
      "Road construction, drainage systems, and large-scale infrastructure development.",
  },
  {
    icon: FaTools,
    title: "Renovation & Maintenance",
    description:
      "Renovation, remodeling, and maintenance services for residential and commercial properties.",
  },
];

/* ================================
   ANIMATION VARIANTS
================================ */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ServicesSection() {
  return (
    <section
      className="bg-ash-100 py-16"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Header (SEO Friendly) ===== */}
        <header className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-black"
          >
            Construction Services in Nigeria
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tems Group Construction provides reliable building, infrastructure,
            renovation, and project management services across Nigeria.
          </p>
        </header>

        {/* ===== Services Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-400 text-black p-4 rounded-full">
                      <Icon size={32} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* View All Services Button - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <Button href="/services" variant="primary" aria-label="View all services">
            <span>View All Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
