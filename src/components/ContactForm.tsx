"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchCountryByIP, countryToDialCode, countryNames } from "@/lib/getIp";
import * as Flags from 'country-flag-icons/react/3x2';
import { useTranslation } from "@/lib/i18n";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+90");
  const [selectedIso, setSelectedIso] = useState("TR");
  const [countryName, setCountryName] = useState("Turkey");
  const { t, locale } = useTranslation();

  // Auto-detect country from IP address
  useEffect(() => {
    const initCountry = async () => {
      const result = await fetchCountryByIP();
      if (result) {
        setCountryCode(result.dialCode);
        setSelectedIso(result.countryCode);
        setCountryName(result.countryName);
      }
    };
    initCountry();
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIso = e.target.value;
    setSelectedIso(newIso);
    setCountryName(countryNames[newIso] || newIso);
    if (countryToDialCode[newIso]) {
      setCountryCode(countryToDialCode[newIso]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const languageNames: Record<string, string> = {
      en: "English", de: "German", fr: "French", it: "Italian",
      ar: "Arabic", tr: "Turkish", es: "Spanish", nl: "Dutch",
      pt: "Portuguese", sv: "Swedish", ru: "Russian", pl: "Polish"
    };
    const langName = languageNames[locale.toLowerCase()] || locale.toUpperCase();

    // Prepare the data to send to the API
    const slug = locale;
    const payload = {
      name: name,
      phone: `${countryCode}${phone}`,
      email: email,
      lead_source: "Google/Web Form",
      language: langName,
      source_language: langName,
      country: countryName,
      Country: countryName,
      country_name: countryName,
      ip: "",
      doctor: "Op. Dr. Can Kalkavan",
      interest: ["Aesthetics"],
      procedure: ["Rhinoplasty"],
      utm_source: "",
      utm_medium: "",
      utm_keyword: "",
      utm_matchtype: "",
      utm_network: "",
      gclid: "",
    };

    console.log("Sending to Zoho:", payload);

    try {
      // Submit the form data to the API
      const response = await fetch(`https://cevre.hotelistan.net/api/form-patient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Zoho response status:", response.status);

      if (!response.ok) {
        throw new Error(`API returned status: ${response.status}`);
      }

      // Redirect to thank you page with localized URL
      window.location.href = `/${slug}/thank-you`;
    } catch (error) {
      console.error("API isteği başarısız:", error);
      // Optionally show an error message to the user
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <section id="contact-form" className="pt-8 pb-16 md:py-[100px] bg-[#14151D]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Outer container with border */}
        <div className="rounded-3xl border border-white/10 p-8 md:p-12 bg-[#1a1b26]/50">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Form */}
            <div className="w-full text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                {t("contactForm.title")}
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                {t("contactForm.subtitle")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Form container with border */}
                <div className="bg-[#1e2030] rounded-xl p-6 border border-white/10 space-y-4">
                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder={t("contactForm.namePlaceholder")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-lg bg-[#14151D] border border-gray-700/50 text-white placeholder-gray-500 focus:border-[#CBB089] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex gap-3">
                    <div className="relative w-[90px] sm:w-[110px] flex-shrink-0 group">
                      {/* Visual Fake Input (Background & Border) */}
                      <div className="absolute inset-0 bg-[#14151D] border border-gray-700/50 rounded-lg group-focus-within:border-[#CBB089] transition-colors pointer-events-none z-10 flex items-center pl-10 pr-2 text-white">
                        {countryToDialCode[selectedIso]}
                      </div>

                      {/* Arrow Icon */}
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Flag Icon */}
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        {Flags[selectedIso as keyof typeof Flags] ? (
                          <div className="w-6 h-4">
                            {(() => {
                              const Flag = Flags[selectedIso as keyof typeof Flags];
                              return <Flag />;
                            })()}
                          </div>
                        ) : (
                          <span className="w-6 h-4 block bg-gray-600 rounded-sm"></span>
                        )}
                      </div>

                      {/* Invisible Select (Interaction Layer) */}
                      <select
                        value={selectedIso}
                        onChange={handleCountryChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30 appearance-none bg-transparent"
                      >
                        {Object.keys(countryToDialCode).sort().map((iso) => (
                          <option key={iso} value={iso} className="bg-[#14151D] text-white">
                            {countryNames[iso] || iso} ({countryToDialCode[iso]})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative flex-1">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t("contactForm.phonePlaceholder")}
                        className="w-full pl-10 pr-4 py-4 rounded-lg bg-[#14151D] border border-gray-700/50 text-white placeholder-gray-500 focus:border-[#CBB089] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder={t("contactForm.emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-lg bg-[#14151D] border border-gray-700/50 text-white placeholder-gray-500 focus:border-[#CBB089] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-green py-4 rounded-lg text-white font-bold text-lg"
                  >
                    {t("common.submit")}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Doctor Images */}
            <div className="relative w-full flex justify-center lg:justify-end lg:h-[450px]">
              {/* Main Doctor Image */}
              <div className="relative w-[300px] md:w-[320px] h-[380px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 md:border md:border-white/10 hover:shadow-[#CBB089]/20 hover:shadow-2xl">
                <Image
                  src="/images/contact-form-bg.webp"
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
