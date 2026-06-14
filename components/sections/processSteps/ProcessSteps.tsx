import { processSteps } from "./data";
import styles from "./ProcessSteps.module.css";

export default function ProcessSteps() {
    return (
        <section className="section section--alt">
            <div className={`container ${styles.inner}`}>
                <div className={styles.steps}>
                    {processSteps.map((step) => (
                        <div key={step.number} className={styles.step}>
                            <span className={styles.number}>
                                {String(step.number).padStart(2, "0")}
                            </span>
                            <div className="stack">
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
