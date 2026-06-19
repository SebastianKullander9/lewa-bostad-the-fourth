import type { Metadata } from "next";
import Integritetspolicy from "@/components/sections/integritetspolicy/Integritetspolicy";
import { integritetspolicyData, PolicyData } from "@/components/sections/integritetspolicy/data";

export const metadata: Metadata = {
    title: "Integritetspolicy",
    description:
        "Lewa Bostads integritetspolicy – hur vi samlar in, använder och skyddar dina personuppgifter.",
};

// TODO: replace with Sanity fetch when content is migrated
async function getPolicyData(): Promise<PolicyData> {
    return integritetspolicyData;
}

export default async function Page() {
    const data = await getPolicyData();

    return <Integritetspolicy data={data} />;
}
