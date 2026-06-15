import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import styles from "./About.module.css";
import { FeaturedProjectSections } from "@/types/Project.types";
import { Background } from "@/types/Props.types";

interface AboutProps {
    about: FeaturedProjectSections["about"];
    background?: Background;
}

export default function About({ about, background = "default" }: AboutProps) {
    return (
        <section className={`section section--${background}`}>
            <div className="container">
                <div className={`${styles.center} stack`}>
                    <h2>{about.title}</h2>
                    <div className="prose stack">
                        <p>{about.text}</p>
                        <div>
                            {about.bulletpoints.map((bulletpoint, index) => (
                                <Bulletpoint key={index} text={bulletpoint} />
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p>TVÅ BILDER HÄR PÅ PLANLÖSNINGAR</p>
                </div>
                <div className="stack">
                    {about.subSections.map((section, index) => (
                        <div key={index} className={`${styles.center} stack`}>
                            <h4>{section.title}</h4>
                            <div className="prose stack">
                                <p>{section.text}</p>
                                <div>
                                    {section.bulletpoints.map((bulletpoint, index) => (
                                        <Bulletpoint key={index} text={bulletpoint} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
