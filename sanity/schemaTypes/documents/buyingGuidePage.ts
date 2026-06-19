import { defineArrayMember, defineField, defineType } from "sanity";

export const buyingGuidePageType = defineType({
    name: "buyingGuidePage",
    title: "Att köpa bostad",
    type: "document",
    groups: [
        { name: "hero", title: "Hjältebild", default: true },
        { name: "steps", title: "Processteg" },
    ],
    preview: {
        select: { title: "title" },
        prepare: ({ title }) => ({ title: title ?? "Att köpa bostad" }),
    },
    fields: [
        defineField({
            name: "title",
            type: "string",
            hidden: true,
            readOnly: true,
            initialValue: "Att köpa bostad",
        }),
        // ── Hjältebild ─────────────────────────────────────────────────────
        defineField({
            name: "heroHeading",
            title: "Rubrik",
            type: "string",
            group: "hero",
            description: 'T.ex. "Processen."',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroText",
            title: "Introduktionstext",
            type: "text",
            rows: 6,
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

        // ── Processteg ─────────────────────────────────────────────────────
        defineField({
            name: "steps",
            title: "Processteg",
            type: "array",
            group: "steps",
            description: "Stegen visas i ordning på sidan. Dra för att ändra ordning.",
            of: [defineArrayMember({ type: "processStep" })],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
});
