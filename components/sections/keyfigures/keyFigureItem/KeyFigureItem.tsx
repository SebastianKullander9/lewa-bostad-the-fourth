import { KeyFigure } from "@/types/Props.types";
import styles from "./KeyFigureItem.module.css";

interface KeyFigureItemProps {
    keyFigure: KeyFigure;
}

export default function KeyFigureItem({ keyFigure }: KeyFigureItemProps) {
    const { value, suffix, label } = keyFigure;

    return (
        <div className={styles.wrapper}>
            <div className={styles.valueWrapper}>
                <h3 className={styles.value}>{value}</h3>
                <p className={`text-small ${styles.muted}`}>{suffix}</p>
            </div>

            <p className={`text-small ${styles.muted}`}>{label}</p>
        </div>
    );
}
