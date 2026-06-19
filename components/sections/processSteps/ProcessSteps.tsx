import styles from "./ProcessSteps.module.css";

interface Step {
    title: string;
    text: string;
}

interface ProcessStepsProps {
    steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
    return (
        <section className="section section--alt">
            <div className={`container ${styles.inner}`}>
                <div className={styles.steps}>
                    {steps.map((step, i) => (
                        <div key={step.title} className={styles.step}>
                            <span className={styles.number}>
                                {String(i + 1).padStart(2, "0")}
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
