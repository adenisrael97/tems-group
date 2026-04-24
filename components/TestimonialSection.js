"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// ================== TESTIMONIAL DATA ==================
const testimonials = [
    {
        name: "Adebayo O.",
        title: "CEO, Lagos Realty",
        quote:
            "Tems Group exceeded our expectations. Their attention to detail and commitment to quality is unmatched in the industry.",
        image: "/image/project1.jpg",
    },
    {
        name: "Fatima S.",
        title: "Project Manager, Abuja Mall",
        quote:
            "Professional, reliable, and innovative. Tems Group delivered our project on time and within budget. Highly recommended!",
        image: "/image/project2.jpg",
    },
    {
        name: "Chinedu E.",
        title: "Homeowner, Port Harcourt",
        quote:
            "From start to finish, Tems Group made the process seamless. The team was friendly and the results were outstanding.",
        image: "/image/project3.jpg",
    },
    {
        name: "Ngozi M.",
        title: "Director, Ibadan Estates",
        quote:
            "Tems Group’s expertise and professionalism made our commercial project a huge success. We’ll definitely work with them again!",
        image: "/image/project4.jpg",
    },
    {
        name: "Musa T.",
        title: "Facilities Manager, Kano Offices",
        quote:
            "The team at Tems Group is dedicated and trustworthy. They delivered high-quality work and kept us informed every step of the way.",
        image: "/image/project5.jpg",
    },
    {
        name: "Rosemary A.",
        title: "Owner, Cross River Mall",
        quote:
            "I was impressed by their attention to detail and customer service. Tems Group truly cares about their clients.",
        image: "/image/project6.jpg",
    },
];

// ================== ANIMATION CONFIG ==================
const containerAnim = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
};
const cardAnim = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ================== MAIN COMPONENT ==================
export default function TestimonialSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-yellow-500/20 border-2 border-yellow-500 rounded-full shadow-md"
                    >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                        <span className="text-yellow-600 text-sm font-semibold tracking-wide uppercase">
                            Testimonials
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto"
                    >
                        We are proud to have earned the trust of clients across Nigeria. Here are a few words from those who have experienced the Tems Group difference.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerAnim}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonials.map((t) => (
                        <motion.article
                            key={t.name}
                            variants={cardAnim}
                            whileHover={{ y: -6, scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                            className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:border-yellow-500 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            {/* Image */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-yellow-500 mb-4 shadow-lg">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Quote */}
                            <blockquote className="text-gray-700 text-base sm:text-lg italic mb-4 leading-relaxed">
                                “{t.quote}”
                            </blockquote>
                            {/* Name & Title */}
                            <div className="mt-auto">
                                <span className="block text-black font-bold text-lg mb-1">{t.name}</span>
                                <span className="block text-gray-500 text-sm">{t.title}</span>
                            </div>
                                                        {/* Decorative line */}
                                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-yellow-500 rounded-full group-hover:w-1/2 transition-all duration-300"></div>
                                                    </motion.article>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </section>
                                );
                            }