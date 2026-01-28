"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    countryCode: "+1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=905467633630&text=Name: ${formData.name}, Phone: ${formData.countryCode}${formData.phone}, Email: ${formData.email}`,
      "_blank"
    );
  };

  return (
    <section className="pt-24 pb-12 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Doctor Image */}
        <div className="relative">
          <div className="relative z-10">
            <Image
              src="https://ext.same-assets.com/3003609744/3205493807.webp"
              alt="Op. Dr. Can Kalkavan"
              width={500}
              height={600}
              className="rounded-lg"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-[#151b23]/90 px-6 py-3 rounded-lg">
              <p className="text-white font-semibold">Op. Dr. Can Kalkavan</p>
              <p className="text-gray-400 text-sm">Ear Nose and Throat Specialist</p>
            </div>
          </div>

          {/* Free Consultation Button */}
          <a
            href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 mt-4 w-fit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Free Consultation
          </a>
        </div>

        {/* Right Side - Badges and Form */}
        <div className="space-y-8">
          {/* Certification Badges */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <Image
              src="https://ext.same-assets.com/3003609744/1204301370.png"
              alt="American Society of Plastic Surgeons"
              width={100}
              height={100}
              className="h-20 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/3003609744/768350659.png"
              alt="UEMS"
              width={100}
              height={100}
              className="h-20 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/3003609744/2615260011.jpeg"
              alt="ISAPS"
              width={100}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          {/* Title */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Rhinoplasty in<br />Turkey
            </h1>
            <p className="text-[#c9a96e] text-2xl font-semibold">
              Starting From 2990€
            </p>
          </div>

          {/* Consultation Form */}
          <div className="bg-[#1c2530]/80 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto lg:mx-0">
            <h3 className="text-xl font-semibold text-white mb-2">Free Consultation</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get a personalized rhinoplasty consultation
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500"
                required
              />

              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="px-3 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+90">+90</option>
                  <option value="+33">+33</option>
                  <option value="+49">+49</option>
                  <option value="+966">+966</option>
                  <option value="+971">+971</option>
                </select>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500"
                required
              />

              <button
                type="submit"
                className="w-full btn-green py-4 rounded-lg text-white font-semibold text-lg"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* WhatsApp Float Button */}
          <a
            href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
