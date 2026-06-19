import { defineField, defineType } from "sanity";

export const keyFigureType = defineType({
    name: "keyFigure",
    title: "Nyckeltal",
    type: "object",
    fields: [
        defineField({
            name: "value",
            title: "Siffra",
            type: "string",
            description: 'T.ex. "3300" eller "97"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "suffix",
            title: "Enhet",
            type: "string",
            description: 'T.ex. "St", "Mkr", "%"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "label",
            title: "Etikett",
            type: "string",
            description: 'T.ex. "Bostäder under produktion"',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: "label", subtitle: "value" },
        prepare: ({ title, subtitle }) => ({ title, subtitle }),
    },
});
