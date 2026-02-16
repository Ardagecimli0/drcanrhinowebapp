"use client";

import { useEffect } from "react";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";

export default function ThankYouClient({ slug }: { slug: string }) {
    const { t, setLocale } = useTranslation();

    useEffect(() => {
        if (slug) {
            setLocale(slug);
        }
    }, [slug, setLocale]);

    return (
        <div className="min-h-screen bg-[#0c1015] flex flex-col items-center justify-center text-center px-4">
            <div className="bg-[#1c2530] p-8 md:p-12 rounded-2xl border border-gray-700/50 max-w-lg w-full shadow-2xl">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">
                    {t("thankYou.title")}
                </h1>

                <p className="text-gray-400 mb-8 text-lg">
                    {t("thankYou.message")}
                </p>

                <div className="mt-12">
                    <a
                        href="https://api.whatsapp.com/send/?phone=905467633721&text&type=phone_number&app_absent=0"
                        className="inline-block px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20"
                    >
                        {t('thankYou.contactUs')}
                    </a>
                </div>
            </div>
        </div>
    );
}