import { defineField, defineType } from "sanity";

export const objectInfoType = defineType({
    name: "objectInfo",
    title: "Faktarad",
    type: "object",
    description: 'Ett etikett–värde-par, t.ex. "Byggstart: 2026"',
    fields: [
        defineField({
            name: "title",
            title: "Etikett",
            type: "string",
            description: 'T.ex. "Byggstart", "Inflyttning", "Antal bostäder"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "value",
            title: "Värde",
            type: "string",
            description: 'T.ex. "2026", "14 parhus och 7 studiohus"',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: "title", subtitle: "value" },
    },
});
