import { aboutValuesData } from "./data";
import styles from "./AboutValues.module.css";

export default function AboutValues() {
    return (
        <section className="section section--brand">
            <div className={styles.outer}>
                <div>
                    <h2>Tre byggstenar som skapar vår grund.</h2>
                </div>
                <div className={styles.values}>
                    {aboutValuesData.map((item, index) => (
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
