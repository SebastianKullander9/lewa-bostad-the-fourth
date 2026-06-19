"use client";

import { ConsentProvider } from "@/components/ui/consent/ConsentContext";
import CookieBanner from "@/components/ui/consent/CookieBanner";
import Footer from "@/components/ui/footer/Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
    return (
        <ConsentProvider>
            {children}
            <CookieBanner />
            <Footer />
        </ConsentProvider>
    );
}
