"use client";
import { motion } from "framer-motion";

const milestones = [
    {
        year: "1990",
        title: "Founded",
        description: "TEMS-Group was established, laying the foundation for excellence in construction and infrastructure.",
    },
    {
        year: "2000",
        title: "First Major Project",
        description: "Completed our first large-scale commercial project, setting new standards in quality and innovation.",
    },
    {
        year: "2010",
        title: "Expansion",
        description: "Expanded operations across Nigeria, growing our team and capabilities to serve more communities.",
    },
    {
        year: "2020",
        title: "Sustainability Focus",
        description: "Launched green building initiatives, championing sustainable construction practices in Africa.",
    },
    {
        year: "2025",
        title: "Innovation & Leadership",
        description: "Recognized as a leader in innovative, client-focused construction solutions across the continent.",
    },
];

export default function OurJourney() {
    return (
        <>
            <section className="w-full bg-yellow-50 py-12 px-2 md:px-0">
                            {/* Team Highlights */}
                            <section className="w-full bg-white py-12 px-2 md:px-0">
                                <div className="max-w-5xl mx-auto">
                                    <div className="text-center mb-10">
                                        <span className="inline-block bg-yellow-500/90 text-black font-bold px-4 py-1 rounded-full mb-3 text-xs tracking-widest uppercase shadow-sm">Meet Our Team</span>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2">Key People Behind TEMS-Group</h2>
                                        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
                                            Our success is driven by passionate professionals dedicated to excellence and innovation.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                        {[1,2,3].map((n, idx) => (
                                            <motion.div
                                                key={n}
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                                className="bg-yellow-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400"
                                            >
                                                <div className="w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center mb-4 overflow-hidden">
                                                    <span className="text-4xl text-yellow-600 font-bold">IMG</span>
                                                </div>
                                                <h5 className="font-bold text-lg mb-1">Name Surname</h5>
                                                <p className="text-yellow-700 text-sm font-semibold mb-2">Role/Position</p>
                                                <p className="text-gray-600 text-xs">Short professional description or motto goes here.</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Client/Project Logos */}
                            <section className="w-full bg-yellow-100 py-10 px-2 md:px-0">
                                <div className="max-w-5xl mx-auto">
                                    <div className="text-center mb-8">
                                        <span className="inline-block bg-yellow-500/90 text-black font-bold px-4 py-1 rounded-full mb-3 text-xs tracking-widest uppercase shadow-sm">Our Clients & Projects</span>
                                        <h2 className="text-xl md:text-2xl font-extrabold text-black mb-2">Trusted By</h2>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
                                        {[1,2,3,4,5].map((n) => (
                                            <motion.div
                                                key={n}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: n * 0.1 }}
                                                className="bg-white rounded-xl shadow p-4 flex items-center justify-center h-20"
                                            >
                                                <span className="text-yellow-400 text-2xl font-bold">LOGO</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Awards & Certifications */}
                            <section className="w-full bg-white py-12 px-2 md:px-0">
                                <div className="max-w-5xl mx-auto">
                                    <div className="text-center mb-8">
                                        <span className="inline-block bg-yellow-500/90 text-black font-bold px-4 py-1 rounded-full mb-3 text-xs tracking-widest uppercase shadow-sm">Awards & Certifications</span>
                                        <h2 className="text-xl md:text-2xl font-extrabold text-black mb-2">Recognitions</h2>
                                    </div>
                                    <div className="flex flex-wrap gap-6 justify-center items-center">
                                        {[1,2,3].map((n, idx) => (
                                            <motion.div
                                                key={n}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                                className="bg-yellow-100 rounded-full w-24 h-24 flex flex-col items-center justify-center shadow border-2 border-yellow-400"
                                            >
                                                <span className="text-yellow-600 text-3xl font-bold mb-1">🏆</span>
                                                <span className="text-xs text-yellow-700 font-semibold">Award {n}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-block bg-yellow-500/90 text-black font-bold px-4 py-1 rounded-full mb-3 text-xs tracking-widest uppercase shadow-sm">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2">The TEMS-Group Story</h2>
                        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
                            From humble beginnings to industry leadership, our journey is marked by milestones of growth, innovation, and community impact.
                        </p>
                    </div>
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line for timeline */}
                        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-yellow-200 z-0" style={{ transform: 'translateX(-50%)' }} />
                        <div className="flex flex-col gap-10 md:gap-0">
                            {milestones.map((milestone, idx) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                                    className={`relative z-10 md:w-1/2 px-4 py-6 rounded-2xl shadow-lg bg-white border border-yellow-100 mx-auto ${idx % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'} md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:${idx % 2 === 0 ? '-translate-y-1/2' : 'translate-y-1/2'} md:top-[${idx * 120}px]`}
                                    style={{ marginTop: idx === 0 ? 0 : 48, position: 'relative' }}
                                >
                                    <div className="flex items-center mb-2">
                                        <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-xs shadow mr-3">{milestone.year}</span>
                                        <h3 className="text-xl font-bold text-yellow-700">{milestone.title}</h3>
                                    </div>
                                    <p className="text-gray-700 text-base">{milestone.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action: Join Our Group */}
            <div className="w-full bg-linear-to-r from-yellow-100 via-yellow-300 to-yellow-400 py-10 px-4 flex justify-center items-center">
                <div className="max-w-2xl w-full bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-extrabold text-yellow-700 mb-2">Want to join our group?</h3>
                        <p className="text-gray-700 text-base mb-4 md:mb-0">Be part of a team that builds the future. Explore career opportunities with TEMS-Group.</p>
                    </div>
                    <a
                        href="/careers"
                        className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-colors duration-200 text-base"
                    >
                        View Careers
                    </a>
                </div>
            </div>
        </>
    );
}