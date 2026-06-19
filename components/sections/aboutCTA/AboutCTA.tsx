import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { textBlock } from "@/types/Props.types";
import styles from "./AboutCTA.module.css";

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
                    <div className={`${styles.button} ${styles.hideMobile}`}>
                        <PrimaryButton
                            type="link"
                            background="brand"
                            label="Om oss"
                            href="/om-oss"
                        />
                    </div>
                </div>
                <div className="stack">
                    {textBlocks.map((block, index) => (
                        <div key={index} className="stack">
                            <h4>{block.title}</h4>
                            <p className="prose">{block.text}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.hideDesktop}>
                    <PrimaryButton type="link" background="brand" label="Om oss" href="/om-oss" />
                </div>
            </div>
        </section>
    );
}
