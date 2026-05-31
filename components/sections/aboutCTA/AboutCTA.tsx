import { textBlock } from "@/types/Props.types";

interface QASectionProps {
    title: string[];
    text: string;
    textBlocks: textBlock[];
    background?: string;
}

export default function AboutCTA({
    title,
    text,
    textBlocks,
    background = "default",
}: QASectionProps) {
    return (
        <section className={`section section--${background}`}>
            <div className="split split--text">
                <div className="stack">
                    <div>
                        {title.map((line, index) => (
                            <h2 key={index}>{line}</h2>
                        ))}
                    </div>

                    <p className="prose">{text}</p>
                </div>
                <div className="stack">
                    {textBlocks.map((block, index) => (
                        <div key={index} className="stack">
                            <h3>{block.title}</h3>
                            <p className="prose">{block.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
