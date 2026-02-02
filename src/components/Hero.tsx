"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "@/lib/i18n";

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("tr");
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Animate on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-detect country from IP address
  useEffect(() => {
    const detectCountry = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 saniye timeout

      try {
        const response = await fetch("http://ip-api.com/json/?fields=countryCode", {
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          if (data.countryCode) {
            setCountryCode(data.countryCode.toLowerCase());
          }
        }
      } catch {
        // Hata durumunda sessizce varsayılan değeri kullan
        setCountryCode("tr");
      }
    };
    detectCountry();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=905467633630&text=Name: ${name}, Phone: +${phone}, Email: ${email}`,
      "_blank"
    );
  };

  return (
    <section className="pt-24 pb-24 min-h-[85vh] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #12171e 0%, #1a2028 50%, #12171e 100%)' }}>
      {/* Custom styles for react-phone-input-2 */}
      <style jsx global>{`
        .hero-phone-input {
          width: 100%;
        }
        
        .hero-phone-input .form-control {
          width: 100% !important;
          height: 48px !important;
          background-color: #0c1015 !important;
          border: 1px solid #374151 !important;
          border-radius: 8px !important;
          color: white !important;
          font-size: 16px !important;
          padding-left: 48px !important;
        }
        
        .hero-phone-input .form-control:focus {
          border-color: #25D366 !important;
          box-shadow: none !important;
        }
        
        .hero-phone-input .form-control::placeholder {
          color: #6b7280 !important;
        }
        
        .hero-phone-input .flag-dropdown {
          background-color: #0c1015 !important;
          border: 1px solid #374151 !important;
          border-right: none !important;
          border-radius: 8px 0 0 8px !important;
        }
        
        .hero-phone-input .flag-dropdown:hover,
        .hero-phone-input .flag-dropdown:focus,
        .hero-phone-input .flag-dropdown.open {
          background-color: #1c2530 !important;
        }
        
        .hero-phone-input .selected-flag {
          background-color: transparent !important;
          padding: 0 0 0 12px !important;
          width: 42px !important;
        }
        
        .hero-phone-input .selected-flag:hover,
        .hero-phone-input .selected-flag:focus,
        .hero-phone-input .selected-flag.open {
          background-color: transparent !important;
        }
        
        .hero-phone-input .selected-flag .flag {
          transform: scale(1.2);
        }
        
        .hero-phone-input .selected-flag .arrow {
          border-top-color: #9ca3af !important;
          left: 22px !important;
        }
        
        .hero-phone-input .selected-flag .arrow.up {
          border-bottom-color: #9ca3af !important;
        }
        
        .hero-phone-input .country-list {
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-radius: 8px !important;
          margin-top: 4px !important;
          max-height: 200px !important;
        }
        
        .hero-phone-input .country-list .country {
          color: white !important;
          padding: 10px 12px !important;
        }
        
        .hero-phone-input .country-list .country:hover,
        .hero-phone-input .country-list .country.highlight {
          background-color: #0c1015 !important;
        }
        
        .hero-phone-input .country-list .country .dial-code {
          color: #9ca3af !important;
        }
        
        .hero-phone-input .country-list .search {
          background-color: #0c1015 !important;
          border-bottom: 1px solid #374151 !important;
          padding: 10px !important;
        }
        
        .hero-phone-input .country-list .search-box {
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-radius: 6px !important;
          color: white !important;
          padding: 8px 12px !important;
          width: 100% !important;
        }
        
        .hero-phone-input .country-list .search-box::placeholder {
          color: #6b7280 !important;
        }
        
        .hero-phone-input .country-list::-webkit-scrollbar {
          width: 6px;
        }
        
        .hero-phone-input .country-list::-webkit-scrollbar-track {
          background: #0c1015;
          border-radius: 3px;
        }
        
        .hero-phone-input .country-list::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 3px;
        }
        
        .hero-phone-input .country-list::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>

      <div
        className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
      >
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Left Side - Doctor Image */}
          <div className="relative flex flex-col items-center">
            <div className="relative">
              {/* Doctor Image */}
              <Image
                src="/images/doctor.png"
                alt={t("common.doctorName")}
                width={350}
                height={450}
                className="relative z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
                priority
              />
              {/* Name Overlay */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-[#151b23]/95 px-6 py-3 rounded-lg text-center whitespace-nowrap z-20">
                <p className="text-white font-semibold text-base">{t("common.doctorName")}</p>
                <p className="text-gray-400 text-sm">{t("common.specialty")}</p>
              </div>
            </div>

            {/* Free Consultation Button */}
            <a
              href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green px-8 py-3 rounded-full text-white font-semibold flex items-center gap-3 mt-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("common.freeConsultation")}
            </a>
          </div>

          {/* Middle - Certification Badges */}
          <div className="flex flex-row lg:flex-col items-center justify-center gap-6 lg:gap-6 py-4 lg:py-6">
            {/* ASPS Logo */}
            <Image
              src="/images/asps-logo.png"
              alt="American Society of Plastic Surgeons"
              width={160}
              height={160}
              className="h-14 lg:h-24 w-auto object-contain"
            />

            {/* UEMS Logo */}
            <Image
              src="/images/uems-logo.png"
              alt="UEMS"
              width={180}
              height={180}
              className="h-16 lg:h-28 w-auto object-contain"
            />

            {/* ISAPS Logo */}
            <Image
              src="/images/isaps-logo.png"
              alt="ISAPS"
              width={180}
              height={90}
              className="h-14 lg:h-20 w-auto object-contain"
            />
          </div>

          {/* Right Side - Title and Form */}
          <div className="space-y-4">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-[#c9a96e] text-xl md:text-2xl font-semibold italic">
                {t("hero.startingFrom")}
              </p>
            </div>

            {/* Consultation Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{t("common.freeConsultation")}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {t("hero.consultationSubtitle")}
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-[#1c2530]/90 backdrop-blur-sm rounded-xl p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder={t("hero.namePlaceholder")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Phone Input with react-phone-input-2 */}
                <PhoneInput
                  country={countryCode}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  placeholder={t("hero.phonePlaceholder")}
                  enableSearch={true}
                  searchPlaceholder={t("hero.searchCountry")}
                  containerClass="hero-phone-input"
                />

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder={t("hero.emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-green py-3 rounded-lg text-white font-semibold text-base tracking-wide hover:opacity-90 transition-opacity"
                >
                  {t("common.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
}