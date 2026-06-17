"use client";

import { useState } from "react";
import { projectData, STATUS_FILTERS } from "@/components/sections/ourProjects/data";
import EstateMap, { type Estate } from "../estateMap/EstateMap";
import styles from "./SectionMap.module.css";
import { SectionMapBlock } from "@/types/Project.types";
import { Background } from "@/types/Props.types";

type FilterValue = (typeof STATUS_FILTERS)[number]["value"];

interface SectionMapProps {
    data: SectionMapBlock;
    currentSlug: string;
    background?: Background;
    id?: string;
    eyebrow?: string;
}

export default function SectionMap({ data, currentSlug, background = "default", id, eyebrow }: SectionMapProps) {
    const [filter, setFilter] = useState<FilterValue>("all");

    const estates: Estate[] = projectData
        .filter((p) => p.lat != null && p.lng != null)
        .filter((p) => filter === "all" || p.status.value === filter)
        .map((p) => ({
            id: p.slug,
            title: p.title,
            lat: p.lat!,
            lng: p.lng!,
            label: p.title,
            href: `/vara-projekt/${p.slug}`,
            status: p.status.value,
            isCurrent: p.slug === currentSlug,
            image: p.images.thumbnail,
        }));

    return (
        <section id={id} className={`section section--${background}`}>
            <div className="container--wide stack">
                {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
                <h2 className={styles.title}>{data.title}</h2>
                <EstateMap estates={estates} background={background}>
                    {/* Filter overlay — absolutely positioned inside the map */}
                    <div className={styles.filterOverlay}>
                        {STATUS_FILTERS.map((f) => (
                            <button
                                key={f.value}
                                className={styles.filterButton}
                                data-status={f.value}
                                data-active={filter === f.value}
                                onClick={() => setFilter(f.value)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </EstateMap>
            </div>
        </section>
    );
}
