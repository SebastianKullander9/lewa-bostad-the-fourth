import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import styles from "./Integritetspolicy.module.css";

interface PolicySection {
    title: string;
    content: PortableTextBlock[];
}

interface IntegritetspolicyProps {
    title: string;
    sections: PolicySection[];
}

export default function Integritetspolicy({ title, sections }: IntegritetspolicyProps) {
    return (
        <section className="section section--default section--page-start">
            <div className={`container stack`}>
                <h1>{title}</h1>
                <div className={styles.sections}>
                    {sections.map((section, i) => (
                        <div key={i} className={styles.sectionBlock}>
                            <h3>{section.title}</h3>
                            <div className="stack-small">
                                <PortableText
                                    value={section.content}
                                    components={{
                                        block: {
                                            normal: ({ children }) => (
                                                <p className="prose">{children}</p>
                                            ),
                                        },
                                        list: {
                                            bullet: ({ children }) => (
                                                <ul className={styles.list}>{children}</ul>
                                            ),
                                        },
                                        listItem: {
                                            bullet: ({ children }) => (
                                                <li className={styles.listItem}>
                                                    <span className={styles.bullet} />
                                                    <p>{children}</p>
                                                </li>
                                            ),
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
