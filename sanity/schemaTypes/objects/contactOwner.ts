import { defineField, defineType } from "sanity";

export const contactOwnerType = defineType({
    name: "contactOwner",
    title: "Kontaktperson",
    type: "object",
    fields: [
        defineField({
            name: "fullName",
            title: "Namn",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "E-postadress",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "photo",
            title: "Foto",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: "fullName", subtitle: "email", media: "photo" },
    },
});
