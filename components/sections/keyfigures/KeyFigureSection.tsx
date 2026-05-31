import { KeyFigure } from "@/types/Props.types";
import { Background } from "@/types/Props.types";
import KeyFigureItem from "./keyFigureItem/KeyFigureItem";
import styles from "./KeyFigureSection.module.css";

interface KeyFigureSectionProps {
    title: string;
    text: string;
    keyFigures: KeyFigure[];
    background: Background;
}

export default function KeyFigureSection({
    title,
    text,
    keyFigures,
    background,
}: KeyFigureSectionProps) {
    return (
        <section className={`section section--${background}`}>
            <div className={styles.outer}>
                <div className={`stack ${styles.content}`}>
                    <h2>{title}</h2>
                    <p className={styles.prose}>{text}</p>
                </div>
                <div className={styles.grid}>
                    {keyFigures.map((item, index) => (
                        <KeyFigureItem key={index} keyFigure={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
