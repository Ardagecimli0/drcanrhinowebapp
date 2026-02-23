import ThankYouClient from "@/app/ThankYouClient";

export function generateStaticParams() {
    return [
        { slug: "en" },
        { slug: "de" },
        { slug: "es" },
        { slug: "fr" },
        { slug: "it" },
        { slug: "pl" },
    ];
}

export default async function ThankYouPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ThankYouClient slug={slug} />;
}
