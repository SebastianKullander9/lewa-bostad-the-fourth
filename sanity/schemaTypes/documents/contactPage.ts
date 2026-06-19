import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPageType = defineType({
    name: "contactPage",
    title: "Kontakt",
    type: "document",
    groups: [
        { name: "info", title: "Kontaktinfo", default: true },
        { name: "owners", title: "Kontaktpersoner" },
        { name: "acquisition", title: "Markförvärv" },
    ],
    preview: {
        select: { title: "title" },
        prepare: ({ title }) => ({ title: title ?? "Kontakt" }),
    },
    fields: [
        defineField({
            name: "title",
            type: "string",
            hidden: true,
            readOnly: true,
            initialValue: "Kontakt",
        }),
        // ── Kontaktinfo ────────────────────────────────────────────────────
        defineField({
            name: "heading",
            title: "Rubrik",
            type: "string",
            group: "info",
            description: 'T.ex. "Välkommen att kontakta oss."',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "intro",
            title: "Introduktionstext",
            type: "text",
            rows: 3,
            group: "info",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "E-postadress",
            type: "string",
            group: "info",
            description: 'T.ex. "info@lewabostad.se"',
            validation: (Rule) => Rule.required(),
        }),

        // ── Kontaktpersoner ────────────────────────────────────────────────
        defineField({
            name: "owners",
            title: "Kontaktpersoner",
            type: "array",
            group: "owners",
            description: "Visas som kontaktkort på kontaktsidan",
            of: [defineArrayMember({ type: "contactOwner" })],
            validation: (Rule) => Rule.required().min(1),
        }),

        // ── Markförvärv ────────────────────────────────────────────────────
        defineField({
            name: "acquisitionTitle",
            title: "Rubrik",
            type: "string",
            group: "acquisition",
            description: 'T.ex. "Markförvärv"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "acquisitionText",
            title: "Text",
            type: "array",
            group: "acquisition",
            description: "Varje stycke visas separat",
            of: [defineArrayMember({ type: "block" })],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
});
