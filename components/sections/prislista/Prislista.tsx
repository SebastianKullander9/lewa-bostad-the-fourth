"use client";

import styles from "./Prislista.module.css";
import { prislistaData } from "./data";
import { PrislistaRow } from "@/types/Prislista.types";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { IconXmark, IconChevronUp, IconChevronDown } from "nucleo-sharp";

interface PrislistaProps {
    isModal?: boolean;
}

type SortKey = "status" | "name";
type SortDirection = "asc" | "desc";

const sortValue: Record<
    SortKey,
    (row: PrislistaRow) => string | number
> = {
    status: (row) => row.status.order,
    name: (row) => row.name,
};

const statusColor: Record<PrislistaRow["status"]["value"], string> = {
    available: "var(--color-status-available)",
    reserved: "var(--color-status-reserved)",
    sold: "var(--color-status-sold)",
};

export default function Prislista({ isModal = false }: PrislistaProps) {
    const router = useRouter();
    const [sortKey, setSortKey] = useState<SortKey>("status");
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

    const prislistaSorted = useMemo(() => {
        const getValue = sortValue[sortKey];
        const direction = sortDirection === "asc" ? 1 : -1;
        return [...prislistaData].sort((a, b) => {
            const valueA = getValue(a);
            const valueB = getValue(b);
            if (valueA < valueB) return -1 * direction;
            if (valueA > valueB) return 1 * direction;
            return 0;
        });
    }, [sortKey, sortDirection]);

    const handleSort = (key: SortKey) => {
        if (key === sortKey) {
            setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
            return;
        }
        setSortKey(key);
        setSortDirection("asc");
    };

    const renderSortIcon = (key: SortKey) => {
        if (sortKey !== key) return null;
        return sortDirection === "asc" ? (
            <IconChevronUp size={12} />
        ) : (
            <IconChevronDown size={12} />
        );
    };

    const renderStatus = (row: PrislistaRow) => (
        <span
            className={styles.status}
            style={
                {
                    "--status-color": statusColor[row.status.value],
                } as CSSProperties
            }
        >
            <span className={styles.statusDot} aria-hidden="true" />
            {row.status.label}
        </span>
    );

    useEffect(() => {
        if (!isModal) return;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isModal]);

    const content = (
        <div
            className={
                isModal ? styles.panel : `${styles.page} container--wide`
            }
            onClick={(e) => e.stopPropagation()}
        >
            {isModal && (
                <button
                    type="button"
                    className={styles.closeBtn}
                    onClick={() => router.back()}
                    aria-label="Stäng"
                >
                    <IconXmark size={16} />
                </button>
            )}
            <h1 className={styles.title}>Prislista - projektnamn</h1>
            <div className={styles.mobileSortBar}>
                <button
                    type="button"
                    className={styles.sortBtn}
                    onClick={() => handleSort("name")}
                >
                    Namn {renderSortIcon("name")}
                </button>
                <button
                    type="button"
                    className={styles.sortBtn}
                    onClick={() => handleSort("status")}
                >
                    Status {renderSortIcon("status")}
                </button>
            </div>
            <div className={styles.cardList}>
                {prislistaSorted.map((row) => (
                    <div key={row.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardName}>
                                {row.name}
                            </span>
                            {renderStatus(row)}
                        </div>
                        <dl className={styles.cardDetails}>
                            <div className={styles.cardRow}>
                                <dt>Typ</dt>
                                <dd>{row.type}</dd>
                            </div>
                            <div className={styles.cardRow}>
                                <dt>Rum</dt>
                                <dd>{row.rooms}</dd>
                            </div>
                            <div className={styles.cardRow}>
                                <dt>Boa</dt>
                                <dd>{row.livingArea}</dd>
                            </div>
                            <div className={styles.cardRow}>
                                <dt>Bia</dt>
                                <dd>{row.otherArea}</dd>
                            </div>
                            <div className={styles.cardRow}>
                                <dt>Pris</dt>
                                <dd>{row.price}</dd>
                            </div>
                            <div className={styles.cardRow}>
                                <dt>Avgift</dt>
                                <dd>{row.fee}</dd>
                            </div>
                        </dl>
                        <a
                            href={row.factSheetUrl}
                            className={styles.cardLink}
                        >
                            Bofaktablad
                        </a>
                    </div>
                ))}
            </div>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>
                                <button
                                    type="button"
                                    className={styles.sortBtn}
                                    onClick={() => handleSort("name")}
                                >
                                    Namn {renderSortIcon("name")}
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    className={styles.sortBtn}
                                    onClick={() => handleSort("status")}
                                >
                                    Status {renderSortIcon("status")}
                                </button>
                            </th>
                            <th>Typ</th>
                            <th>Rum</th>
                            <th>Boa</th>
                            <th>Bia</th>
                            <th>Pris</th>
                            <th>Avgift</th>
                            <th>Bofaktablad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prislistaSorted.map((row) => (
                            <tr key={row.id} className={styles.row}>
                                <td>{row.name}</td>
                                <td>{renderStatus(row)}</td>
                                <td>{row.type}</td>
                                <td>{row.rooms}</td>
                                <td>{row.livingArea}</td>
                                <td>{row.otherArea}</td>
                                <td>{row.price}</td>
                                <td>{row.fee}</td>
                                <td>
                                    <a href={row.factSheetUrl}>
                                        Bofaktablad
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    if (!isModal) return content;

    return (
        <div
            className={styles.backdrop}
            onClick={() => router.back()}
        >
            {content}
        </div>
    );
}
