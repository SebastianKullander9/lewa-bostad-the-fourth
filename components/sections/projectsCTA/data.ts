import { Project } from "@/types/Project.types";
import glansbaggen from "@/public/projectsCTA/glansbaggen.webp";
import kummelnashojden from "@/public/projectsCTA/kummelnashojden.webp";

export const projectCTAData: Project[] = [
    {
        slug: "glansbaggen",
        title: "Glansbaggen",
        location: "Tumba",
        status: {
            value: "ongoing",
            label: "Pågående",
        },
        sections: [],
        objectInfo: [],
        images: {
            thumbnail: { src: glansbaggen, alt: "Bild ifrån projektet Glansbaggen" },
            gallery: [],
        },
    },
    {
        slug: "kummelnashojden",
        title: "Kummelnäshöjden",
        location: "Nacka",
        status: {
            value: "completed",
            label: "Genomförd",
        },
        sections: [],
        objectInfo: [],
        images: {
            thumbnail: { src: kummelnashojden, alt: "Bild ifrån projektet Kummelnäshöjden" },
            gallery: [],
        },
    },
];
