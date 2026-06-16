import type { StyleSpecification } from "maplibre-gl";
import { Background } from "@/types/Props.types";

const KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY;

const BACKGROUND_VAR: Record<Background, string> = {
    default: "--color-background",
    alt: "--color-background-alt",
    brand: "--color-background-brand",
    ghost: "--color-background",
};

const WATER_COLOR = "#9ab4c0"; // dusty blue — muted to complement the warm/sage palette

const token = (name: string, fallback: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

type BuildOptions = {
    background?: Background;
    foregroundVar?: string; // single fg token; mirror BACKGROUND_VAR if each surface has its own
};

export function buildMapStyle({
    background = "default",
    foregroundVar = "--color-text-primary",
}: BuildOptions = {}): StyleSpecification {
    const bg = token(BACKGROUND_VAR[background], "#f5f5f0");
    const fg = token(foregroundVar, "#181818");

    return {
        version: 8,
        name: "Lewa Minimal",
        glyphs: `https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=${KEY}`,
        sources: {
            openmaptiles: {
                type: "vector",
                url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${KEY}`,
            },
        },
        layers: [
            {
                id: "background",
                type: "background",
                paint: { "background-color": bg },
            },
            {
                // foreground at low opacity = a tint that tracks whatever bg/fg you pass
                id: "water",
                type: "fill",
                source: "openmaptiles",
                "source-layer": "water",
                paint: { "fill-color": WATER_COLOR, "fill-opacity": 1 },
            },
            {
                id: "roads-major",
                type: "line",
                source: "openmaptiles",
                "source-layer": "transportation",
                filter: ["in", "class", "primary", "trunk", "motorway"],
                paint: {
                    "line-color": fg,
                    "line-opacity": 0.18,
                    "line-width": ["interpolate", ["linear"], ["zoom"], 6, 0.4, 12, 1.1, 18, 4],
                },
            },
            {
                id: "place-labels",
                type: "symbol",
                source: "openmaptiles",
                "source-layer": "place",
                filter: ["in", "class", "city", "town", "suburb"],
                layout: {
                    "text-field": ["coalesce", ["get", "name:latin"], ["get", "name"]],
                    "text-font": ["Noto Sans Regular"],
                    "text-size": ["interpolate", ["linear"], ["zoom"], 8, 10, 14, 13],
                    "text-transform": "uppercase",
                    "text-letter-spacing": 0.12,
                    "text-max-width": 8,
                    "text-padding": 6,
                },
                paint: {
                    "text-color": fg,
                    "text-opacity": 0.65,
                    "text-halo-color": bg,
                    "text-halo-width": 1.2,
                },
            },
        ],
    };
}
