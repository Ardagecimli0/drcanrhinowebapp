"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${isScrolled
        ? 'bg-[#0c1015]/95 py-2'
        : 'bg-[#0c1015]/70 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Dr. Can Kalkavan Logo"
            width={70}
            height={70}
            className={`transition-all duration-300 ${isScrolled ? 'h-12 w-auto' : 'h-16 w-auto'}`}
          />
          <div className={`hidden sm:block transition-all duration-300 ${isScrolled ? 'scale-90 origin-left' : 'scale-100'}`}>
            <p className={`text-white font-medium transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}>{t("common.opDr")}</p>
            <p className={`text-white font-bold transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>Can Kalkavan</p>
            <p className={`text-gray-400 transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}>{t("common.specialty")}</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-green rounded-lg text-white font-semibold flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
            }`}
        >
          <span className="hidden sm:inline">{t("header.contactUsNow")}</span>
          <span>{t("header.rhinoplasty")}</span>
        </a>
      </div>
    </header>
  );
}

