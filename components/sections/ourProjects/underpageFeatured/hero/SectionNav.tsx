"use client";

import { useState } from "react";
import styles from "./SectionNav.module.css";

export type SectionNavItem = {
    label: string;
    id: string;
};

interface SectionNavProps {
    title: string;
    location: string;
    items: SectionNavItem[];
}

function scrollToSection(id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    // Offset for the fixed header + the sticky/fixed section bar
    const offset =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) +
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--section-bar-height"));
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
}

export default function SectionNav({ title, location, items }: SectionNavProps) {
    const [open, setOpen] = useState(false);

    const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setOpen(false);
        scrollToSection(id);
    };

    return (
        <>
            {/* Desktop: title + nav links in one row, sticks below header */}
            <div className={styles.desktop}>
                <p className={styles.title}>
                    {title}, <span className={styles.italic}>{location}</span>
                </p>
                {items.length > 0 && (
                    <nav className={styles.desktopNav}>
                        {items.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={styles.desktopLink}
                                onClick={(e) => handleLink(e, item.id)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>

            {/* Mobile: fixed at bottom, title acts as the toggle label */}
            <div className={styles.mobile}>
                {open && items.length > 0 && (
                    <nav className={styles.panel}>
                        {items.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={styles.panelLink}
                                onClick={(e) => handleLink(e, item.id)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
                <button
                    className={styles.toggle}
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                >
                    <span className={styles.toggleTitle}>
                        {title}, <span className={styles.italic}>{location}</span>
                    </span>
                    {items.length > 0 && (
                        <svg
                            className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M3 10L8 5L13 10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </>
    );
}
