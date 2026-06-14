import Gallery from "@/components/sections/ourProjects/underpageStandard/gallery/Gallery";
import { projectData } from "@/components/sections/ourProjects/data";

export default async function GalleryModal({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    console.log(slug);

    if (!project) return null;

    return <Gallery project={project} />;
}
