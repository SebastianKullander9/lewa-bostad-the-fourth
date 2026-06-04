"use client";

import { projectData } from "./data";
import styles from "./OurProjects.module.css";
import ProjectCard from "@/components/ui/projectCard/ProjectCard";
import { STATUS_FILTERS } from "./data";
import { useRouter, useSearchParams } from "next/navigation";

export default function OurProjects() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeFilter = searchParams.get("status") ?? "all";

    const filteredProjects = projectData.filter((p) =>
        activeFilter == "all" ? true : p.status.value === activeFilter,
    );

    const setFilter = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === "all") {
            params.delete("status");
        } else {
            params.set("status", value);
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <section className="section section--default section--page-start stack">
            <div className={`${styles.text} stack`}>
                <h1>Hitta hem hos oss.</h1>
                <p className="prose">
                    Lewa Bostad bygger radhus och parhus i bostadsrättsform. Husen utformas med
                    fokus på hållbar arkitektur, genomtänkt design och hög kvalitet i varje detalj.
                </p>
            </div>
            <div className={styles.filter}>
                {STATUS_FILTERS.map((filter) => (
                    <button
                        key={filter.value}
                        className={`${styles.button} ${activeFilter === filter.value ? styles.active : ""}`}
                        onClick={() => setFilter(filter.value)}
                    >
                        <span>{filter.label}</span>
                    </button>
                ))}
            </div>
            <div className={`${styles.grid}`}>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} link={true} />
                ))}
            </div>
        </section>
    );
}
