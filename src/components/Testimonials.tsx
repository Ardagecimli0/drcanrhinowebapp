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
    <section
      className="relative py-8 md:py-[100px]"
      style={{ backgroundColor: '#14151D' }}
    >
      {/* Subtle glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '500px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(0, 163, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          {/* Left Side - Title, Description, CTA */}
          <div className="lg:sticky lg:top-32 text-center lg:text-left">
            <h2
              className="mb-4 leading-snug"
              style={{
                color: '#C9A983',
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 700,
              }}
            >
              {t("testimonials.titleLine1")} {t("testimonials.titleLine2")} {t("testimonials.titleLine3")}
            </h2>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '14px' }}
            >
              {t("testimonials.description")}
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto btn-green text-white font-semibold"
              style={{
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '15px',
              }}
            >
              {t("testimonials.ctaButton")}
            </a>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="transition-all duration-300 cursor-pointer flex flex-col"
                style={{
                  background: '#1E2029',
                  borderRadius: '20px',
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 169, 131, 0.4)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(201, 169, 131, 0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <p
                  className="mb-4 flex-1 leading-relaxed"
                  style={{
                    color: 'rgba(209, 213, 219, 1)',
                    fontSize: '14px',
                    display: '-webkit-box',
                    WebkitLineClamp: 10,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {testimonial.text}
                </p>
                <div className="mt-auto pt-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <p className="text-white text-sm font-medium">
                    {t("common.patient")}: {testimonial.name} <span className="text-gray-500 ml-1">{testimonial.country}</span>
                  </p>
                  {/* Stars */}
                  <div className="flex mt-1.5" style={{ color: '#C9A983' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
      </div>
    </section>
  );
}
