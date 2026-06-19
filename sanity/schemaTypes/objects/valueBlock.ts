import { defineField, defineType } from "sanity";

export const valueBlockType = defineType({
    name: "valueBlock",
    title: "Värdeblock",
    type: "object",
    description: "Ett block med rubrik och brödtext – används för att lyfta fram kärnvärden",
    fields: [
        defineField({
            name: "title",
            title: "Rubrik",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: "title" },
    },
});
