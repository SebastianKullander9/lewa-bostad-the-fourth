import { defineArrayMember, defineField, defineType } from "sanity";

export const privacyPolicyPageType = defineType({
    name: "privacyPolicyPage",
    title: "Integritetspolicy",
    type: "document",
    preview: {
        select: { title: "pageTitle" },
        prepare: ({ title }) => ({ title: title ?? "Integritetspolicy" }),
    },
    fields: [
        defineField({
            name: "pageTitle",
            type: "string",
            hidden: true,
            readOnly: true,
            initialValue: "Integritetspolicy",
        }),
        defineField({
            name: "title",
            title: "Sidtitel",
            type: "string",
            description: 'T.ex. "Integritetspolicy"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "sections",
            title: "Avsnitt",
            type: "array",
            description: "Varje avsnitt har en rubrik och tillhörande innehåll",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "policySection",
                    title: "Avsnitt",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Avsnittsrubrik",
                            type: "string",
                            description: 'T.ex. "Inledning" – numret sätts automatiskt av sidan',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "content",
                            title: "Innehåll",
                            type: "array",
                            description: "Använd textverktyget för att skriva stycken och listor",
                            of: [
                                defineArrayMember({
                                    type: "block",
                                    styles: [{ title: "Normal", value: "normal" }],
                                    lists: [{ title: "Punktlista", value: "bullet" }],
                                    marks: {
                                        decorators: [
                                            { title: "Fetstil", value: "strong" },
                                        ],
                                        annotations: [],
                                    },
                                }),
                            ],
                            validation: (Rule) => Rule.required().min(1),
                        }),
                    ],
                    preview: {
                        select: { title: "title" },
                    },
                }),
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
});
