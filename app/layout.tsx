import type { Metadata } from "next";
import "./styles/globals.css";

import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Footer from "@/components/ui/footer/Footer";
import { ConsentProvider } from "@/components/ui/consent/ConsentContext";
import CookieBanner from "@/components/ui/consent/CookieBanner";
import ConsentedAnalytics from "@/components/ui/consent/ConsentedAnalytics";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: { default: "Lewa Bostad", template: "%s – Lewa Bostad" },
    description:
        "Lewa Bostad bygger arkitektritade radhus och parhus i bostadsrättsform i Stockholms förorter – trivsamma kvarter där livet får ta plats.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="sv"
            className={`${dmSans.variable} ${cormorant.variable}`}
        >
            <body>
                <ConsentProvider>
                    {children}
                    <CookieBanner />
                    <Footer />
                </ConsentProvider>
            </body>
        </html>
    );
}
