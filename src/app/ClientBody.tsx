"use client";

import { I18nProvider } from "@/lib/i18n";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2TK8S67"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <I18nProvider>
        {children}
      </I18nProvider>
    </body>
  );
}
