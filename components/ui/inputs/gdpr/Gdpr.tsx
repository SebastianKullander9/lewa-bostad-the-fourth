"use client";
import { useState } from "react";
import { IconCheck } from "nucleo-sharp";
import styles from "./Gdpr.module.css";

export default function Gdpr() {
    const [accepted, setAccepted] = useState(false);

    return (
        <div className={styles.wrapper} onClick={() => setAccepted(!accepted)}>
            <input type="checkbox" checked={accepted} readOnly />
            <div className={`${styles.checkbox} ${accepted ? styles.checked : ""}`}>
                {accepted && <IconCheck size={12} />}
            </div>
            <p className={styles.label}>
                Jag godkänner att mina uppgifter behandlas enligt{" "}
                <a href="/integritetspolicy" onClick={(e) => e.stopPropagation()}>
                    integritetspolicyn
                </a>
            </p>
        </div>
    );
}
