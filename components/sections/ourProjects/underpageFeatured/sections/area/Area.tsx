import styles from "./Area.module.css";
import { FeaturedProjectSections } from "@/types/Project.types";
import Image from "next/image";
import placeholder from "@/public/placeholder/placeholder.png";
import { Background } from "@/types/Props.types";

interface AreaProps {
    area: FeaturedProjectSections["area"];
    background?: Background;
}

export default function Area({ area, background = "default" }: AreaProps) {
    return (
        <section className={`section section--${background}`}>
            <div className="container stack">
                <div className={styles.inner}>
                    <div className={`${styles.textWrapper} stack`}>
                        <h2 className={styles.text}>{area.title}</h2>
                        {area.texts.map((text, index) => (
                            <p key={index} className="prose">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={placeholder} alt="just a placeholder" className={styles.image} />
                </div>
            </div>
        </section>
    );
}
