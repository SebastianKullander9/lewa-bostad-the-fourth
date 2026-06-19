import styles from "./Skeleton.module.css";

export default function Skeleton() {
    return (
        <>
            <div className={styles.filter} />
            <div className={styles.grid}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className={styles.skeleton} />
                ))}
            </div>
        </>
    );
}
