import { Project } from "@/types/Project.types";
import Form from "@/components/ui/interestForms/general/Form";
import { Background } from "@/types/Props.types";
import styles from "./Interest.module.css";

type InterestProps = {
    background: Background;
} & (
    | { type: "broad"; projects?: Project[]; project?: never }
    | { type: "specific"; project: Project; projects?: never }
);

export default function Interest({ type, project, projects, background }: InterestProps) {
    return (
        <section className={`section section--${background}`}>
            <div className={`${styles.text} container--narrow stack`}>
                <h1>Intresseanmälan</h1>
                <div>
                    <p>Vill du veta mer om våra pågående och kommande projekt?</p>
                    <p>Anmäl ditt intresse nedan för att hålla dig uppdaterad</p>
                </div>
                <Form type="broad" background={background} projects={projects} />
            </div>
        </section>
    );
}
