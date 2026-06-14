import { notFound } from "next/navigation";
import { projectData } from "@/components/sections/ourProjects/data";
import Underpage from "@/components/sections/ourProjects/underpageStandard/Underpage";
import UnderpageFeatured from "@/components/sections/ourProjects/underpageFeatured/UnderpageFeatured";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    if (!project) notFound();

    if (project.underpageType === "featured") {
        return (
            <div>
                <UnderpageFeatured project={project} />
            </div>
        );
    }
    return (
        <div>
            <Underpage project={project} />
        </div>
    );
}
