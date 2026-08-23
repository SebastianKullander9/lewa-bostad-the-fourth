import type { Metadata } from "next";
import Prislista from "@/components/sections/prislista/Prislista";

export const metadata: Metadata = {
    title: "Prislista",
    description: "Se lediga bostäder, priser och avgifter hos Lewa Bostad.",
};

export default function PrislistaPage() {
    return <Prislista />;
}
