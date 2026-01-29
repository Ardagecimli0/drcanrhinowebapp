"use client";

import Image from "next/image";
import { useState } from "react";
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
  return <span className="text-lg">�️</span>;
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    countryCode: "+90",
  });

  const selectedCountry = countries.find(c => c.code === formData.countryCode) || countries[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=905467633630&text=Name: ${formData.name}, Phone: ${formData.countryCode}${formData.phone}, Email: ${formData.email}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Outer container with border */}
        <div className="rounded-3xl border border-gray-700/50 p-8 md:p-12 bg-[#151b23]/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Get Your Free Consultation
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Fill out the form and we'll contact you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form container with border */}
                <div className="bg-[#1c2530] rounded-xl p-6 border border-gray-600/50 space-y-4">
                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 py-3 rounded-lg bg-[#0c1015] border border-gray-700 min-w-[130px]">
                      {/* Dynamic Flag Icon */}
                      <FlagIcon iso={selectedCountry.iso} />
                      <select
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        className="bg-transparent text-white text-sm focus:outline-none cursor-pointer w-full"
                      >
                        {countries.map((country) => (
                          <option key={`${country.code}-${country.name}`} value={country.code} className="bg-[#0c1015]">
                            {country.code} {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative flex-1">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] py-4 rounded-lg text-white font-bold text-lg transition-colors"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Doctor Images */}
            <div className="relative h-[400px] md:h-[450px]">
              {/* Main Doctor Image */}
              <div className="absolute top-0 right-0 w-[280px] md:w-[320px] h-[350px] md:h-[400px] rounded-2xl overflow-hidden border-4 border-gray-700/50 shadow-2xl group cursor-pointer transition-all duration-300 hover:shadow-[#c9a96e]/20 hover:shadow-2xl">
                <Image
                  src="https://ext.same-assets.com/3003609744/2154221365.webp"
                  alt="Dr. Can Kalkavan"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
