import Link from "next/link";
import { IconArrowRight } from "nucleo-sharp";
import styles from "./NewsSection.module.css";
import { Background } from "@/types/Props.types";
import { NewsArticlePreview } from "@/types/News.types";
import NewsThumbnail from "../thumbnail/NewsThumbnail";

interface NewsSectionProps {
    background: Background;
    articles: NewsArticlePreview[];
}

export default function NewsSection({ background, articles }: NewsSectionProps) {
    const latest = articles.slice(0, 4);

    return (
        <section className={`section section--${background}`}>
            <div className={`container--wide ${styles.inner}`}>
                <h2>Nyheter</h2>
                <div className={styles.grid}>
                    {latest.map((article) => (
                        <NewsThumbnail key={article.slug} article={article} />
                    ))}
                </div>
                <Link href="/nyheter" className={styles.viewAll}>
                    Visa alla nyheter <IconArrowRight size={14} />
                </Link>
            </div>
        </section>
    );
}
