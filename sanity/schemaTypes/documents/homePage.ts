import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
    name: "homePage",
    title: "Startsida",
    type: "document",
    groups: [
        { name: "intro", title: "Introsektionen", default: true },
        { name: "projects", title: "Projektsektionen" },
        { name: "keyfigures", title: "Nyckeltal" },
        { name: "about", title: "Om oss-sektionen" },
        { name: "quote", title: "Grundarcitat" },
    ],
    preview: {
        select: { title: "title" },
        prepare: ({ title }) => ({ title: title ?? "Startsida" }),
    },
    fields: [
        defineField({
            name: "title",
            type: "string",
            hidden: true,
            readOnly: true,
            initialValue: "Startsida",
        }),
        // ── Introsektionen ──────────────────────────────────────────────────
        defineField({
            name: "introTitle",
            title: "Rubrik",
            type: "string",
            group: "intro",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "introText",
            title: "Stycken",
            type: "array",
            group: "intro",
            description: "Varje stycke visas som ett eget textstycke bredvid bilden",
            of: [defineArrayMember({ type: "block" })],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "introImage",
            title: "Bild",
            type: "image",
            group: "intro",
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

        // ── Projektsektionen ─────────────────────────────────────────────
        defineField({
            name: "projectsCtaTitle",
            title: "Rubrik",
            type: "string",
            group: "projects",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "projectsCtaText",
            title: "Text",
            type: "text",
            rows: 3,
            group: "projects",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "projectsCtaProjects",
            title: "Utvalda projekt",
            type: "array",
            group: "projects",
            description: "Välj de 1–2 projekt som ska visas på startsidan",
            of: [defineArrayMember({ type: "reference", to: [{ type: "project" }] })],
            validation: (Rule) => Rule.required().min(1).max(2),
        }),

        // ── Nyckeltal ──────────────────────────────────────────────────────
        defineField({
            name: "keyFiguresTitle",
            title: "Rubrik",
            type: "string",
            group: "keyfigures",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "keyFiguresText",
            title: "Text",
            type: "text",
            rows: 3,
            group: "keyfigures",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "keyFigures",
            title: "Nyckeltal",
            type: "array",
            group: "keyfigures",
            description: "Dra för att ändra ordning",
            of: [defineArrayMember({ type: "keyFigure" })],
            validation: (Rule) => Rule.required().min(1),
        }),

        // ── Om oss-sektionen ───────────────────────────────────────────────
        defineField({
            name: "aboutTitleLine1",
            title: "Rubrik rad 1",
            type: "string",
            group: "about",
            description: 'T.ex. "Bra blir ännu bättre."',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "aboutTitleLine2",
            title: "Rubrik rad 2",
            type: "string",
            group: "about",
            description: 'T.ex. "Tillsammans."',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "aboutText",
            title: "Brödtext",
            type: "text",
            rows: 5,
            group: "about",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "aboutBlocks",
            title: "Värdeblock",
            type: "array",
            group: "about",
            description: "Tre block som presenterar Lewas kärnvärden",
            of: [defineArrayMember({ type: "valueBlock" })],
            validation: (Rule) => Rule.required().min(1).max(3),
        }),

        // ── Grundarcitat ───────────────────────────────────────────────────
        defineField({
            name: "quote",
            title: "Citat",
            type: "text",
            rows: 3,
            group: "quote",
            description: "Grundarnas citat som visas med bild",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "quoteAuthor",
            title: "Upphovsperson",
            type: "string",
            group: "quote",
            description: 'T.ex. "Johan Bondebjer och Magnus Ekvall"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "quoteImage",
            title: "Bild",
            type: "image",
            group: "quote",
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
    ],
});
