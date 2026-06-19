import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectData } from "@/components/sections/ourProjects/data";
import Underpage from "@/components/sections/ourProjects/underpageStandard/Underpage";
import UnderpageFeatured from "@/components/sections/ourProjects/underpageFeatured/UnderpageFeatured";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);
    if (!project) return {};
    const description = `Utforska ${project.title} i ${project.location} – ett projekt av Lewa Bostad med arkitektritade radhus och parhus i bostadsrättsform.`;
    return {
        title: project.title,
        description,
        openGraph: {
            title: `${project.title} – Lewa Bostad`,
            description,
            images: [{ url: project.images.thumbnail.src.src, alt: project.images.thumbnail.alt || project.title }],
        },
    };
}

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
