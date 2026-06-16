"use client";

import { ReactNode, useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./EstateMap.module.css";
import { Background } from "@/types/Props.types";
import { buildMapStyle } from "./buildMapStyle";
import Marker from "./Marker";

export type EstateStatus = "planned" | "ongoing" | "completed";

export type Estate = {
    id: string;
    title: string;
    lat: number;
    lng: number;
    label?: string;
    price?: string;
    href?: string;
    status?: EstateStatus;
    isCurrent?: boolean;
};

type Props = {
    estates: Estate[];
    children?: ReactNode;
    className?: string;
    background?: Background;
};

const STOCKHOLM: [number, number] = [18.07, 59.33];
const FIT_PADDING = 80;
const MAX_ZOOM = 14;

export default function EstateMap({ estates, children, className, background = "default" }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);
    const markersRef = useRef<maplibregl.Marker[]>([]);
    const loadedRef = useRef(false);
    const estatesRef = useRef(estates);
    estatesRef.current = estates;

    function syncMarkers(map: maplibregl.Map, list: Estate[]) {
        markersRef.current.forEach((m) => m.remove());
        markersRef.current = [];

        if (list.length === 0) return;

        const bounds = new maplibregl.LngLatBounds();

        for (const estate of list) {
            // renderToStaticMarkup renders the Marker JSX to an HTML string
            // synchronously — no React root or flushSync needed.
            // Since markers are purely presentational (only a plain <a> link),
            // static markup is the right tool here.
            const container = document.createElement("div");
            container.innerHTML = renderToStaticMarkup(
                <Marker
                    label={estate.label ?? estate.price}
                    status={estate.status}
                    isCurrent={estate.isCurrent}
                    href={estate.href}
                />,
            );

            const marker = new maplibregl.Marker({ element: container, anchor: "bottom" })
                .setLngLat([estate.lng, estate.lat])
                .addTo(map);

            markersRef.current.push(marker);
            bounds.extend([estate.lng, estate.lat]);
        }

        if (list.length === 1) {
            map.easeTo({ center: [list[0].lng, list[0].lat], zoom: 14, duration: 500 });
        } else {
            map.fitBounds(bounds, { padding: FIT_PADDING, maxZoom: MAX_ZOOM, duration: 500 });
        }
    }

    useEffect(() => {
        if (!containerRef.current || mapRef.current) return;

        const map = new maplibregl.Map({
            container: containerRef.current,
            style: buildMapStyle({ background }),
            center: STOCKHOLM,
            zoom: 10,
        });

        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");

        map.once("load", () => {
            map.resize();
            loadedRef.current = true;
            syncMarkers(map, estatesRef.current);
        });

        mapRef.current = map;

        return () => {
            map.remove();
            mapRef.current = null;
            loadedRef.current = false;
        };
    }, []);

    useEffect(() => {
        const map = mapRef.current;
        if (!map || !loadedRef.current) return;
        syncMarkers(map, estates);
    }, [estates]);

    return (
        <div className={`${styles.wrapper}${className ? ` ${className}` : ""}`}>
            <div ref={containerRef} className={styles.map} />
            {children}
        </div>
    );
}
