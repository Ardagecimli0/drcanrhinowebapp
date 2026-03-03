"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export default function HospitalHotel() {
  const { t } = useTranslation();

  // Referans renk kodu
  const goldColor = "#C9A983";

  return (
    <section className="py-12 md:py-[100px] relative overflow-hidden" style={{ backgroundColor: '#14151D' }}>
      {/* Arka Plan Glow Efekti (Referans sitedeki gibi derinlik sağlar) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${goldColor} 0%, transparent 70%)`,
          filter: 'blur(60px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Hospital Card */}
          <div
            className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
            style={{
              borderRadius: '24px',
              border: `1px solid rgba(201, 169, 131, 0.2)`, // Gold renginin hafif transparan hali
              backgroundColor: '#161821',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/images/hospital.jpg"
                alt="Istanbul Baskent University Hospital"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span
                  className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-white"
                  style={{
                    background: goldColor,
                    borderRadius: '50px',
                    boxShadow: `0 4px 15px rgba(201, 169, 131, 0.4)`
                  }}
                >
                  {t("hospitalHotel.hospital")}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-sm uppercase tracking-[3px] mb-2" style={{ color: goldColor }}>
                {t("hospitalHotel.hospitalTitle")}
              </h3>
              <p className="text-2xl font-bold text-white tracking-tight">
                Istanbul Baskent University Hospital
              </p>
            </div>
          </div>

          {/* Hotel Card */}
          <div
            className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
            style={{
              borderRadius: '24px',
              border: `1px solid rgba(201, 169, 131, 0.2)`,
              backgroundColor: '#161821',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/images/hotel.png"
                alt="Istanbul Mercure Hotel"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span
                  className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-white"
                  style={{
                    background: goldColor,
                    borderRadius: '50px',
                    boxShadow: `0 4px 15px rgba(201, 169, 131, 0.4)`
                  }}
                >
                  {t("hospitalHotel.hotel")}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-sm uppercase tracking-[3px] mb-2" style={{ color: goldColor }}>
                {t("hospitalHotel.hotelTitle")}
              </h3>
              <p className="text-2xl font-bold text-white tracking-tight">
                Istanbul Mercure Hotel
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}