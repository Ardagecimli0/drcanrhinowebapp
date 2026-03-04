import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PressLogos from "@/components/PressLogos";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import HospitalHotel from "@/components/HospitalHotel";
import Testimonials from "@/components/Testimonials";
import RhinoplastyBeforeAfterYT from "@/components/RhinoplastyBeforeAfterYT";
import WhyTurkey from "@/components/WhyTurkey";
import Packages from "@/components/Packages";
import Techniques from "@/components/Techniques";
import WhyDoctor from "@/components/WhyDoctor";
import Publications from "@/components/Publications";
import Journey from "@/components/Journey";
import ContactForm from "@/components/ContactForm";
import DoctorInfo from "@/components/DoctorInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import DynamicTitle from "@/components/DynamicTitle";
import type { Metadata } from "next";

const slugToLocale: Record<string, string> = {
    "rhinoplasty-in-turkey": "en",
    "nasenkorrektur-in-der-turkei": "de",
    "rinoplastia-en-turquia": "es",
    "rhinoplastie-en-turquie": "fr",
    "rinoplastica-in-turchia": "it",
    "rhinoplastyka-w-turcji": "pl",
};

const localeTitles: Record<string, string> = {
    en: "Rhinoplasty in Turkey - Op. Dr. Can Kalkavan",
    de: "Nasenkorrektur in der Türkei - Op. Dr. Can Kalkavan",
    es: "Rinoplastia en Turquía - Op. Dr. Can Kalkavan",
    fr: "Rhinoplastie en Turquie - Op. Dr. Can Kalkavan",
    it: "Rinoplastica in Turchia - Op. Dr. Can Kalkavan",
    pl: "Rhinoplastyka w Turcji - Lek. med. Can Kalkavan",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const locale = slugToLocale[slug] || "en";
    const title = localeTitles[locale] || localeTitles.en;

    return {
        title,
    };
}

export function generateStaticParams() {
    return [
        { slug: "rhinoplasty-in-turkey" },
        { slug: "nasenkorrektur-in-der-turkei" },
        { slug: "rinoplastia-en-turquia" },
        { slug: "rhinoplastie-en-turquie" },
        { slug: "rinoplastica-in-turchia" },
        { slug: "rhinoplastyka-w-turcji" },
    ];
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Render the same content as the main page
    return (
        <main className="min-h-screen bg-[#0c1015]">
            <DynamicTitle />
            <Header />
            <Hero />
            <PressLogos />
            <Stats />
            <BeforeAfter />
            <HospitalHotel />
            <Testimonials />
            <RhinoplastyBeforeAfterYT />
            <WhyTurkey />
            <Packages />
            <Techniques />
            <WhyDoctor />
            <Publications />
            <Journey />
            <ContactForm />
            <DoctorInfo />
            <FAQ />
            <Footer />
            <CookieConsent />
        </main>
    );
}
