"use client";

import { useTranslation } from "@/lib/i18n";

const videos = [
    { id: "GG4GJ-EXStk" },
    { id: "SEKtg-TsSOM" },
    { id: "xaDB3TOi0jU" },
    { id: "_giOJAHYusw" },
];

export default function RhinoplastyBeforeAfterYT() {
    const { t } = useTranslation();

    return (
        <section className="py-8 md:py-[100px]" style={{ backgroundColor: '#14151D' }}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2
                    className="text-center mb-4"
                    style={{
                        color: '#C9A983',
                        fontSize: 'clamp(24px, 3vw, 32px)',
                        fontWeight: 700,
                    }}
                >
                    {t("rhinoplastyBeforeAfterYT.title")}
                </h2>

                {/* Subtitle */}
                <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '16px' }}>
                    {t("rhinoplastyBeforeAfterYT.subtitle")}
                    <br />
                    <span style={{ color: 'rgba(209, 213, 219, 1)' }}>{t("common.doctorName")}</span>
                </p>

                {/* Videos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="relative aspect-[9/16] overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                            style={{
                                borderRadius: '20px',
                                backgroundColor: '#1E2029',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}?loop=1`}
                                title={`Before After Video ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
