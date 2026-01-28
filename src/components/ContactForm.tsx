"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
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
    <section className="py-16 bg-[#1c2530]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Get Your Free Consultation
            </h2>
            <p className="text-gray-400 mb-8">
              Fill out the form and we'll contact you shortly
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500"
                required
              />

              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) =>
                    setFormData({ ...formData, countryCode: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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

          {/* Right Side - Doctor Images */}
          <div className="relative">
            <Image
              src="https://ext.same-assets.com/3003609744/2154221365.webp"
              alt="Dr. Can Kalkavan"
              width={500}
              height={400}
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
