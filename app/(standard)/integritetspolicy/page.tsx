import type { Metadata } from "next";
import Integritetspolicy from "@/components/sections/integritetspolicy/Integritetspolicy";
import { getPrivacyPolicy } from "@/lib/sanity/queries";

export const metadata: Metadata = {
    title: "Integritetspolicy",
    description:
        "Lewa Bostads integritetspolicy – hur vi samlar in, använder och skyddar dina personuppgifter.",
};

export default async function Page() {
    const data = await getPrivacyPolicy();

    return <Integritetspolicy title={data.title} sections={data.sections} />;
}
