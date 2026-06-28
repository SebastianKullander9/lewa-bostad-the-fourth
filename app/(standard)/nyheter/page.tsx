import type { Metadata } from "next";
import styles from "./page.module.css";
import { getNewsArticles } from "@/lib/sanity/queries";
import NewsThumbnail from "@/components/sections/news/thumbnail/NewsThumbnail";

export const metadata: Metadata = {
    title: "Nyheter",
    description:
        "Senaste nytt från Lewa Bostad – nyheter, projekt och pressmeddelanden.",
    openGraph: {
        title: "Nyheter – Lewa Bostad",
        description:
            "Senaste nytt från Lewa Bostad – nyheter, projekt och pressmeddelanden.",
    },
};

export default async function Nyheter() {
    const articles = await getNewsArticles();

    return (
        <section className="section section--default section--page-start">
            <div className={`container--wide ${styles.inner}`}>
                <div className={styles.pageHeader}>
                    <span className={`text-meta ${styles.eyebrow}`}>
                        Aktuellt från oss
                    </span>
                    <h1>Nyheter & press</h1>
                </div>
                <div className={styles.grid}>
                    {articles.map((article) => (
                        <NewsThumbnail key={article.slug} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
}
