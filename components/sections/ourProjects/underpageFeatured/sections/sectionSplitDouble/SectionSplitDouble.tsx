import Image from "next/image";
import styles from "./SectionSplitDouble.module.css";
import { SectionSplitDouble as SectionSplitDoubleType } from "@/types/Project.types";
import { Background } from "@/types/Props.types";

interface SectionSplitDoubleProps {
    data: SectionSplitDoubleType;
    background?: Background;
    id?: string;
    eyebrow?: string;
}

export default function SectionSplitDouble({ data, background = "default", id, eyebrow }: SectionSplitDoubleProps) {
    return (
        <section id={id} className={`section section--${background}`}>
            <div className="container stack">
                <div className={`${styles.text} stack`}>
                    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
                    <h2>{data.title}</h2>
                    <p className="prose">{data.text}</p>
                </div>
                <div className={styles.images}>
                    <div className={styles.imageWrapper}>
                        <Image src={data.image1.src} alt={data.image1.alt} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image src={data.image2.src} alt={data.image2.alt} fill style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
