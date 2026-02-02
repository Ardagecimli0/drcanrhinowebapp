"use client";

import { useTranslation } from "@/lib/i18n";

interface Stat {
  value: string;
  label: string;
}

const statIcons = [
  "/images/stats/operations.svg",
  "/images/stats/years.svg",
  "/images/stats/countries.svg",
  "/images/stats/satisfaction.svg",
];

export default function Stats() {
  const { t, tObject } = useTranslation();

  const stats: Stat[] = [
    tObject<Stat>("stats.operations"),
    tObject<Stat>("stats.years"),
    tObject<Stat>("stats.recommendation"),
    tObject<Stat>("stats.satisfaction"),
  ];

  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-6">
        {/* 'items-stretch' sayesinde tüm kartlar en uzun olanın boyuna eşitlenir */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {stats.map((stat, index) => (
            <div key={index} className="relative group flex">
              {/* Glow Efekti */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c9a96e]/40 to-[#b08d57]/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Ana Kart - 'flex-1' tüm kartların iç alanı doldurmasını ve eşitlenmesini sağlar */}
              <div className="relative flex-1 bg-[#151b23] rounded-2xl p-8 text-center border border-gray-800 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#c9a96e]/30 flex flex-col items-center justify-center">
                <img
                  src={statIcons[index]}
                  alt=""
                  className="w-14 h-14 mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <p className="text-4xl font-bold text-[#c9a96e] mb-4">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}