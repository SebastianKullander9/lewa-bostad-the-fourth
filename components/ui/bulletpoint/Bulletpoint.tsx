import styles from "./Bulletpoint.module.css";

interface BulletpointProps {
    text: string;
}

export default function Bulletpoint({ text }: BulletpointProps) {
    return (
        <div className={styles.bulletpoint}>
            <span className={styles.bullet}></span>
            <p>{text}</p>
        </div>
    );
}
