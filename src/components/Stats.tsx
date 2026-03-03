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
    tObject < Stat > ("stats.operations"),
    tObject < Stat > ("stats.years"),
    tObject < Stat > ("stats.recommendation"),
    tObject < Stat > ("stats.satisfaction"),
  ];

  return (
    <section className="pt-16 pb-8 md:py-[100px]" style={{ backgroundColor: '#14151D' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {stats.map((stat, index) => (
            <div key={index} className="relative group flex">
              {/* Glow Effect */}
              <div
                className="absolute -inset-1 rounded-[20px] blur opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: 'linear-gradient(to right, rgba(201,169,131,0.3), rgba(168,144,106,0.3))',
                }}
              />

              {/* Card */}
              <div
                className="relative flex-1 text-center transition-all duration-300 group-hover:-translate-y-2 flex flex-col items-center justify-center"
                style={{
                  background: '#1E2029',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 169, 131, 0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <img
                  src={statIcons[index]}
                  alt=""
                  className="w-14 h-14 mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <p
                  className="mb-4"
                  style={{
                    color: '#C9A983',
                    fontSize: '36px',
                    fontWeight: 800,
                    lineHeight: '1.1',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-medium"
                  style={{
                    color: 'rgba(156, 163, 175, 1)',
                    fontSize: '14px',
                    lineHeight: '1.6',
                  }}
                >
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