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

export interface SubSection {
    title: string;
    text: string;
    bulletPoints?: string[];
}

export interface IntroSection {
    _type: "intro";
    title: string;
    text: string;
    statusStep: number;
    objectInfo: ProjectObjectInfo[];
}

export interface SectionText {
    _type: "sectionText";
    title: string;
    text: string;
}

export interface SectionSplit {
    _type: "sectionSplit";
    title: string;
    text: string;
    image: ProjectImage;
    imageOrientation: "left" | "right";
}

export interface SectionSplitDouble {
    _type: "sectionSplitDouble";
    title: string;
    text: string;
    image1: ProjectImage;
    image2: ProjectImage;
}

export interface SectionBullets {
    _type: "sectionBullets";
    title: string;
    text: string;
    bulletPoints: string[];
}

export interface SectionSubsections {
    _type: "sectionSubsections";
    title: string;
    subSections: SubSection[];
}

export interface SectionMapBlock {
    _type: "sectionMap";
    title?: string;
}

export type FeaturedSection =
    | IntroSection
    | SectionText
    | SectionSplit
    | SectionSplitDouble
    | SectionBullets
    | SectionSubsections
    | SectionMapBlock;

export interface ProjectObjectInfo {
    title: string;
    value: string;
}

interface BaseProject {
    slug: string;
    title: string;
    location: string;
    address?: string;
    lat?: number;
    lng?: number;
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
    sections: FeaturedSection[];
}

export type Project = StandardProject | FeaturedProject;
