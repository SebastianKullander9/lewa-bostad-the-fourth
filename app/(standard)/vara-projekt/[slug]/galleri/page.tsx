import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectData } from "@/components/sections/ourProjects/data";
import Gallery from "@/components/sections/ourProjects/underpageStandard/gallery/Gallery";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);
    if (!project) return {};
    return {
        title: `${project.title} – Bildgalleri`,
        description: `Se bilder från Lewa Bostads projekt ${project.title} i ${project.location}.`,
    };
}

export default async function GalleryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    if (!project) notFound();

    return <Gallery project={project} />;
}
