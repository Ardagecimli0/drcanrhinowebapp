"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import enRhino from "@/locales/en-rhino.json";
import deRhino from "@/locales/de-rhino.json";
import esRhino from "@/locales/es-rhino.json";
import frRhino from "@/locales/fr-rhino.json";
import itRhino from "@/locales/it-rhino.json";

type TranslationData = typeof enRhino;

interface I18nContextType {
    t: (key: string) => string;
    tArray: <T>(key: string) => T[];
    tObject: <T>(key: string) => T;
    locale: string;
    setLocale: (locale: string) => void;
}

const I18nContext = createContext < I18nContextType | undefined > (undefined);

const translations: Record<string, TranslationData> = {
    en: enRhino,
    de: deRhino,
    es: esRhino,
    fr: frRhino,
    it: itRhino,
};

// Ülke kodu -> Dil kodu haritası
const countryToLocale: Record<string, string> = {
    TR: "en", // Türkiye için İngilizce (tr dosyası yoksa)
    DE: "de", // Almanya
    AT: "de", // Avusturya
    CH: "de", // İsviçre (Almanca)
    ES: "es", // İspanya
    MX: "es", // Meksika
    AR: "es", // Arjantin
    CO: "es", // Kolombiya
    FR: "fr", // Fransa
    BE: "fr", // Belçika (Fransızca)
    CA: "fr", // Kanada (Fransızca)
    IT: "it", // İtalya
    US: "en", // Amerika
    GB: "en", // İngiltere
    AU: "en", // Avustralya
};

function getNestedValue(obj: unknown, path: string): unknown {
    const keys = path.split(".");
    let current: unknown = obj;

    for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path; // Return the key if not found
        }
    }

    return current;
}

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState("en");
    const [isLoading, setIsLoading] = useState(true);

    // IP'ye göre ülkeyi tespit et ve dili ayarla
    useEffect(() => {
        const detectCountryAndSetLocale = async () => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);

            try {
                const response = await fetch("https://ipapi.co/json/", {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);

                if (response.ok) {
                    const data = await response.json();
                    if (data.country_code) {
                        const detectedLocale = countryToLocale[data.country_code] || "en";
                        setLocale(detectedLocale);
                    }
                }
            } catch {
                // Hata durumunda sessizce varsayılan değeri kullan
                setLocale("en");
            } finally {
                setIsLoading(false);
            }
        };

        detectCountryAndSetLocale();
    }, []);

    const t = (key: string): string => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return typeof value === "string" ? value : key;
    };

    const tArray = <T,>(key: string): T[] => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return Array.isArray(value) ? (value as T[]) : [];
    };

    const tObject = <T,>(key: string): T => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return value as T;
    };

    return (
        <I18nContext.Provider value={{ t, tArray, tObject, locale, setLocale }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useTranslation must be used within an I18nProvider");
    }
    return context;
}
