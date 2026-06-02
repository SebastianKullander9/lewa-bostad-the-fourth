import { notFound } from "next/navigation";
import { projectData } from "@/components/sections/ourProjects/data";
import Underpage from "@/components/sections/ourProjects/underpage/Underpage";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <div>
            <Underpage project={project} />
        </div>
    );
}
