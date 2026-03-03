"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

interface Reason {
  title: string;
  description: string;
}

export default function WhyTurkey() {
  const { t, tArray } = useTranslation();
  const reasons = tArray < Reason > ("whyTurkey.reasons");

  return (
    <section style={{ padding: '60px 0', backgroundColor: '#14151D' }}>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .float-card {
          animation: float 4s ease-in-out infinite;
        }
        .float-card-delay-1 { animation: float 4s ease-in-out 0.5s infinite; }
        .float-card-delay-2 { animation: float 4s ease-in-out 1s infinite; }
        .float-card-delay-3 { animation: float 4s ease-in-out 1.5s infinite; }
        .float-card-delay-4 { animation: float 4s ease-in-out 2s infinite; }
      `}</style>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and Image */}
          <div>
            <div className="text-center md:text-left mb-10">
              <h2
                className="leading-tight whitespace-pre-line"
                style={{
                  color: '#9C7E5F',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 900,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  letterSpacing: '0.5px',
                }}
              >
                {t("whyTurkey.title")}
              </h2>
            </div>
            <div
              className="overflow-hidden group cursor-pointer"
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Image
                src="/images/why-turkey.webp"
                alt="Turkey Rhinoplasty"
                width={500}
                height={400}
                className="w-full transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right Side - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const floatClass = [
                "float-card",
                "float-card-delay-1",
                "float-card-delay-2",
                "float-card-delay-3",
                "float-card-delay-4",
              ][index % 5];

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ease-out cursor-pointer hover:-translate-y-3 ${floatClass}`}
                  style={{
                    background: '#1E2029',
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 169, 131, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <h3
                    className="mb-2"
                    style={{
                      color: '#C9A983',
                      fontSize: '20px',
                      fontWeight: 700,
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p style={{ color: 'rgba(209, 213, 219, 1)', fontSize: '15px', lineHeight: '1.7' }}>
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
