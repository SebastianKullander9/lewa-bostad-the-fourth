"use client";

import { useActionState, startTransition, useRef, useState } from "react";
import { submitInterest } from "@/app/actions/submitInterest";
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

export default function Form(props: FormProps) {
    const { background } = props;
    const [state, action, pending] = useActionState(submitInterest, null);
    const formRef = useRef<HTMLFormElement>(null);
    const [accepted, setAccepted] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const [nativeValid, setNativeValid] = useState(false);

    const projectsValid =
        props.type === "specific" || selected.length > 0;
    const canSubmit = !pending && nativeValid && accepted && projectsValid;

    if (state?.success) {
        return <p>Tack för din anmälan! Vi hör av oss snart.</p>;
    }

    function handleChange() {
        setNativeValid(formRef.current?.checkValidity() ?? false);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (pending) return;
        startTransition(() => {
            action(new FormData(e.currentTarget));
        });
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            onChange={handleChange}
            className="stack"
        >
            <div className="stack-small">
                {props.type === "broad" ? (
                    <Dropdown
                        {...props}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                ) : (
                    <Dropdown {...props} />
                )}
                <Input
                    name="firstName"
                    type="text"
                    label="Förnamn"
                    background={background}
                    required
                />
                <Input
                    name="lastName"
                    type="text"
                    label="Efternamn"
                    background={background}
                    required
                />
                <Input
                    name="email"
                    type="email"
                    label="E-post"
                    background={background}
                    required
                />
                <Input
                    name="phone"
                    type="tel"
                    label="Telefon"
                    background={background}
                />
            </div>
            <div className="stack-small">
                <Gdpr accepted={accepted} onAcceptedChange={setAccepted} />
                {state?.errors && (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#a03030", fontSize: "var(--text-small)" }}>
                        {Object.values(state.errors).map((msg, i) => (
                            <li key={i}>{msg}</li>
                        ))}
                    </ul>
                )}
                <PrimaryButton
                    type="submit"
                    background="brand"
                    label={pending ? "Skickar..." : "Skicka"}
                    disabled={!canSubmit}
                />
            </div>
        </form>
    );
}
