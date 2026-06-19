import { FeaturedProject, FeaturedSection, Project } from "@/types/Project.types";
import { Background } from "@/types/Props.types";
import Hero from "./hero/Hero";
import SectionNav from "./hero/SectionNav";
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
    allProjects: Project[];
}

function renderSection(section: FeaturedSection, index: number, currentSlug: string, allProjects: Project[]) {
    const bg: Background = index % 2 === 0 ? "default" : "alt";
    const id = `section-${index}`;
    const eyebrow = section.eyebrow;

    switch (section._type) {
        case "introSection":
            return <Intro key={index} intro={section} id={id} eyebrow={eyebrow} />;
        case "sectionText":
            return <SectionText key={index} data={section} background={bg} id={id} eyebrow={eyebrow} />;
        case "sectionSplit":
            return <SectionSplit key={index} data={section} background={bg} id={id} eyebrow={eyebrow} />;
        case "sectionSplitDouble":
            return <SectionSplitDouble key={index} data={section} background={bg} id={id} eyebrow={eyebrow} />;
        case "sectionBullets":
            return <SectionBullets key={index} data={section} background={bg} id={id} eyebrow={eyebrow} />;
        case "sectionSubsections":
            return <SectionSubsections key={index} data={section} background={bg} id={id} eyebrow={eyebrow} />;
        case "sectionMap":
            return <SectionMap key={index} data={section} currentSlug={currentSlug} allProjects={allProjects} background={bg} id={id} eyebrow={eyebrow} />;
    }
}

export default function UnderpageFeatured({ project, allProjects }: UnderpageFeaturedProps) {
    const navItems = project.sections
        .map((s, i) => ({ label: s.eyebrow, id: `section-${i}` }))
        .filter((item): item is { label: string; id: string } => !!item.label);

    return (
        <div>
            <FloatingCTA />
            <Hero project={project} />
            <SectionNav title={project.title} location={project.location} items={navItems} />
            {project.sections.map((section, i) => renderSection(section, i, project.slug, allProjects))}
        </div>
    );
}
