import { defineField, defineType } from "sanity";

export const processStepType = defineType({
    name: "processStep",
    title: "Processteg",
    type: "object",
    fields: [
        defineField({
            name: "number",
            title: "Stegnummer",
            type: "number",
            description: "Stegen visas i nummerordning på sidan (1, 2, 3…)",
            validation: (Rule) => Rule.required().min(1).integer(),
        }),
        defineField({
            name: "title",
            title: "Stegnamn",
            type: "string",
            description: 'T.ex. "Intresseanmälan" eller "Tillträde & inflyttning"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "text",
            title: "Beskrivning",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: "title", subtitle: "number" },
        prepare: ({ title, subtitle }) => ({ title, subtitle: `Steg ${subtitle}` }),
    },
});
