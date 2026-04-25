"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setSent(false), 3000);
        }, 1500);
    };

    return (
        <section className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-2">
            <div className="max-w-5xl w-full bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 border border-gray-200">
                {/* Contact Info */}
                <div className="flex-1 flex flex-col gap-6 justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-700 mb-2">Contact TEMS-Group</h1>
                        <p className="text-gray-700 mb-6">We’d love to hear from you! Reach out via any channel below or send us a message directly.</p>
                        <div className="flex flex-col gap-4 text-gray-800 text-base">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-yellow-600 text-xl" />
                                <span>Plot 12, Industrial Avenue, Victoria Island, Lagos, Nigeria</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-yellow-600 text-xl" />
                                <a href="tel:+2348001234567" className="hover:underline">+234 800 123 4567</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-yellow-600 text-xl" />
                                <a href="mailto:info@tems-group.com" className="hover:underline">info@tems-group.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaClock className="text-yellow-600 text-xl" />
                                <span>Mon - Fri: 8:00am - 6:00pm</span>
                            </div>
                        </div>
                    </div>
                    {/* Social Links */}
                    <div className="mt-8">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">Connect with us</h2>
                        <div className="flex gap-4">
                            <a href="https://facebook.com/tems-group" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-700 hover:text-yellow-600 text-2xl"><FaFacebook /></a>
                            <a href="https://twitter.com/tems-group" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-700 hover:text-yellow-600 text-2xl"><FaTwitter /></a>
                            <a href="https://instagram.com/tems-group" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-700 hover:text-yellow-600 text-2xl"><FaInstagram /></a>
                            <a href="https://linkedin.com/company/tems-group" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-yellow-600 text-2xl"><FaLinkedin /></a>
                            <a href="https://wa.me/2348001234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-700 hover:text-yellow-600 text-2xl"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="flex-1 bg-white/80 rounded-2xl shadow-md p-6 md:p-8 border border-gray-100 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 bg-white"
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 bg-white"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 bg-white"
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            rows={5}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 bg-white resize-none"
                        />
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                variant="primary"
                                size="md"
                                loading={sending}
                                disabled={sending}
                                className="mt-2"
                            >
                                {sent ? "Message Sent!" : "Send Message"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}