import React from "react";
import styles from "./MobileMenu.module.css";

interface HamburgerProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                type="button"
                className={styles.hamburger}
                aria-expanded={isOpen}
                aria-controls="mobil-meny"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </>
    );
}
