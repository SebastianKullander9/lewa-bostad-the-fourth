import styles from "./Input.module.css";
import { Background } from "@/types/Props.types";

interface InputProps {
    type: "text" | "email" | "number";
    label: string;
    background: Background;
    required?: boolean;
}

export default function Input({ type, label, background, required = false }: InputProps) {
    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.input}
                type={type}
                placeholder=" "
                data-background={background}
                required={required}
            />
            <p className={styles.label}>{label} *</p>
        </div>
    );
}
