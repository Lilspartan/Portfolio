export interface Project {
    name: string;
    description: string;
    logo: string;
    logoSize: string;
    size: "full";
    link: string;
    active: boolean;
    type?: "game" | "web";
    links?: {
        site: string | null;
        github: string | null;
        info: string | null;
        download?: string | null;
    },
    new_links?: {
        text: string;
        url: string;
        external: boolean;
        type: "block" | "group";
    }[],
    infoPage: {
        images: Image[];
        technologies: Section[];
        description: string[] | null;
    } | null;
    trailer?: string
}

export interface Image {
    url: string;
    alt: string;
}

interface Section {
    name: string;
    short?: ShortTech[];
}

export type ShortTech = "next" | "react" | "node" | "html" | "js" | "css" | "tailwind" | "ts" | "mongo" | "socketio" | "electron" | "uikit" | "framer-motion" | "C" | "CPP";

export interface Tool {
    name: string;
    description: string | null;
    icon: string | null;
    link: string;
}