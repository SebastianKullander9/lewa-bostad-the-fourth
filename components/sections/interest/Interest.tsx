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

export default function Interest(props: InterestProps) {
    const { type, background, project } = props;

    return (
        <section className={`section section--${background}`}>
            <div className={`${styles.text} container--narrow stack`}>
                {type === "specific" ? (
                    <>
                        <div>
                            <h2>Intresserad?</h2>
                            <h2>Hör av dig!</h2>
                        </div>
                        <p>Anmäl ditt intresse för att få mer information om {project.title}</p>
                    </>
                ) : (
                    <>
                        <h2>Intresseanmälan</h2>
                        <div>
                            <p>Vill du veta mer om våra pågående och kommande projekt?</p>
                            <p>Anmäl ditt intresse nedan för att hålla dig uppdaterad</p>
                        </div>
                    </>
                )}

                <Form {...props} />
            </div>
        </section>
    );
}
