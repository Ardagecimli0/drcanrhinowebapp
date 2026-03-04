"use client";

import { useTranslation } from "@/lib/i18n";

interface Package {
  title: string;
  features: string[];
}

export default function Packages() {
  const { t, tObject } = useTranslation();

  const packages: Package[] = [
    tObject<Package>("packages.openRhinoplasty"),
    tObject<Package>("packages.pushDownLetDown"),
    tObject<Package>("packages.piezo"),
  ];

  return (
    <section style={{ padding: '0px 0', backgroundColor: '#14151D' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-center mb-6 tracking-wide uppercase"
          style={{
            color: '#C9A983',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '2px',
          }}
        >
          {t("packages.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="card-hover flex flex-col"
              style={{
                background: '#1E2029',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(201, 169, 131, 0.15)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 169, 131, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <h3
                className="text-white mb-8 text-center"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                {pkg.title}
              </h3>
              <ul className="space-y-4 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="pb-4 border-b border-white/10 last:border-0 group">
                    <a
                      href={`https://api.whatsapp.com/send?phone=905467633630&text=${encodeURIComponent(t("common.whatsappMessage"))}`}
                      className="flex items-start gap-3 text-sm cursor-pointer"
                      style={{ color: 'rgba(209, 213, 219, 1)' }}
                    >
                      <span className="mt-1 text-[10px] transition-transform group-hover:scale-125" style={{ color: '#C9A983' }}>●</span>
                      <span className="leading-relaxed group-hover:text-white transition-colors underline underline-offset-4 decoration-white/20">{feature}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={`https://api.whatsapp.com/send?phone=905467633630&text=${encodeURIComponent(t("common.whatsappMessage"))}`}
                rel="noopener noreferrer"
                className="btn-green mt-8 text-white font-semibold text-center flex items-center justify-center gap-2 transition-transform hover:scale-105"
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  fontSize: '15px',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("packages.getMoreInfo")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
