import type { Metadata } from "next";
import Hero from "@/components/sections/hero/Hero";
import ProjectsCTA from "@/components/sections/projectsCTA/ProjectsCTA";
import SplitSection from "@/components/sections/splitSection/SplitSection";
import intro from "@/public/intro/intro.webp";
import { projectCTAData } from "@/components/sections/projectsCTA/data";
import { keyfigureData } from "@/components/sections/keyfigures/data";
import { aboutCTAData } from "@/components/sections/aboutCTA/data";
import KeyFigureSection from "@/components/sections/keyfigures/KeyFigureSection";
import AboutCTA from "@/components/sections/aboutCTA/AboutCTA";
import Owners from "@/components/sections/owners/Owners";

export const metadata: Metadata = {
    description:
        "Lewa Bostad bygger arkitektritade radhus och parhus med omsorgsfull design i Stockholms förorter – trivsamma kvarter där livet får ta plats.",
};

export default function Home() {
    return (
        <div>
            <Hero />
            <SplitSection
                title="Omtanke i kvadrat."
                headingLevel="h1"
                text={[
                    "Ett hem är så mycket mer än det som ryms inom fyra väggar. Hemkänsla handlar också om grannar som samlas vid grillen och barn som leker tryggt mellan husen.",
                    "Lewa Bostad bygger arkitektritade radhus och parhus med omsorgsfull design. Men framförallt skapar vi trivsamma kvarter där livet får ta plats – både innanför tröskeln och utanför dörren.",
                ]}
                image={intro}
                imageAlt="Bild på ett vardagsrum ifrång projekt glansbaggen"
                imagePosition="right"
            />
            <ProjectsCTA
                project={projectCTAData[0]}
                project2={projectCTAData[1]}
                background="alt"
                title="Hitta hem hos oss."
                text="Lewa Bostad bygger radhus och parhus i bostadsrättsform. Husen utformas med fokus på hållbar arkitektur, genomtänkt design och hög kvalitet i varje detalj."
            />
            <KeyFigureSection
                title="Etablerad erfarenhet."
                text="Vi är ett nytt bostadsföretag med etablerad grund. Kencernens nyckeltal
                        bygger på historik från de två bolag som nu bildar Lewa Bostad."
                keyFigures={keyfigureData}
                background="brand"
            />
            <AboutCTA
                title={["Bra blir ännu bättre.", "Tillsammans."]}
                text="Två bostadsaktörer med lång erfarenhet har gått samman och bildat Lewa Bostad. Företaget drivs av Johan Bondebjer och Magnus Ekvall från tidigare Bjerbo Bostad samt Fredrik Lidjan från Reliwe. Med en stark projektportfölj och god finansiell ställning fortsätter vi att skapa hållbara hem och värde för både kunder och samhälle."
                textBlocks={aboutCTAData}
            />
            <Owners />
        </div>
    );
}
