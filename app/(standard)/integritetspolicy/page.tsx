import Integritetspolicy from "@/components/sections/integritetspolicy/Integritetspolicy";
import { integritetspolicyData, PolicyData } from "@/components/sections/integritetspolicy/data";

// TODO: replace with Sanity fetch when content is migrated
async function getPolicyData(): Promise<PolicyData> {
    return integritetspolicyData;
}

export default async function Page() {
    const data = await getPolicyData();

    return <Integritetspolicy data={data} />;
}
