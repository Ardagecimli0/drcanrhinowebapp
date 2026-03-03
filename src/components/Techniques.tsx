"use client";

import { useTranslation } from "@/lib/i18n";

const techniqueIcons = [
  "/images/techniques/closed.svg",
  "/images/techniques/preservation.svg",
  "/images/techniques/ultrasonic.svg",
  "/images/techniques/revision.svg",
];

export default function Techniques() {
  const { t, tArray } = useTranslation();
  const techniques = tArray < string > ("techniques.items");

  return (
    <section style={{ padding: '100px 0 40px 0', backgroundColor: '#14151D' }}>
      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .float-icon {
          animation: float 3s ease-in-out infinite;
        }
        .float-icon-delay-1 {
          animation: float 3s ease-in-out 0.4s infinite;
        }
        .float-icon-delay-2 {
          animation: float 3s ease-in-out 0.8s infinite;
        }
        .float-icon-delay-3 {
          animation: float 3s ease-in-out 1.2s infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-white text-center mb-4"
          style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700 }}
        >
          {t("techniques.title")}
        </h2>
        <div style={{ width: '64px', height: '4px', backgroundColor: '#C9A983', margin: '0 auto 64px' }} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {techniques.map((technique, index) => {
            const floatClass = [
              "float-icon",
              "float-icon-delay-1",
              "float-icon-delay-2",
              "float-icon-delay-3",
            ][index] || "float-icon";

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Circular icon container matching reference */}
                <div
                  className={`${floatClass} w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-5 relative transition-all duration-300`}
                  style={{
                    background: 'linear-gradient(145deg, #1E2029, #191a24)',
                    boxShadow: '6px 6px 16px rgba(0,0,0,0.4), -4px -4px 12px rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Inner subtle ring */}
                  <div
                    className="absolute inset-2 rounded-full pointer-events-none"
                    style={{
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  />
                  <img
                    src={techniqueIcons[index]}
                    alt={technique}
                    className="w-12 h-12 md:w-14 md:h-14 opacity-90 transition-all duration-300 group-hover:opacity-100 relative z-10"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <p
                  className="font-medium transition-colors duration-300 group-hover:text-white"
                  style={{ color: 'rgba(209, 213, 219, 1)', fontSize: 'clamp(13px, 1.2vw, 16px)' }}
                >
                  {technique}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
