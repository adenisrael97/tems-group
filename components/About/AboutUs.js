"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
        return (
            <div className="w-full bg-yellow-50 pt-10 pb-4 px-0">
                {/* About Us Intro */}
                <section>
                    <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
                        <div className="w-full bg-white border border-yellow-200 rounded-2xl shadow-lg p-8 flex flex-col items-start text-left relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-2 bg-yellow-400 rounded-l-2xl" />
                            <span className="inline-block bg-yellow-500/90 text-black font-bold px-4 py-1 rounded-full mb-4 text-xs tracking-widest uppercase shadow-sm mt-1">About Us</span>
                            <h2 className="text-2xl font-extrabold text-black mb-3 leading-tight">TEMS-Group</h2>
                            <div className="space-y-2 pl-0 md:pl-2">
                                <p className="text-gray-800 text-base font-medium">
                                    Delivering excellence in construction and infrastructure for over 20 years.<br />
                                    Empowering communities through innovation, quality, and trust.<br />
                                    Your partner for sustainable, world-class building solutions in Nigeria and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="w-full max-w-7xl mx-auto px-4 md:px-0 mt-10 flex flex-col lg:flex-row items-center gap-8">
                    {/* Image with overlay content */}
                    <div className="relative w-full lg:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg shrink-0">
                        <Image
                            src="/image/about1.jpg"
                            alt="TEMS-Group Construction"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* +35 Years Experience Badge */}
                        <div className="absolute bottom-4 right-4 z-10">
                            <span className="bg-yellow-500 text-black font-extrabold px-5 py-2 rounded-full text-base shadow-xl border-2 border-yellow-400 drop-shadow-lg">
                                +35 Years Experience
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                            <span className="bg-yellow-500/90 text-black font-bold px-3 py-1 rounded-full text-xs mb-2 w-max">Our People, Our Projects</span>
                            <h3 className="text-white text-xl font-extrabold mb-1">Building the Future</h3>
                            <p className="text-gray-200 text-sm">Excellence, safety, and innovation in every project.</p>
                        </div>
                    </div>
                    {/* Vision & Mission Animated Card */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="bg-white border-l-4 border-yellow-400 rounded-2xl shadow-md p-6"
                        >
                            <h4 className="text-lg font-bold text-yellow-600 mb-2">Our Vision</h4>
                            <p className="text-gray-700 text-base">
                                To be the most trusted and innovative construction partner, transforming skylines and communities across Africa through sustainable solutions and world-class expertise.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="bg-white border-l-4 border-yellow-400 rounded-2xl shadow-md p-6"
                        >
                            <h4 className="text-lg font-bold text-yellow-600 mb-2">Our Mission</h4>
                            <p className="text-gray-700 text-base">
                                To deliver exceptional construction, engineering, and project management services with integrity, quality, and a relentless focus on client satisfaction and community impact.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Values & Principles Section */}
                <section className="w-full max-w-7xl mx-auto px-4 md:px-0 mt-12">
                    {/* Our Values Box */}
                    <div className="bg-yellow-100 rounded-xl px-6 py-4 max-w-md mx-auto shadow-md mb-8 flex flex-col items-center">
                        <h3 className="text-lg font-bold text-yellow-700 mb-2">Our Values</h3>
                        <p className="text-gray-800 text-center text-base font-medium">Integrity, Innovation, Excellence, Safety, Collaboration, and Community Impact.</p>
                    </div>
                    {/* Principles Heading */}
                    <h4 className="text-xl font-extrabold text-black text-center mb-8">Our Principles That Guide Us</h4>
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400"
                        >
                            <span className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /></svg>
                            </span>
                            <h5 className="font-bold text-lg mb-2">Integrity</h5>
                            <p className="text-gray-600 text-sm">We uphold honesty and transparency in every project and relationship.</p>
                        </motion.div>
                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400"
                        >
                            <span className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                            </span>
                            <h5 className="font-bold text-lg mb-2">Innovation</h5>
                            <p className="text-gray-600 text-sm">We embrace new ideas and technologies to deliver better solutions.</p>
                        </motion.div>
                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400"
                        >
                            <span className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                            </span>
                            <h5 className="font-bold text-lg mb-2">Excellence</h5>
                            <p className="text-gray-600 text-sm">We strive for the highest standards in quality and performance.</p>
                        </motion.div>
                        {/* Card 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400"
                        >
                            <span className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                            </span>
                            <h5 className="font-bold text-lg mb-2">Safety</h5>
                            <p className="text-gray-600 text-sm">We prioritize the well-being of our people and communities.</p>
                        </motion.div>
                        {/* Card 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400"
                        >
                            <span className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2" /></svg>
                            </span>
                            <h5 className="font-bold text-lg mb-2">Collaboration</h5>
                            <p className="text-gray-600 text-sm">We work together to achieve shared goals and lasting success.</p>
                        </motion.div>
                        {/* Card 6 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400"
                        >
                            <span className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z" /></svg>
                            </span>
                            <h5 className="font-bold text-lg mb-2">Community Impact</h5>
                            <p className="text-gray-600 text-sm">We make a positive difference in the places we build and serve.</p>
                        </motion.div>
                    </div>
                </section>
            </div>
        );
}