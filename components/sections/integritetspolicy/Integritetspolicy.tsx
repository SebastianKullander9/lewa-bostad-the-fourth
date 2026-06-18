import styles from "./Integritetspolicy.module.css";
import { PolicyBlock, PolicyData } from "./data";

function renderBlock(block: PolicyBlock, index: number) {
    switch (block.type) {
        case "paragraph":
            return (
                <p key={index} className="prose">
                    {block.text}
                </p>
            );
        case "subheading":
            return <h4 key={index}>{block.text}</h4>;
        case "list":
            return (
                <ul key={index} className={styles.list}>
                    {block.items.map((item, i) => (
                        <li key={i} className={styles.listItem}>
                            <span className={styles.bullet} />
                            <p>
                                {item.title && (
                                    <strong className={styles.listTitle}>
                                        {item.title}:{" "}
                                    </strong>
                                )}
                                {item.text}
                            </p>
                        </li>
                    ))}
                </ul>
            );
    }
}

interface IntegritetspolicyProps {
    data: PolicyData;
}

export default function Integritetspolicy({ data }: IntegritetspolicyProps) {
    return (
        <section className="section section--default section--page-start">
            <div className={`container stack`}>
                <h1>{data.title}</h1>
                <div className={styles.sections}>
                    {data.sections.map((section, i) => (
                        <div key={i} className={styles.sectionBlock}>
                            <h3>{section.title}</h3>
                            <div className="stack-small">
                                {section.blocks.map((block, j) =>
                                    renderBlock(block, j),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
