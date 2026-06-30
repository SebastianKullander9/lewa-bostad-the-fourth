import { defineArrayMember, defineField, defineType } from "sanity";

export const newsArticleType = defineType({
    name: "newsArticle",
    title: "Nyhet",
    type: "document",
    groups: [
        { name: "content", title: "Innehåll", default: true },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Rubrik",
            type: "string",
            group: "content",
            validation: (Rule) => Rule.required().error("Rubrik krävs"),
        }),
        defineField({
            name: "slug",
            title: "URL-adress",
            type: "slug",
            group: "content",
            description: "Genereras automatiskt från rubriken. Ändra inte efter publicering.",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "publishedAt",
            title: "Publiceringsdatum",
            type: "date",
            group: "content",
            description: "Datumet som visas på nyheten och används för sortering.",
            options: { dateFormat: "YYYY-MM-DD" },
            validation: (Rule) => Rule.required().error("Publiceringsdatum krävs"),
        }),
        defineField({
            name: "image",
            title: "Omslagsbild",
            type: "image",
            group: "content",
            description: "Visas i nyhetslistan och som omslagsbild på artikelsidan. Används vid delning på LinkedIn och sociala medier.",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alternativ text",
                    type: "string",
                    description: "Beskriv bilden kort – visas om bilden inte kan laddas och läses av sökmotorer",
                }),
            ],
        }),
        defineField({
            name: "body",
            title: "Artikeltext",
            type: "array",
            group: "content",
            of: [
                defineArrayMember({
                    type: "block",
                    styles: [
                        { title: "Brödtext", value: "normal" },
                        { title: "Rubrik", value: "h2" },
                        { title: "Underrubrik", value: "h3" },
                    ],
                    marks: {
                        decorators: [
                            { title: "Fet", value: "strong" },
                            { title: "Kursiv", value: "em" },
                            { title: "Inledning", value: "lead" },
                        ],
                        annotations: [
                            defineArrayMember({
                                name: "link",
                                type: "object",
                                title: "Länk",
                                fields: [
                                    defineField({
                                        name: "href",
                                        title: "URL",
                                        type: "string",
                                        description: "Webb-URL, t.ex. https://... eller e-post, t.ex. mailto:namn@exempel.se",
                                        validation: (Rule) =>
                                            Rule.custom((value) => {
                                                if (!value) return true;
                                                if (value.startsWith("/")) return true;
                                                try {
                                                    const { protocol } = new URL(value);
                                                    if (!["http:", "https:", "mailto:", "tel:"].includes(protocol)) {
                                                        return "Länken måste börja med http://, https://, mailto: eller tel:";
                                                    }
                                                    return true;
                                                } catch {
                                                    return "Ange en giltig URL eller mailto:-länk";
                                                }
                                            }),
                                    }),
                                    defineField({
                                        name: "blank",
                                        title: "Öppna i nytt fönster",
                                        type: "boolean",
                                        initialValue: false,
                                    }),
                                ],
                            }),
                        ],
                    },
                    lists: [
                        { title: "Punktlista", value: "bullet" },
                        { title: "Numrerad lista", value: "number" },
                    ],
                }),
            ],
            validation: (Rule) => Rule.required().min(1).error("Artikeltext krävs"),
        }),
    ],
    preview: {
        select: { title: "title", subtitle: "publishedAt", media: "image" },
        prepare({ title, subtitle, media }) {
            const date = subtitle
                ? new Date(subtitle).toLocaleDateString("sv-SE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                  })
                : "Inget datum";
            return { title, subtitle: date, media };
        },
    },
});
