"use client";

import { I18nProvider } from "@/lib/i18n";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <I18nProvider>
        {children}
      </I18nProvider>
    </body>
  );
}
