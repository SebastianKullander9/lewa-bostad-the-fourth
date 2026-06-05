"use client";

import { Project } from "@/types/Project.types";
import { Background } from "@/types/Props.types";
import styles from "./Dropdown.module.css";
import { IconChevronDown, IconChevronUp } from "nucleo-sharp";
import { useState } from "react";
import { IconCheck } from "nucleo-sharp";
import { Span } from "next/dist/trace";

type DropdownProps = {
    label?: string;
    background: Background;
} & (
    | { type: "broad"; projects?: Project[]; project?: never }
    | { type: "specific"; project: Project; projects?: never }
);

export default function Dropdown({ projects, label, background }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([]);
    const allSlugs = projects?.map((p) => p.slug) ?? [];
    const allSelected = allSlugs.length > 0 && allSlugs.every((s) => selected.includes(s));

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    function toggle(slug: string) {
        setSelected((prev) =>
            prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
        );
    }

    function toggleAll() {
        setSelected(allSelected ? [] : allSlugs);
    }

    return (
        <div>
            <div className={styles.dropdown} data-background={background} onClick={handleOpen}>
                <div>
                    <p>
                        Välj projekt:{" "}
                        {selected.length > 0 && <span>{selected.length} Valda</span>}{" "}
                    </p>
                </div>
                <div className={styles.chevron}>
                    {isOpen ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
                </div>
            </div>
            {isOpen && (
                <div
                    className={styles.options}
                    data-background={background}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.option} onClick={toggleAll}>
                        <input type="checkbox" id="select-all" checked={allSelected} readOnly />
                        <div className={`${styles.checkbox} ${allSelected ? styles.checked : ""}`}>
                            {allSelected && <IconCheck size={16} />}
                        </div>
                        <label className={styles.label}>Välj alla</label>
                    </div>
                    {projects?.map((project) => (
                        <div
                            key={project.slug}
                            className={styles.option}
                            onClick={() => toggle(project.slug)}
                        >
                            <input
                                type="checkbox"
                                id={project.slug}
                                checked={selected.includes(project.slug)}
                                onChange={() => toggle(project.slug)}
                            />
                            <div
                                className={`${styles.checkbox} ${selected.includes(project.slug) ? styles.checked : ""}`}
                            >
                                {selected.includes(project.slug) && <IconCheck size={16} />}
                            </div>
                            <label htmlFor={project.slug} className={styles.label}>
                                {project.title} -{" "}
                                <span className="text-meta">{project.location}</span>
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
