import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPageType = defineType({
    name: "aboutPage",
    title: "Om oss",
    type: "document",
    groups: [
        { name: "hero", title: "Hjältebild", default: true },
        { name: "values", title: "Värderingar" },
        { name: "sections", title: "Textsektioner" },
    ],
    preview: {
        select: { title: "title" },
        prepare: ({ title }) => ({ title: title ?? "Om oss" }),
    },
    fields: [
        defineField({
            name: "title",
            type: "string",
            hidden: true,
            readOnly: true,
            initialValue: "Om oss",
        }),
        // ── Hjältebild ─────────────────────────────────────────────────────
        defineField({
            name: "heroHeadingLine1",
            title: "Rubrik rad 1",
            type: "string",
            group: "hero",
            description: 'T.ex. "På väg mot något nytt."',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroHeadingLine2",
            title: "Rubrik rad 2",
            type: "string",
            group: "hero",
            description: 'T.ex. "Precis som du."',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroText",
            title: "Brödtext",
            type: "text",
            rows: 5,
            group: "hero",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroImage",
            title: "Bild",
            type: "image",
            group: "hero",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alternativ text",
                    type: "string",
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),

        // ── Värderingar ────────────────────────────────────────────────────
        defineField({
            name: "valuesHeading",
            title: "Sektionsrubrik",
            type: "string",
            group: "values",
            description: 'T.ex. "Tre byggstenar som skapar vår grund."',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "values",
            title: "Värderingar",
            type: "array",
            group: "values",
            description: "Tre värdeblock med rubrik och text",
            of: [defineArrayMember({ type: "valueBlock" })],
            validation: (Rule) => Rule.required().min(1).max(3),
        }),

        // ── Textsektioner ─────────────────────────────────────────────────
        defineField({
            name: "sections",
            title: "Textsektioner",
            type: "array",
            group: "sections",
            description: "Sektionerna visas i ordning – var och en med rubrik, text och bild",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "splitSection",
                    title: "Sektion",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Rubrik",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "text",
                            title: "Brödtext",
                            type: "text",
                            rows: 5,
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "image",
                            title: "Bild",
                            type: "image",
                            options: { hotspot: true },
                            fields: [
                                defineField({
                                    name: "alt",
                                    title: "Alternativ text",
                                    type: "string",
                                }),
                            ],
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "imagePosition",
                            title: "Bildens placering",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Vänster", value: "left" },
                                    { title: "Höger", value: "right" },
                                ],
                                layout: "radio",
                            },
                            initialValue: "right",
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    preview: {
                        select: { title: "title", media: "image" },
                    },
                }),
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
});
