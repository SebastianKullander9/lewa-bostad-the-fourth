import Image from "next/image";
import { Background } from "@/types/Props.types";
import styles from "./SplitSection.module.css";

interface SplitSectionProps {
    title: string;
    headingLevel?: "h1" | "h2" | "h3";
    headingSize?: "h1" | "h2" | "h3";
    text: string[];
    image: string;
    imageAlt: string;
    imagePosition: "left" | "right";
    background?: Background;
}

const headingSizeClass: Record<string, string> = {
    h2: styles.headingH2,
    h3: styles.headingH3,
};

export default function SplitSection({
    title,
    headingLevel = "h2",
    headingSize,
    text,
    image,
    imageAlt,
    imagePosition,
    background = "default",
}: SplitSectionProps) {
    const Heading = headingLevel;
    const sizeClass = headingSize ? headingSizeClass[headingSize] : undefined;
    return (
        <section className={`section section--${background}`}>
            <div className={`split ${imagePosition === "left" ? "split--image-left" : ""}`}>
                <div className="split__content stack prose">
                    <Heading className={sizeClass}>{title}</Heading>
                    {text.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
            </div>
        </section>
    );
}
