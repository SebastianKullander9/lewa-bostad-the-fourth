import Image from "next/image";
import styles from "./SectionSplit.module.css";
import { SectionSplit as SectionSplitType } from "@/types/Project.types";
import { Background } from "@/types/Props.types";

interface SectionSplitProps {
    data: SectionSplitType;
    background?: Background;
    id?: string;
    eyebrow?: string;
    hideEyebrow?: boolean;
}

export default function SectionSplit({ data, background = "default", id, eyebrow, hideEyebrow }: SectionSplitProps) {
    return (
        <section id={id} className={`section section--${background}`}>
            <div className="container stack">
                <div className={`${styles.text} stack`}>
                    {eyebrow && !hideEyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
                    <h2>{data.title}</h2>
                    <p className="prose">{data.text}</p>
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={data.image.src} alt={data.image.alt} fill style={{ objectFit: "cover" }} />
                </div>
            </div>
        </section>
    );
}
