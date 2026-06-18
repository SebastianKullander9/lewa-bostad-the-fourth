import styles from "./Input.module.css";
import { Background } from "@/types/Props.types";

interface InputProps {
    name: string;
    type: "text" | "email" | "number" | "tel";
    label: string;
    background: Background;
    required?: boolean;
}

export default function Input({
    name,
    type,
    label,
    background,
    required = false,
}: InputProps) {
    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.input}
                name={name}
                type={type}
                placeholder=" "
                data-background={background}
                required={required}
            />
            <p className={styles.label}>
                {label} {required && <span>*</span>}
            </p>
        </div>
    );
}
