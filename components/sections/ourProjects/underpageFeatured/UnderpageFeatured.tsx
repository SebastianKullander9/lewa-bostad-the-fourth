import { FeaturedProject } from "@/types/Project.types";
import Hero from "./hero/Hero";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";
import Intro from "./sections/intro/Intro";
import Area from "./sections/area/Area";
import About from "./sections/about/About";

interface UnderpageFeaturedProps {
    project: FeaturedProject;
}

export default function UnderpageFeatured({ project }: UnderpageFeaturedProps) {
    return (
        <div>
            <FloatingCTA />
            <Hero project={project} />
            <Intro intro={project.sections.intro} />
            <Area area={project.sections.area} background="alt" />
            <About about={project.sections.about} />
        </div>
    );
}
