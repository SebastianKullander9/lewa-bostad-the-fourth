import type { Metadata } from "next";
import OurProjects from "@/components/sections/ourProjects/OurProjects";
import { Suspense } from "react";
import Skeleton from "@/components/sections/ourProjects/skeleton/Skeleton";
import { getAllProjects } from "@/lib/sanity/queries";

export const metadata: Metadata = {
    title: "Våra projekt",
    description:
        "Utforska Lewa Bostads projekt – arkitektritade radhus och parhus i bostadsrättsform i Stockholms förorter.",
    openGraph: {
        title: "Våra projekt – Lewa Bostad",
        description:
            "Utforska Lewa Bostads projekt – arkitektritade radhus och parhus i bostadsrättsform i Stockholms förorter.",
        images: [{ url: "/projectsCTA/kummelnashojden.webp", alt: "Lewa Bostads projekt" }],
    },
};

export default async function OurProjectsPage() {
    const projects = await getAllProjects();

    return (
        <div>
            <Suspense fallback={<Skeleton />}>
                <OurProjects projects={projects} />
            </Suspense>
        </div>
    );
}
