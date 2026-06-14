import { Project } from "@/types/Project.types";
import styles from "./Hero.module.css";
import Image from "next/image";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import HeaderScrollWatcher from "../../underpageStandard/hero/HeaderScrollWatcher";

interface HeroProps {
    project: Project;
}

export default function Hero({ project }: HeroProps) {
    return (
        <section className={styles.sectionWrapper} id="hero">
            <HeaderScrollWatcher />
            <div className={styles.imageWrapper} id="hero-image">
                <Image
                    src={project.images.thumbnail.src}
                    alt={project.images.thumbnail.alt}
                    className={styles.image}
                    fill
                />
                <div className={styles.buttonWrapper}>
                    <PrimaryButton
                        type="link"
                        href={`/vara-projekt/${project.slug}/galleri`}
                        label="Visa alla bilder"
                        background="ghost"
                    />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.outer}>
                    <h1>
                        {project.title}, <span className={styles.italic}>{project.location}</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
