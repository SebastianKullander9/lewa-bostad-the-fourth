"use client";

import { useState, useEffect } from "react";
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

function getCSSVar(name: string) {
    return parseInt(getComputedStyle(document.documentElement).getPropertyValue(name)) || 0;
}

function scrollToSection(id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    const offset = getCSSVar("--header-height") + getCSSVar("--section-bar-height");
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
}

export default function SectionNav({ title, location, items }: SectionNavProps) {
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector("footer");
        if (!footer) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setFooterVisible(entry.isIntersecting);
                if (entry.isIntersecting) setOpen(false);
            },
            { threshold: 0 },
        );
        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (items.length === 0) return;

        const topOffset = getCSSVar("--header-height") + getCSSVar("--section-bar-height");
        const intersecting = new Set<string>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        intersecting.add(entry.target.id);
                    } else {
                        intersecting.delete(entry.target.id);
                    }
                });
                const active = items.find((item) => intersecting.has(item.id));
                setActiveId(active?.id ?? null);
            },
            { rootMargin: `-${topOffset}px 0px 0px 0px`, threshold: 0 },
        );

        items.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [items]);

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
                                className={`${styles.desktopLink} ${item.id === activeId ? styles.linkActive : ""}`}
                                onClick={(e) => handleLink(e, item.id)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>

            {/* Mobile: fixed at bottom, title acts as the toggle label */}
            <div className={`${styles.mobile} ${footerVisible ? styles.mobileHidden : ""}`}>
                {open && items.length > 0 && (
                    <nav className={styles.panel}>
                        {items.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`${styles.panelLink} ${item.id === activeId ? styles.linkActive : ""}`}
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
