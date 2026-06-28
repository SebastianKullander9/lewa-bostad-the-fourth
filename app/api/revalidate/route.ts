import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type SanityWebhookPayload = {
    _type: string;
    _id: string;
    slug?: string;
};

const TAG_MAP: Record<string, string[]> = {
    project: ["projects"],
    newsArticle: ["news-articles"],
    homePage: ["home-page"],
    aboutPage: ["about-page"],
    contactPage: ["contact-page"],
    buyingGuidePage: ["buying-guide-page"],
    privacyPolicyPage: ["privacy-policy-page"],
};

export async function POST(req: NextRequest) {
    const secret = process.env.SANITY_WEBHOOK_SECRET;
    if (!secret) {
        return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
    }

    const body = await req.text();
    const signature = req.headers.get(SIGNATURE_HEADER_NAME) ?? "";

    if (!(await isValidSignature(body, signature, secret))) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(body) as SanityWebhookPayload;
    const tags = TAG_MAP[payload._type];

    if (!tags) {
        return NextResponse.json({ message: "Ignored: unknown document type" }, { status: 200 });
    }

    for (const tag of tags) {
        revalidateTag(tag, "max");
    }

    if (payload._type === "project" && payload.slug) {
        revalidateTag(`project-${payload.slug}`, "max");
    }

    if (payload._type === "newsArticle" && payload.slug) {
        revalidateTag(`news-article-${payload.slug}`, "max");
    }

    return NextResponse.json({ revalidated: true, type: payload._type });
}
