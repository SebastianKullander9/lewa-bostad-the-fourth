import styles from "./ContactInfo.module.css";

interface ContactInfoProps {
    heading: string;
    intro: string;
    email: string;
}

export default function ContactInfo({ heading, intro, email }: ContactInfoProps) {
    return (
        <section className="container stack">
            <h1>{heading}</h1>
            <p>{intro}</p>
            <a href={`mailto:${email}`} className={styles.email}>
                {email}
            </a>
        </section>
    );
}
