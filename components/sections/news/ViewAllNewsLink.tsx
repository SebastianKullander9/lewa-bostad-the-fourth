"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { IconArrowRight } from "nucleo-sharp";
import styles from "./ViewAllNewsLink.module.css";

export default function ViewAllNewsLink() {
    const ref = useSearchParams().get("ref");
    if (ref !== "om-oss") return null;
    return (
        <Link href="/nyheter" className={styles.link}>
            Visa alla nyheter <IconArrowRight size={14} />
        </Link>
    );
}
