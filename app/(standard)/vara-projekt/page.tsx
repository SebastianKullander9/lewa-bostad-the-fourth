import type { Metadata } from "next";
import OurProjects from "@/components/sections/ourProjects/OurProjects";
import { Suspense } from "react";
import Skeleton from "@/components/sections/ourProjects/skeleton/Skeleton";

export const metadata: Metadata = {
    title: "Våra projekt",
    description:
        "Utforska Lewa Bostads projekt – arkitektritade radhus och parhus i bostadsrättsform i Stockholms förorter.",
};

export default function OurProjectsPage() {
    return (
        <div>
            <Suspense fallback={<Skeleton />}>
                <OurProjects />
            </Suspense>
        </div>
    );
}
