"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export default function HospitalHotel() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hospital Card */}
          <div className="relative rounded-xl overflow-hidden card-hover">
            <Image
              src="/images/hospital.jpg"
              alt={t("hospitalHotel.hospitalName")}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="badge-hospital px-4 py-2 rounded-full text-white text-sm font-semibold">
                {t("hospitalHotel.hospital")}
              </span>
            </div>
            <div className="p-6 bg-[#151b23]">
              <h3 className="text-xl font-semibold text-white mb-1">
                {t("hospitalHotel.hospitalTitle")}
              </h3>
              <p className="text-[#c9a96e] text-lg font-bold">
                {t("hospitalHotel.hospitalName")}
              </p>
            </div>
          </div>

          {/* Hotel Card */}
          <div className="relative rounded-xl overflow-hidden card-hover">
            <Image
              src="/images/hotel.png"
              alt={t("hospitalHotel.hotelName")}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="badge-hotel px-4 py-2 rounded-full text-white text-sm font-semibold">
                {t("hospitalHotel.hotel")}
              </span>
            </div>
            <div className="p-6 bg-[#151b23]">
              <h3 className="text-xl font-semibold text-white mb-1">
                {t("hospitalHotel.hotelTitle")}
              </h3>
              <p className="text-[#c9a96e] text-lg font-bold">
                {t("hospitalHotel.hotelName")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
