import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProject } from "@/lib/sanity/queries";
import Gallery from "@/components/sections/ourProjects/underpageStandard/gallery/Gallery";

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
    const project = await getProject(slug);

    if (!project) notFound();

    return <Gallery project={project} />;
}
