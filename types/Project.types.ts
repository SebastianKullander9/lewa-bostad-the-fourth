import { StaticImageData } from "next/image";

export interface ProjectImage {
    src: StaticImageData;
    alt: string;
}

export interface StandardProjectSection {
    title: string;
    text: string;
    image: ProjectImage;
    imageOrientation: "left" | "right";
}

export interface FeaturedAboutSubSection {
    title: string;
    text: string;
    bulletpoints: string[];
}

export interface FeaturedProjectSections {
    intro: {
        title: string;
        text: string;
        statusStep: number;
        objectInfo: ProjectObjectInfo[];
    };
    area: {
        title: string;
        texts: string[];
        image: ProjectImage;
    };
    about: {
        title: string;
        text: string;
        bulletpoints: string[];
        image1: ProjectImage;
        image2: ProjectImage;
        subSections: FeaturedAboutSubSection[];
    };
    architecture: {
        title: string;
        text: string;
    };
}

export interface ProjectObjectInfo {
    title: string;
    value: string;
}

interface BaseProject {
    slug: string;
    title: string;
    location: string;
    status: {
        value: "planned" | "ongoing" | "completed";
        label: string;
    };
    objectInfo: ProjectObjectInfo[];
    images: {
        thumbnail: ProjectImage;
        gallery: ProjectImage[];
    };
}

export interface StandardProject extends BaseProject {
    underpageType?: "standard";
    sections: StandardProjectSection[];
}

export interface FeaturedProject extends BaseProject {
    underpageType: "featured";
    sections: FeaturedProjectSections;
}

export type Project = StandardProject | FeaturedProject;
