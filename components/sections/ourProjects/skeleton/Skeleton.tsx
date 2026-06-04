import styles from "./Skeleton.module.css";

export default function Skeleton() {
    return (
        <section className="section section--default section--page-start stack">
            <div className="stack">
                <h1>Hitta hem hos oss.</h1>
                <p className="prose">
                    Lewa Bostad bygger radhus och parhus i bostadsrättsform. Husen utformas med
                    fokus på hållbar arkitektur, genomtänkt design och hög kvalitet i varje detalj.
                </p>
            </div>
            <div className={styles.grid}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className={styles.skeleton} />
                ))}
            </div>
        </section>
    );
}
