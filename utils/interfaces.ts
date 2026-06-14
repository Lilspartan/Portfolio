export interface Project {
    name: string;
    description: string;
    logo: string;
    link: string;
    active: boolean;
    featured: boolean;
    tech: ShortTech[];
    links: ProjectLink[];
    detail: ProjectDetail | null;
}

export interface ProjectLink {
    text: string;
    url: string;
    external: boolean;
}

export interface ProjectDetail {
    paragraphs: string[] | null;
    images: Image[];
    tech: TechSection[];
    trailer?: string;
}

export interface TechSection {
    name: string;
    short?: ShortTech[];
}

export interface Image {
    url: string;
    alt: string;
}

export type ShortTech = "next" | "react" | "node" | "html" | "js" | "css" | "tailwind" | "ts" | "mongo" | "socketio" | "electron" | "uikit" | "framer-motion" | "C" | "CPP";

export interface Tool {
    name: string;
    description: string | null;
    icon: string | null;
    link: string;
}
