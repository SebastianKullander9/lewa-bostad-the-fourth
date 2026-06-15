import { FeaturedProject } from "@/types/Project.types";
import Hero from "./hero/Hero";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";
import Intro from "./sections/intro/Intro";

interface UnderpageFeaturedProps {
    project: FeaturedProject;
}

export default function UnderpageFeatured({ project }: UnderpageFeaturedProps) {
    return (
        <div>
            <FloatingCTA />
            <Hero project={project} />
            <Intro project={project} />
        </div>
    );
}
