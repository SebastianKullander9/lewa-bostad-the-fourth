import SplitSectionBleed from "../splitSectionBleed/SplitSectionBleed";

interface AboutHeroProps {
    headingLine1: string;
    headingLine2: string;
    text: string;
    imageUrl: string;
    imageAlt: string;
}

export default function AboutHero({ headingLine1, headingLine2, text, imageUrl, imageAlt }: AboutHeroProps) {
    return (
        <SplitSectionBleed
            image={imageUrl}
            imageAlt={imageAlt}
            imagePosition="right"
            background="default"
            fullHeight
        >
            <div>
                <h2>{headingLine1}</h2>
                <h2>{headingLine2}</h2>
            </div>
            <p className="prose">{text}</p>
        </SplitSectionBleed>
    );
}
