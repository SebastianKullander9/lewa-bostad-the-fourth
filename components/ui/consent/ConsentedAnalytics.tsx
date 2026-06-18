"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useConsent } from "./ConsentContext";

export default function ConsentedAnalytics() {
    const { consent } = useConsent();
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    if (!gaId || consent !== "accepted") return null;

    return <GoogleAnalytics gaId={gaId} />;
}
