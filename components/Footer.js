"use client";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white pt-14 pb-6 px-4 md:px-0 overflow-hidden">
            {/* Subtle Top Gradient */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-linear-to-b from-yellow-400/20 via-transparent to-transparent z-0" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 relative z-10 border-b border-gray-800 pb-10">
                {/* Company Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 border-b border-gray-800 pb-8 lg:border-b-0 lg:pb-0">
                    <div className="flex items-center gap-3">
                        <span className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-extrabold text-3xl shadow-lg">T</span>
                        <span className="text-2xl font-extrabold tracking-tight font-serif">Tems-Group</span>
                    </div>
                    <p className="text-gray-300 text-base max-w-xs font-light">
                        Building the future, restoring the past. Tems-Group delivers world-class construction, infrastructure, and project management solutions across Nigeria and beyond.
                    </p>
                    <div className="flex gap-3 mt-2">
                        <a href="#" aria-label="Facebook" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors"><FaFacebookF size={22} /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors"><FaLinkedinIn size={22} /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors"><FaTwitter size={22} /></a>
                        <a href="#" aria-label="Instagram" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors"><FaInstagram size={22} /></a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 border-b border-gray-800 pb-8 lg:border-b-0 lg:pb-0">
                    <h4 className="text-lg font-bold text-yellow-400 tracking-wide uppercase">Quick Links</h4>
                    <ul className="space-y-2 text-gray-300 text-base font-light">
                        <li><Link href="/" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors">Services</Link></li>
                        <li><Link href="/projects" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors">Projects</Link></li>
                        <li><Link href="/careers" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 border-b border-gray-800 pb-8 lg:border-b-0 lg:pb-0">
                    <h4 className="text-lg font-bold text-yellow-400 tracking-wide uppercase">Newsletter</h4>
                    <p className="text-gray-400 text-base font-light max-w-xs">
                        Get the latest updates, news, and project highlights from Tems-Group.
                    </p>
                    <form className="w-full max-w-xs flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
                        <input
                            type="email"
                            required
                            placeholder="Your email address"
                            className="w-full px-4 py-2 rounded-full font-thin bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
                        />
                        <Button type="submit" variant="primary" size="sm">
                            Subscribe
                        </Button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                    <h4 className="text-lg font-bold text-yellow-400 tracking-wide uppercase">Contact Us</h4>
                    <ul className="text-gray-300 text-base font-light space-y-2">
                        <li>
                            <span className="block font-medium text-white">Head Office:</span>
                            1234 Tems Avenue, Lagos, Nigeria
                        </li>
                        <li>
                            <span className="block font-medium text-white">Email:</span>
                            <a href="mailto:info@temsgroup.com" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors">info@temsgroup.com</a>
                        </li>
                        <li>
                            <span className="block font-medium text-white">Phone:</span>
                            <a href="tel:+2348000000000" className="hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-500 transition-colors">+234 800 000 0000</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto" />

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center">
                <span>&copy; {new Date().getFullYear()} Tems-Group. All rights reserved.</span>
                <span>
                    Designed & Built by <a href="https://temsgroup.com" className="text-yellow-400 hover:underline">Tems-Group</a>
                </span>
            </div>
        </footer>
    );
}