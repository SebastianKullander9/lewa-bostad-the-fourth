import styles from "./Marker.module.css";
import { EstateStatus } from "./EstateMap";
import { IconHouse4Fill32 } from "nucleo-core-fill-32";

interface MarkerProps {
    label?: string;
    status?: EstateStatus;
    isCurrent?: boolean;
    href?: string;
}

export default function Marker({ label, status, isCurrent, href }: MarkerProps) {
    return (
        <div
            className={styles.marker}
            data-status={status}
            data-current={isCurrent ? "true" : undefined}
        >
            <div>{isCurrent && <IconHouse4Fill32 className={styles.icon} size={16} />}</div>
        </div>
    );
}
