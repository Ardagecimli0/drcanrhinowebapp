"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

interface Review {
  text: string;
  name: string;
  country: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, tArray } = useTranslation();
  const testimonials = tArray < Review > ("testimonials.reviews");

  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9a96e] mb-4">
            {t("testimonials.titleLine1")} {t("testimonials.titleLine2")} {t("testimonials.titleLine3")}
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {t("testimonials.description")}
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-green px-8 py-4 rounded-full text-white font-semibold"
          >
            {t("testimonials.ctaButton")}
          </a>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1c2530] rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-[#c9a96e] hover:shadow-lg hover:shadow-[#c9a96e]/10 cursor-pointer"
            >
              <p className="text-gray-300 text-sm mb-4 line-clamp-6">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">
                    {t("common.patient")}: {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.country}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
