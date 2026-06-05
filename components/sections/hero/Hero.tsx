import styles from "./Hero.module.css";
import React from "react";

export default function Hero() {
    return (
        <section className={styles.section}>
            <video autoPlay muted loop playsInline preload="auto">
                <source src="/hero/hero_compressed.webm" type="video/webm" />
                <source src="/hero/hero_compressed.mp4" type="video/mp4" />
            </video>
        </section>
    );
}
