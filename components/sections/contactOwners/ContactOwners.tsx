import johan from "@/public/owners/johan_compressed.webp";
import magnus from "@/public/owners/magnus_compressed.webp";
import OwnerCard from "./ownerCard/OwnerCard";
import styles from "./ContactOwners.module.css";

export default function ContactOwners() {
    return (
        <div className={`${styles.grid} container`}>
            <OwnerCard image={johan} fullName="Johan Bondebjer" email="johan@lewabostad.se" />
            <OwnerCard image={magnus} fullName="Magnus Ekvall" email="magnus@lewabostad.se" />
        </div>
    );
}
