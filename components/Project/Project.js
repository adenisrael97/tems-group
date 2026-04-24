"use client";
import { FaBuilding, FaHome, FaRoad, FaWarehouse, FaTools, FaCity, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaClock, FaSmile, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
function StatCounter({ to, duration = 2 }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start;
    let frame;
    function animateCount(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) {
        frame = requestAnimationFrame(animateCount);
      } else {
        setValue(to);
      }
    }
    frame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frame);
  }, [to, duration]);
  return <span>{value.toLocaleString()}</span>;
}


const projectTypes = [
  { type: "Commercial", icon: <FaBuilding className="text-yellow-600 text-xl" />, link: "/projects/commercial" },
  { type: "Residential", icon: <FaHome className="text-yellow-600 text-xl" />, link: "/projects/residential" },
  { type: "Infrastructure", icon: <FaRoad className="text-yellow-600 text-xl" />, link: "/projects/infrastructure" },
  { type: "Industrial", icon: <FaWarehouse className="text-yellow-600 text-xl" />, link: "/projects/industrial" },
  { type: "Renovation", icon: <FaTools className="text-yellow-600 text-xl" />, link: "/projects/renovation" },
  { type: "Urban", icon: <FaCity className="text-yellow-600 text-xl" />, link: "/projects/urban" },
];

const projects = Array.from({ length: 20 }).map((_, i) => {
  const typeIdx = i % projectTypes.length;
  const year = 2005 + (i % 20);
  const cost = (2 + i) * 1.5;
  return {
    id: i + 1,
    name: `${projectTypes[typeIdx].type} Project ${i + 1}`,
    type: projectTypes[typeIdx].type,
    icon: projectTypes[typeIdx].icon,
    link: projectTypes[typeIdx].link,
    image: `/image/project${(i % 6) + 1}.jpg`,
    location: ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Enugu"][i % 6],
    year,
    cost: `₦${cost.toFixed(1)}B`,
  };
});

const FILTERS = [
  { label: "ALL", value: "ALL" },
  { label: "COMMERCIAL", value: "Commercial" },
  { label: "RESIDENTIAL", value: "Residential" },
  { label: "INFRASTRUCTURE", value: "Infrastructure" },
  { label: "INDUSTRIAL", value: "Industrial" },
];

export default function Project() {
  const [filter, setFilter] = useState("ALL");
  const filteredProjects = filter === "ALL" ? projects : projects.filter(p => p.type === filter);

  return (
    <section className="w-full">
      {/* Transparent heading */}
      <div className="w-full flex justify-center items-center py-12 bg-linear-to-r from-yellow-100/60 via-white/30 to-yellow-100/60 backdrop-blur-md">
        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-700 uppercase tracking-widest drop-shadow-lg">Our Portfolio</h1>
      </div>


      {/* Full-width colored content */}
      <div className="w-full bg-yellow-50 py-8 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-700 mb-3">Building Excellence, Project by Project</h2>
          <p className="text-gray-800 text-base md:text-lg font-medium">
            At TEMS-Group, our portfolio showcases a legacy of quality, innovation, and impact. From landmark commercial developments to vital infrastructure and inspiring residential communities, each project reflects our commitment to excellence and client satisfaction. Explore our diverse achievements and discover how we transform visions into reality across Nigeria and beyond.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="w-full flex justify-center items-center py-4 bg-white sticky top-0 z-10">
        <div className="flex gap-3 flex-wrap">
          {FILTERS.map(btn => (
            <motion.button
              key={btn.value}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-bold border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-700 text-sm shadow-sm
                ${filter === btn.value ? 'bg-yellow-600 text-white border-yellow-600' : 'bg-yellow-50 text-yellow-700 border-yellow-300 hover:bg-yellow-100'}`}
              onClick={() => setFilter(btn.value)}
              aria-pressed={filter === btn.value}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="w-full bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-yellow-50 rounded-2xl shadow-lg border-t-4 border-yellow-400 flex flex-col overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-40">
                <Image
                  src={proj.image}
                  alt={proj.name + ' image'}
                  className="object-cover w-full h-full"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                  priority={idx < 4}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {proj.icon}
                  <span className="font-bold text-yellow-700 text-base">{proj.type}</span>
                </div>
                <div className="font-semibold text-lg text-black mb-1">{proj.name}</div>
                <div className="flex items-center text-gray-700 text-sm mb-1 gap-2">
                  <FaMapMarkerAlt className="text-yellow-500" /> {proj.location}
                </div>
                <div className="flex items-center text-gray-700 text-sm mb-1 gap-2">
                  <FaCalendarAlt className="text-yellow-500" /> {proj.year}
                </div>
                <div className="flex items-center text-gray-700 text-sm mb-3 gap-2">
                  <FaMoneyBillWave className="text-yellow-500" /> {proj.cost}
                </div>
                <a
                  href={proj.link}
                  className="mt-auto inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-5 py-2 rounded-full shadow transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-700"
                  aria-label={`View more ${proj.type} projects`}
                >
                  View {proj.type} Projects
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Stats Section */}
      <div className="w-full h-60 bg-yellow-600 flex items-center justify-center mt-8">
        <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center justify-around gap-8 px-4">
          <div className="flex flex-col items-center text-white">
            <FaTrophy className="text-4xl mb-2" />
            <span className="text-3xl font-extrabold">
              <StatCounter to={250} duration={2} />
            </span>
            <span className="text-lg font-semibold mt-1">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <FaMoneyBillWave className="text-4xl mb-2" />
            <span className="text-3xl font-extrabold">
              ₦<StatCounter to={120} duration={2.5} />B
            </span>
            <span className="text-lg font-semibold mt-1">Total Project Value</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <FaClock className="text-4xl mb-2" />
            <span className="text-3xl font-extrabold">
              <StatCounter to={98} duration={2.2} />%
            </span>
            <span className="text-lg font-semibold mt-1">On-Time Delivery</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <FaSmile className="text-4xl mb-2" />
            <span className="text-3xl font-extrabold">
              <StatCounter to={99} duration={2.3} />%
            </span>
            <span className="text-lg font-semibold mt-1">Customer Satisfaction</span>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="w-full bg-gray-200 py-12 flex items-center justify-center">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center gap-6 px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center">Let’s create something together</h2>
          <a
            href="/contact"
              className="inline-block bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-600 text-white font-bold px-6 py-2 rounded-full shadow-xl hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 active:scale-95 transition-all duration-200 text-base focus:outline-none focus:ring-4 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-yellow-700 drop-shadow-lg"
            style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
            aria-label="Start Your Project"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Start Your Project
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}