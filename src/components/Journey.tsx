"use client";

const steps = [
  "Online Consultation",
  "Arrival In Istanbul",
  "Preoperative Tests",
  "Examination with Op. Dr. Can Kalkavan",
  "Operation Day Planning",
  "Operation",
  "Postoperative Check Up",
  "Splint and Silicone Purchase",
  "Regular Check Ups",
  "Departure",
  "Confidence Renewed",
];

export default function Journey() {
  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How Will Your
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#c9a96e]">
            Rhinoplasty Journey Go?
          </h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-700 hidden md:block" />

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-11 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative group cursor-pointer">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-[#c9a96e] mx-auto mb-3 relative z-10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#c9a96e]/50 group-hover:scale-125">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#c9a96e] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-8 group-hover:h-8" />
                </div>
                {/* Label */}
                <p className="text-gray-400 text-xs leading-tight transition-colors duration-300 group-hover:text-[#c9a96e]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
