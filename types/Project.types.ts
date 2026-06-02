import { StaticImageData } from "next/image";

export interface ProjectImage {
    src: StaticImageData;
    alt: string;
}

export interface ProjectSection {
    title: string;
    text: string;
    image: ProjectImage;
    imageOrientation: "left" | "right";
}

export interface ProjectObjectInfo {
    title: string;
    value: string;
}

export interface Project {
    slug: string;
    title: string;
    location: string;
    status: string;
    sections: ProjectSection[];
    objectInfo: ProjectObjectInfo[];
    images: {
        thumbnail: ProjectImage;
        gallery: ProjectImage[];
    };
}
