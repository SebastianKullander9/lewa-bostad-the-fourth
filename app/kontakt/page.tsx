import ContactInfo from "@/components/sections/contactInfo/ContactInfo";
import ContactOwners from "@/components/sections/contactOwners/ContactOwners";
import Interest from "@/components/sections/interest/Interest";
import { projectData } from "@/components/sections/ourProjects/data";

export default function Page() {
    return (
        <div className="stack">
            <ContactInfo />
            <ContactOwners />
            <Interest type="broad" projects={projectData} background="alt" />
        </div>
    );
}
