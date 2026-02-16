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
            src="/images/logo-kalkavan.png"
            alt="Dr. Can Kalkavan Logo"
            width={240}
            height={80}
            className={`transition-all duration-300 object-contain ${isScrolled ? 'h-20 lg:h-24 w-auto scale-110' : 'h-24 lg:h-28 w-auto scale-125'}`}
          />
        </div>

        {/* CTA Button */}
        <a
          href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-green rounded-lg text-white font-semibold flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'px-6 py-3 text-sm md:text-base' : 'px-8 py-4 text-base md:text-lg'
            }`}
        >
          <span className="hidden sm:inline">{t("header.contactUsNow")}</span>
          <span>{t("header.rhinoplasty")}</span>
        </a>
      </div>
    </header>
  );
}

