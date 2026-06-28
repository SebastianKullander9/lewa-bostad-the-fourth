import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import * as schemas from "@/sanity/schemaTypes";

const singletonTypes = new Set([
    "homePage",
    "aboutPage",
    "contactPage",
    "buyingGuidePage",
    "privacyPolicyPage",
]);

export default defineConfig({
    name: "lewa-bostad",
    title: "Lewa Bostad",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    basePath: "/studio",
    plugins: [
        structureTool({
            structure: (S, context) =>
                S.list()
                    .title("Innehåll")
                    .items([
                        orderableDocumentListDeskItem({ type: "project", title: "Projekt", S, context }),
                        S.listItem()
                            .title("Nyheter")
                            .schemaType("newsArticle")
                            .child(
                                S.documentTypeList("newsArticle")
                                    .title("Nyheter")
                                    .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
                            ),
                        S.divider(),
                        S.listItem()
                            .title("Startsida")
                            .child(
                                S.document()
                                    .schemaType("homePage")
                                    .documentId("homePage")
                                    .title("Startsida"),
                            ),
                        S.listItem()
                            .title("Om oss")
                            .child(
                                S.document()
                                    .schemaType("aboutPage")
                                    .documentId("aboutPage")
                                    .title("Om oss"),
                            ),
                        S.listItem()
                            .title("Att köpa bostad")
                            .child(
                                S.document()
                                    .schemaType("buyingGuidePage")
                                    .documentId("buyingGuidePage")
                                    .title("Att köpa bostad"),
                            ),
                        S.listItem()
                            .title("Kontakt")
                            .child(
                                S.document()
                                    .schemaType("contactPage")
                                    .documentId("contactPage")
                                    .title("Kontakt"),
                            ),
                        S.listItem()
                            .title("Integritetspolicy")
                            .child(
                                S.document()
                                    .schemaType("privacyPolicyPage")
                                    .documentId("privacyPolicyPage")
                                    .title("Integritetspolicy"),
                            ),
                    ]),
        }),
        visionTool(),
    ],
    schema: {
        types: Object.values(schemas),
        // Prevent users from creating extra copies of singleton pages
        templates: (templates) =>
            templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
    },
});
