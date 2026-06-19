import styles from "./AboutValues.module.css";

interface Value {
    title: string;
    text: string;
}

interface AboutValuesProps {
    heading: string;
    values: Value[];
}

export default function AboutValues({ heading, values }: AboutValuesProps) {
    return (
        <section className="section section--brand">
            <div className={styles.outer}>
                <div>
                    <h2>{heading}</h2>
                </div>
                <div className={styles.values}>
                    {values.map((item, index) => (
                        <div key={index} className="stack">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
