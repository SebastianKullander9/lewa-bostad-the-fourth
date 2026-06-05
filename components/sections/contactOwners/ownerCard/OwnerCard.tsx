import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "./OwnerCard.module.css";

interface OwnerCardProps {
    image: StaticImageData;
    fullName: string;
    email: string;
}

export default function OwnerCard({ image, fullName, email }: OwnerCardProps) {
    return (
        <div>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={`En bild på en av ägarna, ${fullName}`}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div>
                <p className={styles.name}>{fullName}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}
