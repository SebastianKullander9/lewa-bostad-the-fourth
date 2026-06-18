"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

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

type ConsentContextValue = {
    consent: ConsentStatus | null;
    accept: () => void;
    decline: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
    const [consent, setConsent] = useState<ConsentStatus | null>(null);

    useEffect(() => {
        setConsent(getConsentCookie());
    }, []);

    const accept = () => {
        setConsentCookie("accepted");
        setConsent("accepted");
    };

    const decline = () => {
        setConsentCookie("declined");
        setConsent("declined");
    };

    return (
        <ConsentContext.Provider value={{ consent, accept, decline }}>
            {children}
        </ConsentContext.Provider>
    );
}

export function useConsent(): ConsentContextValue {
    const ctx = useContext(ConsentContext);
    if (!ctx) {
        throw new Error(
            "useConsent must be used within a ConsentProvider",
        );
    }
    return ctx;
}
