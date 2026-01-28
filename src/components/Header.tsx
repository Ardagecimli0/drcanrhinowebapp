"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c1015]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="https://ext.same-assets.com/3003609744/689426096.png"
            alt="Dr. Can Kalkavan Logo"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <p className="text-white text-sm font-medium">Op. Dr.</p>
            <p className="text-white text-lg font-bold">Can Kalkavan</p>
            <p className="text-gray-400 text-xs">Ear Nose and Throat Specialist</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-green px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2"
        >
          <span className="hidden sm:inline">Contact us now for</span>
          <span>Rhinoplasty!</span>
        </a>
      </div>
    </header>
  );
}
