"use client";

import Image from "next/image";

const reasons = [
  {
    title: "Affordable Prices:",
    description:
      "Turkey offers rhinoplasty at more competitive prices than many European countries, while maintaining high standards of medical care.",
  },
  {
    title: "Geographic Advantage:",
    description:
      "With Istanbul as a global hub, patients can combine surgery with cultural experiences, making the journey both medical and touristic.",
  },
  {
    title: "Advanced Techniques:",
    description:
      "Turkish surgeons are skilled in open, closed, and push-down & let-down rhinoplasty, achieving natural and functional results",
  },
  {
    title: "Cutting-Edge Technology:",
    description:
      "Hospitals use 3D imaging, modern surgical tools, and innovative recovery methods, ensuring safe operations and faster healing.",
  },
];

export default function WhyTurkey() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0c1015] to-[#151b23]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and Image */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Why Choose Turkey<br />
              for Your<br />
              Rhinoplasty?
            </h2>
            <Image
              src="https://ext.same-assets.com/3003609744/2298182881.jpeg"
              alt="Turkey Rhinoplasty"
              width={400}
              height={300}
              className="rounded-xl mx-auto lg:mx-0"
            />
          </div>

          {/* Right Side - Reasons */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-[#1c2530] rounded-xl p-6 border border-gray-700 card-hover"
              >
                <h3 className="text-[#c9a96e] font-semibold text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
