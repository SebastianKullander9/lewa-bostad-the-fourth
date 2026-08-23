import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import styles from "./Section.module.css";

/*interface sectionPlacerholderProps {

}*/

export default function SectionPlaceholder() {
    return (
        <section className={styles.section}>
            <div className={styles.button}>
                <PrimaryButton
                    type="link"
                    background="brand"
                    href="/prislista"
                    label="Prislista"
                />
            </div>
        </section>
    );
}
