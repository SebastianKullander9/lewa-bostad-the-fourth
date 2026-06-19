import SplitSectionBleed from "../splitSectionBleed/SplitSectionBleed";

interface OwnersProps {
    quote: string;
    quoteAuthor: string;
    imageUrl: string;
    imageAlt: string;
}

export default function Owners({ quote, quoteAuthor, imageUrl, imageAlt }: OwnersProps) {
    return (
        <SplitSectionBleed
            image={imageUrl}
            imageAlt={imageAlt}
            imagePosition="right"
            background="alt"
        >
            <h2 className="quote">&quot;{quote}&quot;</h2>
            <p>{quoteAuthor}</p>
        </SplitSectionBleed>
    );
}
