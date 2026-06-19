import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import styles from "./ContactAquisition.module.css";

interface ContactAquisitionProps {
    title: string;
    text: PortableTextBlock[];
}

export default function ContactAquisition({ title, text }: ContactAquisitionProps) {
    return (
        <div className={`stack container ${styles.acquisitionBlock}`}>
            <h3>{title}</h3>
            <PortableText value={text} />
        </div>
    );
}
