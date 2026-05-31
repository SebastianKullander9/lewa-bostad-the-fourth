import Image from "next/image";
import hero from "@/public/hero/hero.webp";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.section}>
            <Image
                src={hero}
                fill
                className={styles.image}
                alt="Vardags rum ifrån ett av lewas projekt - glansbaggen"
            />
        </section>
    );
}
