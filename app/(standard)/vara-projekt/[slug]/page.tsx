import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getAllProjects, getProject } from "@/lib/sanity/queries";
import Underpage from "@/components/sections/ourProjects/underpageStandard/Underpage";
import UnderpageFeatured from "@/components/sections/ourProjects/underpageFeatured/UnderpageFeatured";
import type { FeaturedProject, StandardProject } from "@/types/Project.types";

export async function generateStaticParams() {
    const slugs = await getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProject(slug);
    if (!project) return {};
    const description = `Utforska ${project.title} i ${project.location} – ett projekt av Lewa Bostad med arkitektritade radhus och parhus i bostadsrättsform.`;
    return {
        title: project.title,
        description,
        openGraph: {
            title: `${project.title} – Lewa Bostad`,
            description,
            images: [{ url: project.images.thumbnail.src, alt: project.images.thumbnail.alt || project.title }],
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const [project, allProjects] = await Promise.all([getProject(slug), getAllProjects()]);

    if (!project) notFound();

    if (project.underpageType === "featured") {
        return (
            <div>
                <UnderpageFeatured project={project as FeaturedProject} allProjects={allProjects} />
            </div>
        );
    }
    return (
        <div>
            <Underpage project={project as StandardProject} />
        </div>
    );
}
