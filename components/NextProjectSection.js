"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function NextProjectSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white shadow-xl p-8 sm:p-12 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-yellow-500/20 border-2 border-yellow-500 rounded-full shadow-md"
        >
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          <span className="text-yellow-600 text-sm font-semibold tracking-wide uppercase">
            Your Next Project
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4"
        >
          Ready to Build Something Exceptional?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8"
        >
          At <span className="font-bold text-yellow-500">Tems Group</span>, we turn your vision into reality. Whether it’s a residential masterpiece, a commercial complex, or an infrastructure project, our team delivers with precision, safety, and excellence. Let’s make your next project our best yet.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <Button href="/contact" variant="primary" size="lg">
            Start Your Project
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Get Free Estimate
          </Button>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 w-32 h-1 bg-yellow-500 rounded-full mx-auto"
        />

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-gray-400 text-sm"
        >
          Tems Group Construction • Excellence in Every Project
        </motion.p>
      </div>
    </section>
  );
}
