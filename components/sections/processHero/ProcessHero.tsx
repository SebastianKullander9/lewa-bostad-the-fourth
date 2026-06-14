import owners from "@/public/aboutHero/owners.jpg";

import SplitSectionBleed from "../splitSectionBleed/SplitSectionBleed";

export default function ProcessHero() {
    return (
        <SplitSectionBleed
            image={owners}
            imageAlt="Johan Bondebjer och Magnus Ekvall"
            imagePosition="right"
            background="default"
            fullHeight
        >
            <div>
                <h2>Processen.</h2>
            </div>

            <p className="prose">
                Att köpa bostad är en av livets största affärer. Hos Lewa Bostad vill vi att resan
                till ditt nya hem ska kännas trygg, tydlig och väl genomtänkt. Här guidar vi dig
                genom köpprocessens olika steg – från intresseanmälan och avtalsskrivning till
                tillträde och inflyttning. Med rätt information och stöd längs vägen blir det
                enklare att fatta trygga beslut och se fram emot livet i ditt nya hem.
            </p>
        </SplitSectionBleed>
    );
}
