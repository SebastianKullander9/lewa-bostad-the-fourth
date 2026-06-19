import Image from "next/image";
import styles from "./OwnerCard.module.css";

interface OwnerCardProps {
    image: string;
    fullName: string;
    email: string;
}

export default function OwnerCard({ image, fullName, email }: OwnerCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={`En bild på en av ägarna, ${fullName}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                />
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{fullName}</p>
                <a href={`mailto:${email}`} className={styles.email}>
                    {email}
                </a>
            </div>
        </div>
    );
}
