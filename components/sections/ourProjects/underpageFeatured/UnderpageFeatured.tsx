import { Project } from "@/types/Project.types";
import Hero from "./hero/Hero";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";

interface UnderpageFeaturedProps {
    project: Project;
}

export default function UnderpageFeatured({ project }: UnderpageFeaturedProps) {
    return (
        <div>
            <FloatingCTA />
            <Hero project={project} />
        </div>
    );
}
