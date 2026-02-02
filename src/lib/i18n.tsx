"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
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
    isReady: boolean;
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
    TR: "en",
    DE: "de",
    AT: "de",
    CH: "de",
    ES: "es",
    MX: "es",
    AR: "es",
    CO: "es",
    FR: "fr",
    BE: "fr",
    CA: "fr",
    IT: "it",
    US: "en",
    GB: "en",
    AU: "en",
};

function getNestedValue(obj: unknown, path: string): unknown {
    const keys = path.split(".");
    let current: unknown = obj;

    for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path;
        }
    }

    return current;
}

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState("en");
    const [isReady, setIsReady] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Client-side mount kontrolü
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // IP'ye göre ülkeyi tespit et ve dili ayarla
    useEffect(() => {
        if (!isMounted) return;

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
                setLocale("en");
            } finally {
                setIsReady(true);
            }
        };

        detectCountryAndSetLocale();
    }, [isMounted]);

    const t = useCallback((key: string): string => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return typeof value === "string" ? value : key;
    }, [locale]);

    const tArray = useCallback(<T,>(key: string): T[] => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return Array.isArray(value) ? (value as T[]) : [];
    }, [locale]);

    const tObject = useCallback(<T,>(key: string): T => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return value as T;
    }, [locale]);

    // Hydration uyumsuzluğunu önlemek için SSR'da ve locale hazır olmadan önce render etme
    if (!isMounted) {
        return null;
    }

    return (
        <I18nContext.Provider value={{ t, tArray, tObject, locale, setLocale, isReady }}>
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
