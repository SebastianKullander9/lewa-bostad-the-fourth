import type { Metadata } from "next";
import ContactAquisition from "@/components/sections/contactAquisition/ContactAquisition";
import ContactInfo from "@/components/sections/contactInfo/ContactInfo";
import ContactOwners from "@/components/sections/contactOwners/ContactOwners";
import Interest from "@/components/sections/interest/Interest";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";
import { getContactPage, getAllProjects } from "@/lib/sanity/queries";

export const metadata: Metadata = {
    title: "Kontakt",
    description:
        "Kontakta Lewa Bostad – vi svarar på frågor om våra projekt, intresseanmälningar och markförvärv.",
    openGraph: {
        title: "Kontakt – Lewa Bostad",
        description:
            "Kontakta Lewa Bostad – vi svarar på frågor om våra projekt, intresseanmälningar och markförvärv.",
        images: [{ url: "/hero/hero.webp", alt: "Lewa Bostad" }],
    },
};

export default async function Page() {
    const [data, projects] = await Promise.all([getContactPage(), getAllProjects()]);

    return (
        <div className="stack">
            <FloatingCTA mode="instant" />
            <div className="section section--page-start stack">
                <ContactInfo heading={data.heading} intro={data.intro} email={data.email} />
                <ContactOwners owners={data.owners} />
                <ContactAquisition title={data.acquisitionTitle} text={data.acquisitionText} />
            </div>
            <Interest type="broad" projects={projects} background="alt" />
        </div>
    );
}
