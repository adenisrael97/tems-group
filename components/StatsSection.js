"use client";

import { motion } from "framer-motion";
import { FaAward, FaUsers, FaRegSmile, FaHardHat, FaRulerCombined, FaBuilding } from "react-icons/fa";

const stats = [
	{ value: "50+", label: "Years of Experience", icon: FaHardHat },
	{ value: "200+", label: "Projects Completed", icon: FaBuilding },
	{ value: "100%", label: "Client Satisfaction", icon: FaRegSmile },
	{ value: "150+", label: "Skilled Professionals", icon: FaUsers },
	{ value: "300K+", label: "Square Feet Built", icon: FaRulerCombined },
	{ value: "25", label: "Awards Won", icon: FaAward },
];

export default function StatsSection() {
	return (
		<section className="relative py-24 bg-linear-to-b from-gray-100 via-white to-gray-100 overflow-hidden">
			{/* Glassmorphism overlays */}
			<div className="pointer-events-none absolute -top-24 left-0 w-full h-48 bg-linear-to-r from-yellow-100/60 via-white/0 to-yellow-100/60 blur-2xl opacity-60" />
			<div className="pointer-events-none absolute bottom-0 right-0 w-1/2 h-32 bg-linear-to-l from-yellow-100/60 via-white/0 to-yellow-100/60 blur-2xl opacity-60" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="flex flex-col items-center text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-white/70 border border-yellow-300 rounded-full shadow-lg backdrop-blur-md">
						<span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
						<span className="text-yellow-600 text-base font-semibold tracking-wide uppercase">
							Our Impact
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight drop-shadow-lg">
						Building Excellence, Globally Recognized
					</h2>
					<p className="max-w-2xl text-gray-600 text-lg md:text-xl mt-2">
						Trusted by clients and partners worldwide for our commitment to
						quality, innovation, and results.
					</p>
				</motion.div>

				{/* Stats Grid */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.15, delayChildren: 0.2 },
						},
					}}
					className="grid grid-cols-2 md:grid-cols-4 gap-6"
				>
					{stats.slice(0, 4).map((stat) => (
						<motion.div
							key={stat.label}
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: {
									opacity: 1,
									y: 0,
									transition: { duration: 0.6, ease: "easeOut" },
								},
							}}
							whileHover={{
								scale: 1.07,
								boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
							}}
							className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-yellow-500 hover:shadow-yellow-200 hover:shadow-2xl"
						>
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300 shadow-md">
								<stat.icon className="text-yellow-500 text-2xl group-hover:text-black transition-colors duration-300" />
							</div>
							<span className="text-3xl md:text-4xl font-extrabold text-yellow-500 mb-2 group-hover:text-black transition-colors duration-300 drop-shadow">
								{stat.value}
							</span>
							<span className="text-gray-700 text-base md:text-lg font-medium group-hover:text-yellow-600 transition-colors duration-300">
								{stat.label}
							</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}


