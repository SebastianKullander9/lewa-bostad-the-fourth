"use client";

import styles from "./Marker.module.css";
import { EstateStatus } from "./EstateMap";
import { IconHouse4Fill32 } from "nucleo-core-fill-32";
import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

interface MarkerProps {
    label?: string;
    status?: EstateStatus;
    isCurrent?: boolean;
    href?: string;
    image?: { src: string | object; alt: string };
    onTooltipOpen?: (el: HTMLElement) => void;
    onTooltipClose?: () => void;
}

export interface MarkerHandle {
    close: () => void;
}

const Marker = forwardRef<MarkerHandle, MarkerProps>(function Marker(
    { label, status, isCurrent, href, image, onTooltipOpen, onTooltipClose },
    ref,
) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const hasOpenedRef = useRef(false);

    useImperativeHandle(ref, () => ({ close: () => setTooltipOpen(false) }));

    useEffect(() => {
        if (tooltipOpen) {
            hasOpenedRef.current = true;
            if (tooltipRef.current) onTooltipOpen?.(tooltipRef.current);
        } else if (hasOpenedRef.current) {
            onTooltipClose?.();
        }
    }, [tooltipOpen, onTooltipOpen, onTooltipClose]);

    return (
        <div className={styles.markerWrapper} onClick={() => setTooltipOpen((o) => !o)}>
            <div
                className={styles.marker}
                data-status={status}
                data-current={isCurrent ? "true" : undefined}
            >
                {isCurrent && <IconHouse4Fill32 className={styles.icon} size={16} />}
            </div>
            {tooltipOpen && (
                <div
                    ref={tooltipRef}
                    className={styles.tooltip}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.tooltipHeader}>
                        {label && <span className={styles.tooltipTitle}>{label}</span>}
                        <button
                            className={styles.tooltipClose}
                            onClick={() => setTooltipOpen(false)}
                            aria-label="Stäng"
                        >
                            ✕
                        </button>
                    </div>
                    {image && (
                        <div className={styles.tooltipImage}>
                            <Image
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                src={image.src as any}
                                alt={image.alt}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    )}
                    <div className={styles.tooltipFooter}>
                        {href && !isCurrent && (
                            <PrimaryButton type="link" href={href} label="Visa projekt" background="brand" />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
});

export default Marker;
