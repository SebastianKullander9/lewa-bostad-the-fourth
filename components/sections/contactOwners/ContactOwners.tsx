import OwnerCard from "./ownerCard/OwnerCard";
import styles from "./ContactOwners.module.css";

interface Owner {
    fullName: string;
    email: string;
    image: { src: string; alt: string };
}

interface ContactOwnersProps {
    owners: Owner[];
}

export default function ContactOwners({ owners }: ContactOwnersProps) {
    return (
        <div className={`${styles.grid} container`}>
            {owners.map((owner) => (
                <OwnerCard
                    key={owner.email}
                    image={owner.image.src}
                    fullName={owner.fullName}
                    email={owner.email}
                />
            ))}
        </div>
    );
}
