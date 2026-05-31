import owners from "@/public/owners/owners.jpg";
import SplitSectionBleed from "../splitSectionBleed/SplitSectionBleed";

export default function Owners() {
    return (
        <SplitSectionBleed
            image={owners}
            imageAlt="Johan Bondebjer och Magnus Ekvall"
            imagePosition="right"
            background="alt"
        >
            <h2 className="quote">
                &quot;Lewa Bostad skapar hem att trivas i – designade för vardagens små stunder och
                framtidens stora ögonblick.&quot;
            </h2>
            <p>Johan Bondebjer och Magnus Ekvall</p>
        </SplitSectionBleed>
    );
}
