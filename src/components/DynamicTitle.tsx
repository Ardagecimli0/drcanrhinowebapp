"use client";

import { useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

export default function DynamicTitle() {
    const { t } = useTranslation();

    useEffect(() => {
        const title = t("common.siteTitle");
        if (title && title !== "common.siteTitle") {
            document.title = title;
        }
    }, [t]);

    return null;
}
