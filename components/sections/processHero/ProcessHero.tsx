import SplitSectionBleed from "../splitSectionBleed/SplitSectionBleed";

interface ProcessHeroProps {
    heading: string;
    text: string;
    imageUrl: string;
    imageAlt: string;
}

export default function ProcessHero({ heading, text, imageUrl, imageAlt }: ProcessHeroProps) {
    return (
        <SplitSectionBleed
            image={imageUrl}
            imageAlt={imageAlt}
            imagePosition="right"
            background="default"
            fullHeight
        >
            <div>
                <h2>{heading}</h2>
            </div>
            <p className="prose">{text}</p>
        </SplitSectionBleed>
    );
}
