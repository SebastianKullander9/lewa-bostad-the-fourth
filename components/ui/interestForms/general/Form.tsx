import Dropdown from "../../inputs/dropdown/Dropdown";
import Input from "../../inputs/input/Input";
import { Background } from "@/types/Props.types";
import { Project } from "@/types/Project.types";
import PrimaryButton from "../../buttons/PrimaryButton";
import Gdpr from "../../inputs/gdpr/Gdpr";

type FormProps = {
    background: Background;
} & (
    | { type: "broad"; projects?: Project[]; project?: never }
    | { type: "specific"; project: Project; projects?: never }
);

export default function Form({ background, project, projects }: FormProps) {
    return (
        <form className="stack">
            <div className="stack-small">
                <Dropdown type="broad" projects={projects} background={background} />
                <Input type="text" label="Förnamn" background={background} required={true} />
                <Input type="text" label="Efternamn" background={background} required={true} />
                <Input type="email" label="E-post" background={background} required={true} />
                <Input type="number" label="Telefon" background={background} />
            </div>
            <div className="stack-small">
                <Gdpr />
                <PrimaryButton type="button" background="brand" label="Skicka" />
            </div>
        </form>
    );
}
