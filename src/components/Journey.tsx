"use client";

import { useTranslation } from "@/lib/i18n";

export default function Journey() {
  const { t, tArray } = useTranslation();
  const steps = tArray < string > ("journey.steps");

  // Group steps into rows for mobile layout
  const journeyRows = [
    steps.slice(0, 3),
    steps.slice(3, 6),
    steps.slice(6, 10),
    steps.slice(10, 11),
  ];

  return (
    <section className="pt-8 pb-16 md:py-[100px] bg-[#14151D]">
      <div className="max-w-md mx-auto px-4 md:max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {t("journey.titleLine1")} <br className="hidden md:block" /> {t("journey.titleLine2")}
          </h2>
          <div className="w-24 h-1 bg-[#CBB089] mt-6 rounded-full" />
        </div>

        {/* Mobile Zigzag Layout */}
        <div className="md:hidden space-y-8">
          {journeyRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center gap-4 ${rowIndex === 0 ? 'px-4' :
                rowIndex === 1 ? 'px-2' :
                  rowIndex === 2 ? 'px-0' :
                    'px-8'
                }`}
            >
              {row.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className="flex flex-col items-center text-center group cursor-pointer"
                  style={{ width: row.length === 1 ? '100px' : row.length === 4 ? '80px' : '90px' }}
                >
                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full bg-[#CBB089] mb-2 relative z-10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#CBB089]/50 group-hover:scale-125">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-[#CBB089] opacity-30 transition-all duration-300 group-hover:opacity-70" />
                  </div>
                  {/* Label */}
                  <p className="text-gray-400 text-xs leading-tight transition-colors duration-300 group-hover:text-[#CBB089]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop Layout - Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/10" />

          {/* Steps */}
          <div className="grid grid-cols-11 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative group cursor-pointer">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-[#CBB089] mx-auto mb-3 relative z-10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#CBB089]/50 group-hover:scale-125">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#CBB089] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-8 group-hover:h-8" />
                </div>
                {/* Label */}
                <p className="text-gray-400 text-xs leading-tight transition-colors duration-300 group-hover:text-[#CBB089]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
