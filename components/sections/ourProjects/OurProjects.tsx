"use client";

import { STATUS_FILTERS } from "./data";
import styles from "./OurProjects.module.css";
import ProjectCard from "@/components/ui/projectCard/ProjectCard";
import { useRouter, useSearchParams } from "next/navigation";
import type { Project } from "@/types/Project.types";

interface OurProjectsProps {
    projects: Project[];
}

export default function OurProjects({ projects }: OurProjectsProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeFilter = searchParams.get("status") ?? "all";
    const params = new URLSearchParams(searchParams.toString());

    const filteredProjects = projects.filter((p) =>
        activeFilter === "all" ? true : p.status.value === activeFilter,
    );

    const setFilter = (value: string) => {
        if (value === "all") {
            params.delete("status");
        } else {
            params.set("status", value);
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <>
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
            {filteredProjects.length === 0 && (
                <div className={styles.notFound}>
                    <p>
                        Det finns just nu inga{" "}
                        {STATUS_FILTERS.find((f) => f.value === activeFilter)?.label.toLowerCase()}{" "}
                        projekt.
                    </p>
                </div>
            )}
            <div className={styles.grid}>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} link={true} />
                ))}
            </div>
        </>
    );
}
