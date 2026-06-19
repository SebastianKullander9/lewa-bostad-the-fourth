import type { Metadata } from "next";
import ContactAquisition from "@/components/sections/contactAquisition/ContactAquisition";
import ContactInfo from "@/components/sections/contactInfo/ContactInfo";
import ContactOwners from "@/components/sections/contactOwners/ContactOwners";
import Interest from "@/components/sections/interest/Interest";
import FloatingCTA from "@/components/ui/floatingCTA/FloatingCTA";
import { projectData } from "@/components/sections/ourProjects/data";

export const metadata: Metadata = {
    title: "Kontakt",
    description:
        "Kontakta Lewa Bostad – vi svarar på frågor om våra projekt, intresseanmälningar och markförvärv.",
};

export default function Page() {
    return (
        <div className=" stack ">
            <FloatingCTA mode="instant" />
            <div className="section section--page-start stack">
                <ContactInfo />
                <ContactOwners />
                <ContactAquisition />
            </div>

            <Interest type="broad" projects={projectData} background="alt" />
        </div>
    );
}
