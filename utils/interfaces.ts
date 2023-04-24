export interface Project {
    name: string;
    description: string;
    logo: string;
    logoSize: string;
    size: "full";
    link: string;
    links: {
        site: string | null;
        github: string | null;
        info: string | null;
    },
    infoPage: {
        images: Image[];
        technologies: Section[];
        description: string[] | null;
    } | null;
}

export interface Image {
    url: string;
    alt: string;
}

interface Section {
    name: string;
    short?: ShortTech[];
}

export type ShortTech = "next" | "react" | "node" | "html" | "js" | "css" | "tailwind" | "ts" | "mongo" | "socketio" | "electron" | "uikit" | "framer-motion";

export interface Tool {
    name: string;
    description: string | null;
    icon: string | null;
    link: string;
}