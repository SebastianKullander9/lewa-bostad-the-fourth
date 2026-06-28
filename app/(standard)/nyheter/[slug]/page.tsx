import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { IconArrowLeft } from "nucleo-sharp";
import { getNewsArticle, getNewsArticles, getNewsArticleSlugs } from "@/lib/sanity/queries";
import NewsThumbnail from "@/components/sections/news/thumbnail/NewsThumbnail";
import styles from "./page.module.css";

const BASE = "https://lewabostad.se";

function formatDate(dateStr: string): string {
    const months = [
        "januari", "februari", "mars", "april", "maj", "juni",
        "juli", "augusti", "september", "oktober", "november", "december",
    ];
    const [year, month, day] = dateStr.split("-").map(Number);
    return `${day} ${months[month - 1]} ${year}`;
}

const bodyComponents = {
    block: {
        normal: ({ children }: { children?: React.ReactNode }) => <p>{children}</p>,
        h2: ({ children }: { children?: React.ReactNode }) => <h2>{children}</h2>,
        h3: ({ children }: { children?: React.ReactNode }) => <h3>{children}</h3>,
    },
    marks: {
        link: ({ children, value }: { children?: React.ReactNode; value?: { href: string; blank?: boolean } }) => (
            <a
                href={value?.href}
                target={value?.blank ? "_blank" : undefined}
                rel={value?.blank ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }: { children?: React.ReactNode }) => (
            <ul className={styles.list}>{children}</ul>
        ),
        number: ({ children }: { children?: React.ReactNode }) => (
            <ol className={styles.list}>{children}</ol>
        ),
    },
};

export async function generateStaticParams() {
    const slugs = await getNewsArticleSlugs();
    if (slugs.length === 0) return [{ slug: "_" }];
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = await getNewsArticle(slug);
    if (!article) return {};
    const description = article.excerpt.slice(0, 150);
    return {
        title: article.title,
        description,
        openGraph: {
            type: "article",
            title: `${article.title} – Lewa Bostad`,
            description,
            url: `${BASE}/nyheter/${slug}`,
            publishedTime: new Date(article.publishedAt).toISOString(),
            images: article.image
                ? [{ url: article.image.src, alt: article.image.alt, width: 1200, height: 630 }]
                : undefined,
        },
    };
}

export default async function NewsArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const [article, allArticles] = await Promise.all([
        getNewsArticle(slug),
        getNewsArticles(),
    ]);
    if (!article) notFound();

    const related = allArticles
        .filter((a) => a.slug !== slug)
        .slice(0, 2);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.title,
        description: article.excerpt.slice(0, 150),
        datePublished: new Date(article.publishedAt).toISOString(),
        dateModified: new Date(article.publishedAt).toISOString(),
        image: article.image ? [article.image.src] : undefined,
        url: `${BASE}/nyheter/${slug}`,
        author: {
            "@type": "Organization",
            name: "Lewa Bostad",
            url: BASE,
        },
        publisher: {
            "@type": "Organization",
            name: "Lewa Bostad",
            url: BASE,
            logo: { "@type": "ImageObject", url: `${BASE}/icon.svg` },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE}/nyheter/${slug}`,
        },
    };

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className="section section--default section--page-start">
                <article className={`container ${styles.article}`}>
                    <Link href="/nyheter" className={`text-small ${styles.back}`}>
                        <IconArrowLeft size={14} /> Alla nyheter
                    </Link>
                    <div className={styles.header}>
                        <span className="text-meta">{formatDate(article.publishedAt)}</span>
                        <h1>{article.title}</h1>
                    </div>
                    {article.image && (
                        <div className={styles.imageWrap}>
                            <Image
                                src={article.image.src}
                                alt={article.image.alt || article.title}
                                fill
                                priority
                                className={styles.image}
                                sizes="(min-width: 768px) 800px, 100vw"
                            />
                        </div>
                    )}
                    <div className={styles.body}>
                        <PortableText
                            value={article.body as PortableTextBlock[]}
                            components={bodyComponents}
                        />
                    </div>
                </article>
            </section>
            {related.length > 0 && (
                <section className="section section--alt">
                    <div className={`container--wide ${styles.related}`}>
                        <h2>Fler nyheter</h2>
                        <div className={styles.relatedGrid}>
                            {related.map((a) => (
                                <NewsThumbnail key={a.slug} article={a} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
