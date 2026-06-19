import { defineField, defineType } from "sanity";

export const processStepType = defineType({
    name: "processStep",
    title: "Processteg",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Stegnamn",
            type: "string",
            description: 'T.ex. "Intresseanmälan" eller "Tillträde & inflyttning" – numret sätts automatiskt av sidan',
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
        select: { title: "title" },
        prepare: ({ title }) => ({ title, subtitle: "Processteg" }),
    },
});
