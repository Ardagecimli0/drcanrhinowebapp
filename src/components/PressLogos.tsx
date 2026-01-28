"use client";

import Image from "next/image";

const logos = [
  { src: "https://ext.same-assets.com/3003609744/3218832420.svg", alt: "Elle Magazine" },
  { src: "https://ext.same-assets.com/3003609744/2574735864.svg", alt: "Hello Magazine" },
  { src: "https://ext.same-assets.com/3003609744/2280724684.svg", alt: "GQ Magazine" },
  { src: "https://ext.same-assets.com/3003609744/1394845118.svg", alt: "CNN Turk" },
  { src: "https://ext.same-assets.com/3003609744/3094805614.svg", alt: "Vogue Magazine" },
  { src: "https://ext.same-assets.com/3003609744/630536926.svg", alt: "Elele Magazine" },
];

export default function PressLogos() {
  return (
    <section className="py-8 bg-[#0c1015] overflow-hidden border-y border-gray-800">
      <div className="flex animate-marquee">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
