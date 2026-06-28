import type { PortableTextBlock } from "@portabletext/types";

export type NewsImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type NewsArticlePreview = {
    slug: string;
    title: string;
    image: NewsImage | null;
    publishedAt: string;
    excerpt: string;
};

export type NewsArticle = NewsArticlePreview & {
    body: PortableTextBlock[];
};
