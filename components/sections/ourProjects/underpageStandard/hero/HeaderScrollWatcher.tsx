"use client";

import { useEffect } from "react";

export default function HeaderScrollWatcher({ targetId = "hero-image" }: { targetId?: string }) {
    useEffect(() => {
        const target = document.getElementById(targetId);
        if (!target) return;

        const root = document.documentElement;

        const setInstant = (mutate: () => void) => {
            root.setAttribute("data-no-header-transition", "");
            mutate();
            void root.offsetWidth;
            root.removeAttribute("data-no-header-transition");
        };

        setInstant(() => root.setAttribute("data-hero-header", ""));

        // Fires at both 0 and 0.5 to correctly handle fast scrolls and initial state.
        // Header switches to brand once 50% of the hero image has scrolled off-screen.
        const observer = new IntersectionObserver(
            ([entry]) => root.toggleAttribute("data-hero-passed", entry.intersectionRatio < 0.5),
            { threshold: [0, 0.5] },
        );

        observer.observe(target);
        return () => {
            observer.disconnect();
            setInstant(() => {
                root.removeAttribute("data-hero-header");
                root.removeAttribute("data-hero-passed");
            });
        };
    }, [targetId]);

    return null;
}
