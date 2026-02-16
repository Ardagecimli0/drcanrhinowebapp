"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "@/lib/i18n";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("tr");
  const { t, locale } = useTranslation();

  // Auto-detect country from IP address
  useEffect(() => {
    const detectCountry = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

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
        setCountryCode("tr");
      }
    };
    detectCountry();
  }, []);

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
      <style jsx global>{`
        .phone-input-container {
          width: 100%;
        }
        
        .phone-input-container .form-control {
          width: 100% !important;
          height: 48px !important;
          background-color: #0c1015 !important;
          border: 1px solid #374151 !important;
          border-radius: 8px !important;
          color: white !important;
          font-size: 16px !important;
          padding-left: 48px !important;
        }
        
        .phone-input-container .form-control:focus {
          border-color: #25D366 !important;
          box-shadow: none !important;
        }
        
        .phone-input-container .form-control::placeholder {
          color: #6b7280 !important;
        }
        
        .phone-input-container .flag-dropdown {
          background-color: #0c1015 !important;
          border: 1px solid #374151 !important;
          border-right: none !important;
          border-radius: 8px 0 0 8px !important;
        }
        
        .phone-input-container .flag-dropdown:hover,
        .phone-input-container .flag-dropdown:focus,
        .phone-input-container .flag-dropdown.open {
          background-color: #1c2530 !important;
        }
        
        .phone-input-container .selected-flag {
          background-color: transparent !important;
          padding: 0 0 0 12px !important;
          width: 42px !important;
        }
        
        .phone-input-container .selected-flag:hover,
        .phone-input-container .selected-flag:focus,
        .phone-input-container .selected-flag.open {
          background-color: transparent !important;
        }
        
        .phone-input-container .selected-flag .flag {
          transform: scale(1.2);
        }
        
        .phone-input-container .selected-flag .arrow {
          border-top-color: #9ca3af !important;
          left: 22px !important;
        }
        
        .phone-input-container .selected-flag .arrow.up {
          border-bottom-color: #9ca3af !important;
        }
        
        .phone-input-container .country-list {
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-radius: 8px !important;
          margin-top: 4px !important;
          max-height: 200px !important;
        }
        
        .phone-input-container .country-list .country {
          color: white !important;
          padding: 10px 12px !important;
        }
        
        .phone-input-container .country-list .country:hover,
        .phone-input-container .country-list .country.highlight {
          background-color: #0c1015 !important;
        }
        
        .phone-input-container .country-list .country .dial-code {
          color: #9ca3af !important;
        }
        
        .phone-input-container .country-list .search {
          background-color: #0c1015 !important;
          border-bottom: 1px solid #374151 !important;
          padding: 10px !important;
        }
        
        .phone-input-container .country-list .search-box {
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-radius: 6px !important;
          color: white !important;
          padding: 8px 12px !important;
          width: 100% !important;
        }
        
        .phone-input-container .country-list .search-box::placeholder {
          color: #6b7280 !important;
        }
        
        .phone-input-container .country-list::-webkit-scrollbar {
          width: 6px;
        }
        
        .phone-input-container .country-list::-webkit-scrollbar-track {
          background: #0c1015;
          border-radius: 3px;
        }
        
        .phone-input-container .country-list::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 3px;
        }
        
        .phone-input-container .country-list::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>

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

                  {/* Phone Input with react-phone-input-2 */}
                  <PhoneInput
                    country={countryCode}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    placeholder={t("contactForm.phonePlaceholder")}
                    enableSearch={true}
                    searchPlaceholder={t("contactForm.searchCountry")}
                    containerClass="phone-input-container"
                  />

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
