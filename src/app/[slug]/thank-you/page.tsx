import ThankYouClient from "@/app/ThankYouClient";

export function generateStaticParams() {
    return [
        { slug: "en" },
        { slug: "de" },
        { slug: "es" },
        { slug: "fr" },
        { slug: "it" },
    ];
}

export default function ThankYouPage({ params }: { params: { slug: string } }) {
    return <ThankYouClient slug={params.slug} />;
}
