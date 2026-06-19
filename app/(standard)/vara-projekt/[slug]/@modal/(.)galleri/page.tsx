import Gallery from "@/components/sections/ourProjects/underpageStandard/gallery/Gallery";
import { getProject } from "@/lib/sanity/queries";

export default async function GalleryModal({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProject(slug);

    if (!project) return null;

    return <Gallery project={project} />;
}
