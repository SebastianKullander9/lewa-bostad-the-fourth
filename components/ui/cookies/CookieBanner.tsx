"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import PrimaryButton from "../buttons/PrimaryButton";
import styles from "./CookieBanner.module.css";

type ConsentStatus = "accepted" | "declined" | "pending";

const COOKIE_NAME = "cookie_consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

function getConsentCookie(): ConsentStatus {
    const cookies = Object.fromEntries(
        document.cookie
            .split("; ")
            .filter(Boolean)
            .map((c) => {
                const [key, ...val] = c.split("=");
                return [key, val.join("=")];
            }),
    );

    const value = cookies[COOKIE_NAME];
    if (value === "accepted" || value === "declined") return value;
    return "pending";
}

function setConsentCookie(status: "accepted" | "declined") {
    document.cookie = `${COOKIE_NAME}=${status}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax; Secure`;
}

export default function CookieBanner() {
    const [consent, setConsent] = useState<ConsentStatus | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setConsent(getConsentCookie());
    }, []);

    const handleAccept = () => {
        setConsentCookie("accepted");
        setConsent("accepted");
    };

    const handleDecline = () => {
        setConsentCookie("declined");
        setConsent("declined");
    };

    return (
        <>
            {consent === "pending" && (
                <div className={`${styles.wrapper} stack`}>
                    <h2 className={styles.title}>
                        Din integritet är viktig för oss
                    </h2>
                    <p className="text-small">
                        Vi använder cookies för att förstå hur besökare
                        använder vår webbplats — det hjälper oss att göra
                        den bättre. Vi delar aldrig dina uppgifter med
                        tredje part i marknadsföringssyfte. Läs mer i vår
                        integritetspolicy.
                    </p>
                    <div className={styles.buttons}>
                        <PrimaryButton
                            type="button"
                            label="Acceptera"
                            background="brand"
                            onClick={handleAccept}
                        />
                        <PrimaryButton
                            type="button"
                            label="Avvisa"
                            background="brand"
                            onClick={handleDecline}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
