import type { Metadata } from "next";
import { projectData } from "@/components/sections/ourProjects/data";

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

export default function GalleryPage() {
    return <section>Gallery</section>;
}
