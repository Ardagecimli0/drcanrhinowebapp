"use client";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0c1015] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - About */}
          <div>
            <p className="text-gray-400 text-sm mb-4">
              European Board Certified Plastic Surgeon, specialized in
              Rhinoplasty and Aesthetic Surgery. European Board Ear Nose and
              Throat Specialist.
            </p>
            <p className="text-gray-500 text-sm">
              Copyright © 2025 Op. Dr. Can Kalkavan - All Rights Reserved
            </p>
          </div>

          {/* Right Side - Contact */}
          <div className="text-right">
            <p className="text-gray-400 text-sm mb-2">
              Acıbadem mah. Çeçen sok. Akasya Avm NO:25 B1 blok Kat:7 D:8
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <a
                href="mailto:info@drcankalkavan.com"
                className="hover:text-[#c9a96e] transition"
              >
                info@drcankalkavan.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              <a
                href="tel:+905467633630"
                className="hover:text-[#c9a96e] transition"
              >
                +90 (546) 763 36 30
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
