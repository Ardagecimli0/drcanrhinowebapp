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
  const { t, locale } = useTranslation();

  // Auto-detect country from IP address
  useEffect(() => {
    const initCountry = async () => {
      const result = await fetchCountryByIP();
      if (result) {
        setCountryCode(result.dialCode);
        setSelectedIso(result.countryCode);
      }
    };
    initCountry();
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIso = e.target.value;
    setSelectedIso(newIso);
    if (countryToDialCode[newIso]) {
      setCountryCode(countryToDialCode[newIso]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to send to the API
    const slug = locale;
    const payload = {
      name: name,
      phone: `${countryCode}${phone}`,
      email: email,
      lead_source: "Google/Web Form",
      language: locale.toUpperCase(),
      source_language: locale.toUpperCase(),
      ip: "",
      doctor: "Dr. Can Kalkavan",
      interest: ["Rhinoplasty"],
      procedure: [],
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
    <section className="py-16 bg-[#0c1015]">
      {/* Custom styles for react-phone-input-2 */}


      <div className="max-w-6xl mx-auto px-4">
        {/* Outer container with border */}
        <div className="rounded-3xl border border-gray-700/50 p-8 md:p-12 bg-[#151b23]/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t("contactForm.title")}
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                {t("contactForm.subtitle")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form container with border */}
                <div className="bg-[#1c2530] rounded-xl p-6 border border-gray-600/50 space-y-4">
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
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex gap-3">
                    <div className="relative w-[140px] flex-shrink-0 group">
                      {/* Visual Fake Input (Background & Border) */}
                      <div className="absolute inset-0 bg-[#0c1015] border border-gray-700 rounded-lg group-focus-within:border-[#25D366] transition-colors pointer-events-none z-10 flex items-center pl-12 pr-8 text-white">
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
                          <option key={iso} value={iso} className="bg-[#0c1015] text-white">
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
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
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
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] py-4 rounded-lg text-white font-bold text-lg transition-colors"
                  >
                    {t("common.submit")}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Doctor Images */}
            <div className="relative h-[400px] md:h-[450px]">
              {/* Main Doctor Image */}
              <div className="absolute top-0 right-0 w-[280px] md:w-[320px] h-[350px] md:h-[400px] rounded-2xl overflow-hidden border-4 border-gray-700/50 shadow-2xl group cursor-pointer transition-all duration-300 hover:shadow-[#c9a96e]/20 hover:shadow-2xl">
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
