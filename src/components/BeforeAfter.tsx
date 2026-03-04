"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

const beforeAfterImages = [
  "/images/before-after/1.png",
  "/images/before-after/2.png",
  "/images/before-after/3.png",
  "/images/before-after/4.png",
  "/images/before-after/5.png",
  "/images/before-after/6.png",
];

export default function BeforeAfter() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? beforeAfterImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="pt-2 pb-12 md:py-[100px]" style={{ backgroundColor: '#14151D' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Carousel */}
          <div className="relative max-w-lg mx-auto w-full order-last lg:order-first">
            <div
              className="overflow-hidden"
              style={{
                borderRadius: '20px',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {beforeAfterImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <Image
                      src={image}
                      alt={`Before & After ${index + 1}`}
                      width={500}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
              aria-label={t("beforeAfter.previous")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
              aria-label={t("beforeAfter.next")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

          </div>

          {/* Right Side - Content (on mobile: centered, above carousel) */}
          <div className="text-center lg:text-left order-first lg:order-last">
            <h4
              className="text-white mb-2"
              style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600 }}
            >
              {t("beforeAfter.titleLine1")}
            </h4>
            <h2
              className="mb-1"
              style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, color: '#C9A983' }}
            >
              {t("beforeAfter.titleLine2")}
            </h2>
            <h3
              className="mb-6"
              style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, color: '#C9A983' }}
            >
              {t("beforeAfter.titleLine3")}
            </h3>
            <div style={{ width: '64px', height: '4px', backgroundColor: '#C9A983', marginBottom: '32px' }} className="mx-auto lg:mx-0" />
            <p
              className="mb-8"
              style={{
                color: 'rgba(156, 163, 175, 1)',
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                lineHeight: '1.8',
              }}
            >
              {t("beforeAfter.description")}
            </p>

            <a
              href={`https://api.whatsapp.com/send?phone=905467633630&text=${encodeURIComponent(t("common.whatsappMessage"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 btn-green text-white font-semibold transition-transform hover:scale-105"
              style={{
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '15px',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("common.freeConsultation")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
