import ProcessHero from "@/components/sections/processHero/ProcessHero";
import ProcessSteps from "@/components/sections/processSteps/ProcessSteps";
import Interest from "@/components/sections/interest/Interest";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";
import { projectData } from "@/components/sections/ourProjects/data";

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
