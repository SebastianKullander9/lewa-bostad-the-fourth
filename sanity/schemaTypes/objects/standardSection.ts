import { defineField, defineType } from "sanity";

export const standardSectionType = defineType({
    name: "standardSection",
    title: "Textsektion med bild",
    type: "object",
    description: "En sektion med rubrik, brödtext och en bild som visas bredvid texten",
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
            rows: 6,
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
                    description: "Beskriv bilden kort – används av skärmläsare och sökmotorer",
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "imageOrientation",
            title: "Bildens placering",
            type: "string",
            description: "Välj om bilden ska visas till vänster eller höger om texten",
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
});
