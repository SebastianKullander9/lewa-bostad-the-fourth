"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo/lewa_bostad_logo_vit_recolored.svg";
import { menu } from "../menu";
import Link from "next/link";
import styles from "./Header.module.css";
import Hamburger from "../mobile/Hamburger";
import MobileMenu from "../mobile/MobileMenu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header} data-surface="brand">
            <Link href="/" className={styles.logo}>
                <Image
                    src={logo}
                    alt="Logga för lewa bostad"
                    style={{ height: "var(--logo-height)", width: "auto" }}
                />
            </Link>
            <nav className={styles.nav}>
                {menu.map((item) => (
                    <Link key={item.href} href={item.href}>
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className={styles.hamburger}>
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
                onClick={() => setIsOpen(false)}
            />

            <Suspense fallback={null}>
                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </Suspense>
        </header>
    );
}
