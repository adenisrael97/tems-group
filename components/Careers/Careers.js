"use client";
import React from "react";
import { FaUsers, FaLightbulb, FaChartLine, FaHandshake, FaBuilding, FaStar, FaUserCheck, FaLaptopCode, FaHardHat, FaUserTie, FaDraftingCompass, FaMapMarkerAlt, FaMoneyBillWave, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Careers() {
    return (
        <section className="w-full">
            {/* Transparent Heading */}


            {/* Full-width colored content */}
            <div className="w-full bg-yellow-50 py-10 px-4 md:px-0 flex justify-center items-center">
                <div className="backdrop-blur-md bg-white/60 rounded-2xl shadow-lg max-w-xl w-full mx-auto p-8 text-center border border-yellow-100">
                    <h2 className="text-2xl font-bold text-yellow-700 mb-3">Join Our Team</h2>
                    <p className="text-gray-800 text-base md:text-lg font-medium">
                        At TEMS-Group, we believe our people are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning. Join a team where your skills are valued, your ideas matter, and your growth is supported. Whether you’re an experienced professional or just starting your career, discover opportunities to build a rewarding future with us.
                    </p>
                </div>
            </div>
                {/* Why Join Us Section */}
                <div className="w-full py-8 bg-transparent">
                    <div className="w-full backdrop-blur-md bg-white/60 rounded-2xl shadow-lg p-8 text-center border border-yellow-100 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-bold text-yellow-700 mb-3">Why Join Us</h3>
                        <p className="text-gray-800 text-base md:text-lg font-medium">
                            Joining TEMS-Group means being part of a forward-thinking, supportive team that values your growth and well-being. Enjoy opportunities for professional development, competitive compensation, a collaborative work environment, and the chance to contribute to impactful projects that shape communities. At TEMS-Group, your success is our priority.
                        </p>
                    </div>
                </div>
                {/* Benefits Cards Section */}
                <div className="w-full py-12 px-4 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaUsers className="text-yellow-600 text-4xl mb-3" />,
                                title: "Collaborative Culture",
                                desc: "Work in a supportive, team-driven environment where your ideas matter."
                            },
                            {
                                icon: <FaLightbulb className="text-yellow-600 text-4xl mb-3" />,
                                title: "Innovation & Growth",
                                desc: "Access continuous learning and professional development opportunities."
                            },
                            {
                                icon: <FaChartLine className="text-yellow-600 text-4xl mb-3" />,
                                title: "Career Advancement",
                                desc: "Grow your career with clear paths for progression and recognition."
                            },
                            {
                                icon: <FaHandshake className="text-yellow-600 text-4xl mb-3" />,
                                title: "Impactful Work",
                                desc: "Contribute to projects that make a real difference in communities."
                            }
                        ].map((benefit, idx) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)" }}
                                className="bg-yellow-50 rounded-2xl shadow-lg border-t-4 border-yellow-400 flex flex-col items-center p-8 text-center transition-all duration-300 cursor-pointer hover:shadow-2xl"
                            >
                                {benefit.icon}
                                <h4 className="text-lg font-bold text-yellow-700 mb-2">{benefit.title}</h4>
                                <p className="text-gray-700 text-base">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Company Stats Section */}
                <div className="w-full bg-yellow-600 py-12 flex items-center justify-center mt-8">
                    <div className="max-w-6xl w-full flex flex-col sm:flex-row items-center justify-around gap-8 px-4">
                        <div className="flex flex-col items-center text-white">
                            <FaUsers className="text-4xl mb-2" />
                            <span className="text-3xl font-extrabold">350+</span>
                            <span className="text-lg font-semibold mt-1">Employees</span>
                        </div>
                        <div className="flex flex-col items-center text-white">
                            <FaBuilding className="text-4xl mb-2" />
                            <span className="text-3xl font-extrabold">8</span>
                            <span className="text-lg font-semibold mt-1">Offices</span>
                        </div>
                        <div className="flex flex-col items-center text-white">
                            <FaStar className="text-4xl mb-2" />
                            <span className="text-3xl font-extrabold">4.7</span>
                            <span className="text-lg font-semibold mt-1">Glassdoor Rating</span>
                        </div>
                        <div className="flex flex-col items-center text-white">
                            <FaUserCheck className="text-4xl mb-2" />
                            <span className="text-3xl font-extrabold">92%</span>
                            <span className="text-lg font-semibold mt-1">Employee Retention</span>
                        </div>
                    </div>
                </div>
                {/* Job Openings Section */}
                <div className="w-full py-12 px-4 flex justify-center items-center bg-transparent">
                    <div className="w-full max-w-6xl backdrop-blur-md bg-white/60 rounded-2xl border border-yellow-100 shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-yellow-700 mb-8 text-center border-yellow-700 rounded-lg">Current Job Openings</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FaLaptopCode className="text-yellow-600 text-3xl" />,
                                    title: "Frontend Developer",
                                    dept: "IT & Software",
                                    location: "Lagos",
                                    salary: "₦350,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaHardHat className="text-yellow-600 text-3xl" />,
                                    title: "Site Engineer",
                                    dept: "Construction",
                                    location: "Abuja",
                                    salary: "₦400,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaUserTie className="text-yellow-600 text-3xl" />,
                                    title: "HR Manager",
                                    dept: "Human Resources",
                                    location: "Port Harcourt",
                                    salary: "₦500,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaDraftingCompass className="text-yellow-600 text-3xl" />,
                                    title: "Architect",
                                    dept: "Design & Planning",
                                    location: "Ibadan",
                                    salary: "₦420,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaBuilding className="text-yellow-600 text-3xl" />,
                                    title: "Project Manager",
                                    dept: "Project Management",
                                    location: "Enugu",
                                    salary: "₦600,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaLaptopCode className="text-yellow-600 text-3xl" />,
                                    title: "Backend Developer",
                                    dept: "IT & Software",
                                    location: "Kano",
                                    salary: "₦370,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaUserTie className="text-yellow-600 text-3xl" />,
                                    title: "Recruitment Specialist",
                                    dept: "Human Resources",
                                    location: "Lagos",
                                    salary: "₦320,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaHardHat className="text-yellow-600 text-3xl" />,
                                    title: "Health & Safety Officer",
                                    dept: "Construction",
                                    location: "Abuja",
                                    salary: "₦310,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaDraftingCompass className="text-yellow-600 text-3xl" />,
                                    title: "Urban Planner",
                                    dept: "Design & Planning",
                                    location: "Ibadan",
                                    salary: "₦380,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaBuilding className="text-yellow-600 text-3xl" />,
                                    title: "Facilities Manager",
                                    dept: "Facilities",
                                    location: "Enugu",
                                    salary: "₦410,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaLaptopCode className="text-yellow-600 text-3xl" />,
                                    title: "DevOps Engineer",
                                    dept: "IT & Software",
                                    location: "Kano",
                                    salary: "₦390,000/mo",
                                    type: "Full Time"
                                },
                                {
                                    icon: <FaUserTie className="text-yellow-600 text-3xl" />,
                                    title: "Business Analyst",
                                    dept: "Business Development",
                                    location: "Lagos",
                                    salary: "₦430,000/mo",
                                    type: "Full Time"
                                }
                            ].map((job, idx) => (
                                <motion.div
                                    key={job.title + job.location}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg border-t-4 border-yellow-400 flex flex-col p-6 gap-4 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        {job.icon}
                                        <span className="text-lg font-bold text-yellow-700">{job.title}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-3 text-gray-700 text-sm mb-2">
                                        <span className="inline-flex items-center gap-1"><FaBuilding className="text-yellow-500" /> {job.dept}</span>
                                        <span className="inline-flex items-center gap-1"><FaMapMarkerAlt className="text-yellow-500" /> {job.location}</span>
                                        <span className="inline-flex items-center gap-1"><FaMoneyBillWave className="text-yellow-500" /> {job.salary}</span>
                                        <span className="inline-flex items-center gap-1"><FaClock className="text-yellow-500" /> {job.type}</span>
                                    </div>
                                      <div className="flex justify-center mt-auto">
                                        <a
                                            href="/contact"
                                            className="bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-bold px-6 py-2 rounded-full shadow-xl hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 active:scale-95 transition-all duration-200 text-base focus:outline-none focus:ring-4 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-yellow-700 drop-shadow-lg"
                                            style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
                                            aria-label={`Apply for ${job.title}`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                                Apply
                                            </span>
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* No Matching Role Section */}
                <div className="w-full py-16 px-4 flex justify-center items-center bg-gray-100">
                    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center border border-gray-200">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center">You don’t see the right role?</h3>
                        <p className="text-gray-700 text-base md:text-lg mb-6 text-center">
                            We’re always looking for talented people to join our team. If you don’t see a position that matches your skills, we’d still love to hear from you! Submit your resume and we’ll reach out if a suitable opportunity arises.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-full shadow-md transition-colors duration-200 text-base focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-100"
                            aria-label="Submit Your Resume"
                        >
                            Submit Your Resume
                        </a>
                    </div>
                </div>
                </section>
    );
}
