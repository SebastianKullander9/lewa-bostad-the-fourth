import type { Metadata } from "next";
import ProcessHero from "@/components/sections/processHero/ProcessHero";
import ProcessSteps from "@/components/sections/processSteps/ProcessSteps";
import Interest from "@/components/sections/interest/Interest";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";
import { getBuyingGuide, getAllProjects } from "@/lib/sanity/queries";

export const metadata: Metadata = {
    title: "Att köpa bostad",
    description:
        "Hur går det till att köpa bostad hos Lewa Bostad? Här guidar vi dig genom hela processen – från intresseanmälan till tillträde.",
    openGraph: {
        title: "Att köpa bostad – Lewa Bostad",
        description:
            "Hur går det till att köpa bostad hos Lewa Bostad? Här guidar vi dig genom hela processen – från intresseanmälan till tillträde.",
        images: [{ url: "/hero/hero.webp", alt: "Lewa Bostad" }],
    },
};

export default async function page() {
    const [data, projects] = await Promise.all([getBuyingGuide(), getAllProjects()]);

    return (
        <>
            <FloatingCTA mode="scroll" />
            <ProcessHero
                heading={data.heroHeading}
                text={data.heroText}
                imageUrl={data.heroImage.src}
                imageAlt={data.heroImage.alt}
            />
            <ProcessSteps steps={data.steps} />
            <Interest type="broad" projects={projects} background="default" />
        </>
    );
}
