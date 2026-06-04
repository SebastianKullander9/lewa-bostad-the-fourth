import OurProjects from "@/components/sections/ourProjects/OurProjects";
import { Suspense } from "react";
import Skeleton from "@/components/sections/ourProjects/skeleton/Skeleton";

export default function OurProjectsPage() {
    return (
        <div>
            <Suspense fallback={<Skeleton />}>
                <OurProjects />
            </Suspense>
        </div>
    );
}
