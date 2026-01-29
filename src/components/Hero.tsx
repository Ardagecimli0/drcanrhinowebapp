"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import * as Flags from "country-flag-icons/react/3x2";

const countries = [
  { code: "+90", iso: "TR", name: "Turkey" },
  { code: "+1", iso: "US", name: "USA" },
  { code: "+44", iso: "GB", name: "UK" },
  { code: "+49", iso: "DE", name: "Germany" },
  { code: "+33", iso: "FR", name: "France" },
  { code: "+966", iso: "SA", name: "Saudi Arabia" },
  { code: "+971", iso: "AE", name: "UAE" },
  { code: "+91", iso: "IN", name: "India" },
  { code: "+86", iso: "CN", name: "China" },
  { code: "+81", iso: "JP", name: "Japan" },
  { code: "+82", iso: "KR", name: "South Korea" },
  { code: "+61", iso: "AU", name: "Australia" },
  { code: "+55", iso: "BR", name: "Brazil" },
  { code: "+7", iso: "RU", name: "Russia" },
  { code: "+34", iso: "ES", name: "Spain" },
  { code: "+39", iso: "IT", name: "Italy" },
  { code: "+31", iso: "NL", name: "Netherlands" },
  { code: "+46", iso: "SE", name: "Sweden" },
  { code: "+47", iso: "NO", name: "Norway" },
  { code: "+48", iso: "PL", name: "Poland" },
  { code: "+43", iso: "AT", name: "Austria" },
  { code: "+41", iso: "CH", name: "Switzerland" },
  { code: "+32", iso: "BE", name: "Belgium" },
  { code: "+30", iso: "GR", name: "Greece" },
  { code: "+351", iso: "PT", name: "Portugal" },
  { code: "+380", iso: "UA", name: "Ukraine" },
  { code: "+20", iso: "EG", name: "Egypt" },
  { code: "+212", iso: "MA", name: "Morocco" },
  { code: "+234", iso: "NG", name: "Nigeria" },
  { code: "+27", iso: "ZA", name: "South Africa" },
  { code: "+92", iso: "PK", name: "Pakistan" },
  { code: "+880", iso: "BD", name: "Bangladesh" },
  { code: "+62", iso: "ID", name: "Indonesia" },
  { code: "+60", iso: "MY", name: "Malaysia" },
  { code: "+65", iso: "SG", name: "Singapore" },
  { code: "+66", iso: "TH", name: "Thailand" },
  { code: "+84", iso: "VN", name: "Vietnam" },
  { code: "+63", iso: "PH", name: "Philippines" },
  { code: "+98", iso: "IR", name: "Iran" },
  { code: "+964", iso: "IQ", name: "Iraq" },
  { code: "+972", iso: "IL", name: "Israel" },
  { code: "+962", iso: "JO", name: "Jordan" },
  { code: "+961", iso: "LB", name: "Lebanon" },
  { code: "+974", iso: "QA", name: "Qatar" },
  { code: "+965", iso: "KW", name: "Kuwait" },
  { code: "+968", iso: "OM", name: "Oman" },
  { code: "+973", iso: "BH", name: "Bahrain" },
  { code: "+994", iso: "AZ", name: "Azerbaijan" },
  { code: "+995", iso: "GE", name: "Georgia" },
  { code: "+374", iso: "AM", name: "Armenia" },
  { code: "+52", iso: "MX", name: "Mexico" },
  { code: "+54", iso: "AR", name: "Argentina" },
  { code: "+57", iso: "CO", name: "Colombia" },
  { code: "+56", iso: "CL", name: "Chile" },
  { code: "+51", iso: "PE", name: "Peru" },
];

// Flag component helper
const FlagIcon = ({ iso, className }: { iso: string; className?: string }) => {
  const FlagComponent = (Flags as Record<string, React.ComponentType<{ className?: string }>>)[iso];
  if (FlagComponent) {
    return <FlagComponent className={className || "h-4 w-6 rounded-sm"} />;
  }
  return <span className="text-lg">🏳️</span>;
};

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    countryCode: "+90",
  });
  const [isVisible, setIsVisible] = useState(false);

  // Animate on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const selectedCountry = countries.find(c => c.code === formData.countryCode) || countries[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=905467633630&text=Name: ${formData.name}, Phone: ${formData.countryCode}${formData.phone}, Email: ${formData.email}`,
      "_blank"
    );
  };

  return (
    <section className="pt-24 pb-24 min-h-[85vh] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #12171e 0%, #1a2028 50%, #12171e 100%)' }}>
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
                alt="Op. Dr. Can Kalkavan"
                width={350}
                height={450}
                className="relative z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
                priority
              />
              {/* Name Overlay */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-[#151b23]/95 px-6 py-3 rounded-lg text-center whitespace-nowrap z-20">
                <p className="text-white font-semibold text-base">Op. Dr. Can Kalkavan</p>
                <p className="text-gray-400 text-sm">Ear Nose and Throat Specialist</p>
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
              Free Consultation
            </a>
          </div>

          {/* Middle - Certification Badges */}
          <div className="flex flex-col items-center gap-6 py-8">
            {/* ASPS Logo */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/asps-logo.png"
                alt="American Society of Plastic Surgeons"
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
              <p className="text-gray-400 text-[10px] mt-1 text-center">AMERICAN SOCIETY OF<br />PLASTIC SURGEONS®</p>
            </div>

            {/* UEMS Logo */}
            <Image
              src="/images/uems-logo.png"
              alt="UEMS"
              width={90}
              height={90}
              className="h-20 w-auto object-contain"
            />

            {/* ISAPS Logo */}
            <Image
              src="/images/isaps-logo.png"
              alt="ISAPS"
              width={120}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Right Side - Title and Form */}
          <div className="space-y-4">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                Rhinoplasty in Turkey
              </h1>
              <p className="text-[#c9a96e] text-xl md:text-2xl font-semibold italic">
                Starting From 2990€
              </p>
            </div>

            {/* Consultation Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Free Consultation</h3>
              <p className="text-gray-400 text-sm mb-3">
                Get a personalized rhinoplasty consultation
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
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-3 rounded-lg bg-[#0c1015] border border-gray-700 min-w-[100px]">
                    <FlagIcon iso={selectedCountry.iso} />
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="bg-transparent text-white text-sm focus:outline-none cursor-pointer w-full"
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.code} className="bg-[#0c1015]">
                          {country.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-green py-3 rounded-lg text-white font-semibold text-base tracking-wide hover:opacity-90 transition-opacity"
                >
                  SUBMIT
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