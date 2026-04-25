"use client";
import React from "react";
import Button from "@/components/ui/Button";

const officeAddress = "Plot 12, Industrial Avenue, Victoria Island, Lagos, Nigeria";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Plot+12+Industrial+Avenue+Victoria+Island+Lagos+Nigeria";

export default function MapSection() {
    return (
        <div className="w-full flex flex-col items-center gap-8 py-10">
            {/* Heading above map */}
            <div className="w-full flex justify-center mb-4">
                <div className="backdrop-blur-md bg-white/60 rounded-xl px-8 py-4 shadow text-center border border-yellow-100 max-w-lg w-full">
                    <h2 className="text-1xl font-extrabold text-yellow-700 tracking-wide">Our Office Location</h2>
                </div>
            </div>
            {/* Full width map */}
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200" style={{ minHeight: "450px", height: "85vh" }}>
                <iframe
                    title="TEMS-Group Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9999999999995!2d3.421998!3d6.428055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c1e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sPlot+12+Industrial+Avenue%2C+Victoria+Island%2C+Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(mapsUrl, "_blank")}
                aria-label="Open office location in Google Maps"
            >
                {officeAddress}
            </Button>
        </div>
    );
}
