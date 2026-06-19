import type { Metadata } from "next";
import OurProjects from "@/components/sections/ourProjects/OurProjects";
import { Suspense } from "react";
import Skeleton from "@/components/sections/ourProjects/skeleton/Skeleton";
import { getAllProjects } from "@/lib/sanity/queries";
import styles from "@/components/sections/ourProjects/OurProjects.module.css";

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
        <section className={`section section--default section--page-start stack ${styles.minHeight}`}>
            <div className={`${styles.text} stack`}>
                <h1>Hitta hem hos oss.</h1>
                <p className="prose">
                    Lewa Bostad bygger radhus och parhus i bostadsrättsform. Husen utformas med
                    fokus på hållbar arkitektur, genomtänkt design och hög kvalitet i varje detalj.
                </p>
            </div>
            <Suspense fallback={<Skeleton />}>
                <OurProjects projects={projects} />
            </Suspense>
        </section>
    );
}
