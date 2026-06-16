import { FeaturedProject, FeaturedSection } from "@/types/Project.types";
import { Background } from "@/types/Props.types";
import Hero from "./hero/Hero";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";
import Intro from "./sections/intro/Intro";
import SectionText from "./sections/sectionText/SectionText";
import SectionSplit from "./sections/sectionSplit/SectionSplit";
import SectionSplitDouble from "./sections/sectionSplitDouble/SectionSplitDouble";
import SectionBullets from "./sections/sectionBullets/SectionBullets";
import SectionSubsections from "./sections/sectionSubsections/SectionSubsections";
import SectionMap from "./sections/sectionMap/SectionMap";

interface UnderpageFeaturedProps {
    project: FeaturedProject;
}

function renderSection(section: FeaturedSection, index: number, currentSlug: string) {
    const bg: Background = index % 2 === 0 ? "default" : "alt";

    switch (section._type) {
        case "intro":
            return <Intro key={index} intro={section} />;
        case "sectionText":
            return <SectionText key={index} data={section} background={bg} />;
        case "sectionSplit":
            return <SectionSplit key={index} data={section} background={bg} />;
        case "sectionSplitDouble":
            return <SectionSplitDouble key={index} data={section} background={bg} />;
        case "sectionBullets":
            return <SectionBullets key={index} data={section} background={bg} />;
        case "sectionSubsections":
            return <SectionSubsections key={index} data={section} background={bg} />;
        case "sectionMap":
            return <SectionMap key={index} data={section} currentSlug={currentSlug} background={bg} />;
    }
}

export default function UnderpageFeatured({ project }: UnderpageFeaturedProps) {
    return (
        <div>
            <FloatingCTA />
            <Hero project={project} />
            {project.sections.map((section, i) => renderSection(section, i, project.slug))}
        </div>
    );
}
