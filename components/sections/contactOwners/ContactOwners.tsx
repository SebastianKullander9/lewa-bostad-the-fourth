import johan from "@/public/owners/johan.png";
import magnus from "@/public/owners/magnus.png";
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
