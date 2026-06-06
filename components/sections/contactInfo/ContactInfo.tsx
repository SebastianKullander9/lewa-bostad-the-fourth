import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
    return (
        <section className="container stack">
            <h1>Välkommen att kontakta oss.</h1>
            <p>
                Har du en fråga eller vill komma i kontakt med oss? Du är alltid varmt välkommen att
                höra av dig och vi återkommer så snart vi kan.
            </p>
            <a href="mailto:info@lewabostad.se" className={styles.email}>
                info@lewabostad.se
            </a>
        </section>
    );
}
