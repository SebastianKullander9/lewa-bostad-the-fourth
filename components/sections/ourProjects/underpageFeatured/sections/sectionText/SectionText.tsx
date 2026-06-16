import styles from "./SectionText.module.css";
import { SectionText as SectionTextType } from "@/types/Project.types";
import { Background } from "@/types/Props.types";

interface SectionTextProps {
    data: SectionTextType;
    background?: Background;
}

export default function SectionText({ data, background = "default" }: SectionTextProps) {
    return (
        <section className={`section section--${background}`}>
            <div className={`container ${styles.inner}`}>
                <h2>{data.title}</h2>
                <p className="prose">{data.text}</p>
            </div>
        </section>
    );
}
