import type { Metadata } from "next";
import ProcessHero from "@/components/sections/processHero/ProcessHero";
import ProcessSteps from "@/components/sections/processSteps/ProcessSteps";
import Interest from "@/components/sections/interest/Interest";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";
import { projectData } from "@/components/sections/ourProjects/data";

export const metadata: Metadata = {
    title: "Att köpa bostad",
    description:
        "Hur går det till att köpa bostad hos Lewa Bostad? Här guidar vi dig genom hela processen – från intresseanmälan till tillträde.",
};

export default function page() {
    return (
        <>
            <FloatingCTA mode="scroll" />
            <ProcessHero />
            <ProcessSteps />
            <Interest type="broad" projects={projectData} background="default" />
        </>
    );
}
