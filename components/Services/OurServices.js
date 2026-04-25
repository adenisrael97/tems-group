"use client";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card, { CardContent } from "@/components/ui/Card";
const testimonials = [
    { name: "Jane Doe", company: "Acme Corp", quote: "TEMS-Group exceeded our expectations with their professionalism and quality workmanship." },
    { name: "John Smith", company: "Smith Holdings", quote: "Their team delivered our project on time and on budget. Highly recommended!" },
    { name: "Aisha Bello", company: "Bello Estates", quote: "We were impressed by their attention to detail and commitment to safety." },
    { name: "Chinedu Okafor", company: "Okafor Construction", quote: "Reliable, innovative, and always on schedule. TEMS-Group is our go-to partner." },
    { name: "Fatima Musa", company: "Musa Properties", quote: "Their expertise in large-scale projects is unmatched. We trust them completely." },
    { name: "Emeka Umeh", company: "Umeh Holdings", quote: "Excellent communication and top-notch results every time." },
    { name: "Grace Williams", company: "Williams Realty", quote: "The team’s attention to detail and quality is impressive. Highly recommended!" },
    { name: "Ahmed Sule", company: "Sule Group", quote: "From planning to delivery, TEMS-Group made the process seamless and stress-free." },
    { name: "Ngozi Eze", company: "Eze Developments", quote: "They delivered our project ahead of schedule and exceeded our expectations." },
    { name: "Samuel Johnson", company: "Johnson & Co.", quote: "Professional, reliable, and always focused on client satisfaction." }
];

const faqs = [
    { q: "What types of projects do you handle?", a: "We handle commercial, residential, industrial, and infrastructure projects of all sizes." },
    { q: "How do I request a quote?", a: "Simply click the 'Get Quote' or 'Contact Us' button and fill out the form. Our team will respond promptly." },
    { q: "Are your services available nationwide?", a: "Yes, we serve clients across Nigeria and beyond." },
    { q: "Do you offer design and build services?", a: "Absolutely! We provide end-to-end solutions from design to project delivery." },
    { q: "What is your safety record?", a: "We maintain an excellent safety record and prioritize safety on every project." },
    { q: "Can you help with project permits and approvals?", a: "Yes, we assist clients with all necessary permits and regulatory approvals." },
    { q: "Do you use sustainable building practices?", a: "Sustainability is a core value. We use eco-friendly materials and methods whenever possible." },
    { q: "How long does a typical project take?", a: "Project timelines vary, but we always provide a clear schedule and regular updates." },
    { q: "What makes TEMS-Group different?", a: "Our commitment to quality, innovation, and client satisfaction sets us apart." },
    { q: "How do I get started?", a: "Contact us through our website or phone, and our team will guide you through the next steps." }
];
import { motion } from "framer-motion";
import { FaBuilding, FaHome, FaRoad, FaWarehouse, FaTools, FaCity } from "react-icons/fa";

const services = [
    {
        icon: <FaBuilding className="text-yellow-600 text-4xl mb-2" />,
        title: "Commercial Construction",
        description: "Modern office complexes, shopping malls, hotels, and business centers built to the highest standards.",
        projects: [
            "Office Towers",
            "Shopping Malls",
            "Hotels & Resorts",
            "Business Parks"
        ]
    },
    {
        icon: <FaHome className="text-yellow-600 text-4xl mb-2" />,
        title: "Residential Construction",
        description: "From luxury homes to affordable housing, we deliver quality living spaces for all needs.",
        projects: [
            "Luxury Villas",
            "Apartment Complexes",
            "Affordable Housing",
            "Gated Estates"
        ]
    },
    {
        icon: <FaRoad className="text-yellow-600 text-4xl mb-2" />,
        title: "Infrastructure & Roads",
        description: "Expertise in highways, bridges, and public infrastructure for sustainable development.",
        projects: [
            "Highways & Roads",
            "Bridges",
            "Drainage Systems",
            "Urban Renewal"
        ]
    },
    {
        icon: <FaWarehouse className="text-yellow-600 text-4xl mb-2" />,
        title: "Industrial Projects",
        description: "Warehouses, factories, and industrial parks designed for efficiency and growth.",
        projects: [
            "Warehouses",
            "Factories",
            "Distribution Centers",
            "Industrial Parks"
        ]
    },
    {
        icon: <FaTools className="text-yellow-600 text-4xl mb-2" />,
        title: "Renovation & Remodeling",
        description: "Transforming existing spaces with modern upgrades and expert craftsmanship.",
        projects: [
            "Office Renovations",
            "Home Remodeling",
            "Retail Upgrades",
            "Facility Maintenance"
        ]
    },
    {
        icon: <FaCity className="text-yellow-600 text-4xl mb-2" />,
        title: "Urban Development",
        description: "Large-scale city projects, smart city solutions, and sustainable urban planning.",
        projects: [
            "Smart City Projects",
            "Parks & Recreation",
            "Public Facilities",
            "Community Centers"
        ]
    }
];
export default function OurServices() {
    // Testimonial slider state
    const [testimonialIdx, setTestimonialIdx] = useState(0);
    const nextTestimonial = () => setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
    const prevTestimonial = () => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length);
    // Auto-slide testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setTestimonialIdx(idx => (idx + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // FAQ dropdown state
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = idx => setOpenFaq(openFaq === idx ? null : idx);

    return (
        <section className="w-full" aria-label="TEMS-Group Construction Services">
            {/* Small container with heading */}
            <div className="max-w-xs mx-auto mt-8 mb-6 bg-yellow-500/90 rounded-xl shadow-lg px-6 py-3 flex items-center justify-center">
                <h2 className="text-lg font-bold text-black tracking-widest uppercase">Our Services</h2>
            </div>

            {/* Full-width offer section */}
            <div className="w-full bg-yellow-50 py-10 px-4 md:px-0">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-700 mb-4">Comprehensive Construction Solutions</h3>
                    <p className="text-gray-800 text-base md:text-lg font-medium">
                        TEMS-Group delivers end-to-end construction services, from concept to completion. Our expertise covers residential, commercial, and infrastructure projects, ensuring quality, safety, and innovation at every stage. We build with integrity, using modern technology and sustainable practices to exceed client expectations and transform communities.
                    </p>
                </div>
            </div>

            {/* Services Cards */}
            <div className="w-full bg-white py-12 px-4">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">
                    {services.map((service, idx) => (
                        <div key={service.title} className="flex flex-col md:flex-row md:items-center gap-8">
                            {/* Side content: icon, title, desc, button */}
                            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center">
                                <span className="mb-2">{service.icon}</span>
                                <h4 className="font-bold text-2xl text-yellow-700 mb-2">{service.title}</h4>
                                <p className="text-gray-700 text-base mb-4 max-w-md">{service.description}</p>
                                <Button
                                    href="/contact"
                                    variant="primary"
                                    size="sm"
                                    aria-label={`Get quote for ${service.title}`}
                                >
                                    Get Quote
                                </Button>
                            </div>
                            {/* Card: image + project types */}
                            <Card
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                tabIndex={0}
                                aria-label={service.title + ' project types'}
                                className="flex-1 bg-yellow-50 border-t-4 border-yellow-400 focus:ring-4 focus:ring-yellow-300 outline-none group hover:scale-[1.03] flex flex-col"
                            >
                                <div className="w-full h-48 bg-yellow-200 rounded-t-2xl flex items-center justify-center overflow-hidden">
                                    <Image src="/image/service-placeholder.jpg" alt={service.title + ' project example'} width={400} height={192} className="object-cover w-full h-full" />
                                </div>
                                <CardContent className="p-6 flex flex-col justify-center h-full">
                                    <h5 className="font-bold text-yellow-700 text-lg mb-3 text-center">Project Types</h5>
                                    <ul className="text-gray-700 text-sm space-y-2">
                                        {service.projects.map((proj) => (
                                            <li key={proj} className="flex items-center gap-2">
                                                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
                                                {proj}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
                        {/* Contact Us Button */}
                        <div className="w-full flex justify-center mt-10">
                            <Button
                                href="/contact"
                                variant="primary"
                                size="lg"
                                aria-label="Contact TEMS-Group"
                            >
                                Contact Us
                            </Button>
                        </div>

                        {/* Process Timeline */}
                        <section className="w-full bg-yellow-100 py-12 mt-16">
                            <div className="max-w-4xl mx-auto">
                                <h3 className="text-2xl font-extrabold text-yellow-700 text-center mb-8">How We Work</h3>
                                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                                    {[
                                        { step: "Consultation", desc: "We listen to your needs and provide expert advice." },
                                        { step: "Design & Plan", desc: "Our team creates a tailored solution and project roadmap." },
                                        { step: "Build & Deliver", desc: "We execute with quality, safety, and transparency." },
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={item.step}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                                            className="bg-white rounded-2xl shadow-md p-6 flex-1 text-center border-l-4 border-yellow-400"
                                            tabIndex={0}
                                            aria-label={item.step}
                                        >
                                            <div className="text-yellow-600 text-3xl font-bold mb-2">{idx + 1}</div>
                                            <h4 className="font-bold text-lg mb-1">{item.step}</h4>
                                            <p className="text-gray-700 text-sm">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Testimonials */}
                        <section className="w-full bg-white py-12">
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-2xl font-extrabold text-yellow-700 text-center mb-8">What Our Clients Say</h3>
                                <div className="relative flex flex-col items-center">
                                    <motion.div
                                        key={testimonialIdx}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-yellow-50 rounded-2xl shadow-lg p-8 text-center max-w-xl w-full"
                                        tabIndex={0}
                                        aria-label={`Testimonial from ${testimonials[testimonialIdx].name}`}
                                    >
                                        <FaQuoteLeft className="text-yellow-400 text-3xl mb-4 mx-auto" aria-hidden="true" />
                                        <p className="text-gray-800 text-lg mb-4">“{testimonials[testimonialIdx].quote}”</p>
                                        <div className="flex flex-col items-center gap-1 mt-4">
                                            <div className="font-bold text-yellow-700">{testimonials[testimonialIdx].name}</div>
                                            <div className="text-xs text-gray-600">{testimonials[testimonialIdx].company}</div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-4 mt-6">
                                        <Button
                                            onClick={prevTestimonial}
                                            variant="soft-yellow"
                                            size="icon"
                                            aria-label="Previous testimonial"
                                        >
                                            <FaChevronLeft />
                                        </Button>
                                        <Button
                                            onClick={nextTestimonial}
                                            variant="soft-yellow"
                                            size="icon"
                                            aria-label="Next testimonial"
                                        >
                                            <FaChevronRight />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="w-full bg-yellow-50 py-12">
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-2xl font-extrabold text-yellow-700 text-center mb-8">Frequently Asked Questions</h3>
                                <div className="space-y-5">
                                    {faqs.map((faq, idx) => {
                                        const isOpen = openFaq === idx;
                                        return (
                                            <motion.div
                                                key={faq.q}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                className={`rounded-xl border border-yellow-200 shadow-md overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-yellow-300' : ''}`}
                                                tabIndex={0}
                                                aria-label={`FAQ: ${faq.q}`}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    rounded="lg"
                                                    onClick={() => toggleFaq(idx)}
                                                    aria-expanded={isOpen}
                                                    aria-controls={`faq-content-${idx}`}
                                                    className={`w-full flex items-center justify-between px-6 py-5 rounded-none focus:ring-yellow-700 cursor-pointer group ${isOpen ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                                                >
                                                    <span className="font-bold text-yellow-700 text-left text-base md:text-lg group-hover:text-yellow-800 transition-colors duration-200">{faq.q}</span>
                                                    <span className={`ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                        <FaChevronDown className="text-yellow-600 text-xl" />
                                                    </span>
                                                </Button>
                                                <div
                                                    id={`faq-content-${idx}`}
                                                    className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} bg-yellow-50`}
                                                    style={{ borderLeft: isOpen ? '4px solid #facc15' : '4px solid transparent' }}
                                                >
                                                    <div className={`overflow-hidden px-6 pb-5 text-gray-700 text-sm md:text-base ${isOpen ? 'pt-2' : 'pt-0'}`}
                                                        aria-hidden={!isOpen}
                                                    >
                                                        {faq.a}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
            </div>
        </section>
    )
}