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

        const probe = document.createElement("div");
        probe.style.cssText = "position:absolute;visibility:hidden;height:var(--header-height)";
        document.body.appendChild(probe);
        const headerHeight = probe.getBoundingClientRect().height;
        probe.remove();

        const observer = new IntersectionObserver(
            ([entry]) => root.toggleAttribute("data-hero-passed", !entry.isIntersecting),
            { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 },
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
