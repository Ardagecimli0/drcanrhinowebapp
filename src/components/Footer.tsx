"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="pt-24 pb-12 bg-[#0c1015] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Logo and About */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-kalkavan.png"
                alt="Dr. Can Kalkavan Logo"
                width={240}
                height={80}
                className="h-20 w-auto object-contain scale-125 origin-left"
              />
            </div>

            <p className="text-gray-400 text-sm mb-4 max-w-md">
              {t("footer.description")}
            </p>
            <p className="text-gray-500 text-sm">
              {t("footer.copyright")}
            </p>
          </div>

          {/* Right Side - Contact */}
          <div className="flex flex-col md:items-end">
            <div className="space-y-4 inline-flex flex-col items-start">
              {/* Address */}
              <div className="flex items-start gap-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 group-hover:stroke-[#c9a96e] transition-colors">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-gray-300 text-sm group-hover:text-white transition-colors max-w-xs">
                  {t("footer.address")}
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 group-hover:stroke-[#c9a96e] transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:info@drcankalkavan.com"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  info@drcankalkavan.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 group-hover:stroke-[#c9a96e] transition-colors">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+905467633630"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  +90 (546) 763 36 30
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
