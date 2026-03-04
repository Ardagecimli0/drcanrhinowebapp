import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Rhinoplasty in Turkey - Op. Dr. Can Kalkavan",
  description: "Rhinoplasty in Turkey with Op. Dr. Can Kalkavan. Get the best results with our experienced team. Starting from 2990€. Free consultation available.",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T2TK8S67');
          `}
        </Script>
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
