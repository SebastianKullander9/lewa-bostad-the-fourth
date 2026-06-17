import { FeaturedProject } from "@/types/Project.types";
import styles from "./Hero.module.css";
import Image from "next/image";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import HeaderScrollWatcher from "../../underpageStandard/hero/HeaderScrollWatcher";

interface HeroProps {
    project: FeaturedProject;
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
        </section>
    );
}
