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
    tech: Technology[];
}

interface Technology {
    name: string;
    link: string | null;
    description: string | null;
}

export const projects:(Project | {size: "half", projects: Project[]})[] = [
    {
        name: "War Tools",
        description: "An unofficial companion for Warhammer 40k",
        logo: "/images/projects/wartools/logo.png",
        logoSize: "w-1/4",
        size: "full",
        link: "wartools",
        links: {
            site: "https://wartools.xyz",
            github: null,
            info: "/projects/wartools",
        },
        infoPage: {
            images: [
                {
                    url: "/images/projects/wartools/screenshot1.png",
                    alt: "A screenshot of the roster viewer tool on War Tools"
                },
                {
                    url: "/images/projects/wartools/screenshot2.png",
                    alt: "A screenshot of the dataslate tool on War Tools"
                },
                {
                    url: "/images/projects/wartools/screenshot3.png",
                    alt: "A screenshot of the roster list"
                },
                {
                    url: "https://wartools.xyz/images/header.jpg",
                    alt: "The War Tools logo"
                }
            ],
            technologies: [
                {
                    name: "All",
                    tech: [
                        {
                            name: "Next.js",
                            link: "https://nextjs.org",
                            description: null
                        },
                        {
                            name: "Tailwind CSS",
                            link: "https://tailwindcss.com/",
                            description: null,
                        },
                        {
                            name: "Mongo DB",
                            link: "https://mongodb.com/",
                            description: null,
                        },
                        {
                            name: "Typescript",
                            link: "https://www.typescriptlang.org/",
                            description: null,
                        }
                    ]
                }
            ],
            description: [
                "War Tools was born out of a need for a companion app for Warhammer 40k, I realized that all the existing options either didn't have what I wanted or weren't designed to work on phone screens, so I decided to do it myself.",
                "War Tools started as just a way to view army lists but quickly evolved into also supporting custom campaign kill teams and I added an account system to sync everything across multiple devices. It went from a summer project to something I'm actively working on to this day."
            ]
        }
    },
    {
        name: "The Pitwall",
        description: "Give your Twitch chat the tools they need to be your pit crew",
        logo: "https://i.gabirmotors.com/assets/other/pit_wall.png",
        logoSize: "h-20",
        size: "full",
        link: "pitwall",
        links: {
            site: "https://pitwall.gabirmotors.com",
            github: "https://github.com/LilSpartan/GabirLiveStandings",
            info: "/projects/pitwall"
        },
        infoPage: {
            images: [
                {
                    url: "/images/projects/pitwall/screenshot1.png",
                    alt: "A screenshot of the Pit Wall desktop app"
                }, 
                {
                    url: "/images/projects/pitwall/screenshot2.png",
                    alt: "A screenshot of what the Pit Wall looks like during a race"
                },
                {
                    url: "https://i.gabirmotors.com/assets/other/pit_wall.png",
                    alt: "The Pit Wall logo"
                }
            ],
            technologies: [
                {
                    name: "Website",
                    tech: [
                        {
                            name: "Next.js",
                            link: "https://nextjs.org",
                            description: null
                        },
                        {
                            name: "Tailwind CSS",
                            link: "https://tailwindcss.com/",
                            description: null,
                        },
                        {
                            name: "Typescript",
                            link: "https://www.typescriptlang.org/",
                            description: null,
                        },
                        {
                            name: "Socket.IO",
                            link: "https://socket.io/",
                            description: null,
                        },
                    ]
                },
                {
                    name: "Desktop Client",
                    tech: [
                        {
                            name: "Electron",
                            link: "https://www.electronjs.org/",
                            description: null,
                        },
                        {
                            name: "React",
                            link: "https://reactjs.org",
                            description: null,
                        },
                        {
                            name: "node-irsdk-2021",
                            link: "https://www.npmjs.com/package/node-irsdk-2021",
                            description: null,
                        },
                        {
                            name: "Socket.IO",
                            link: "https://socket.io/",
                            description: null,
                        },
                    ]
                }
            ],
            description: [
                "The Pit Wall started as a way for Twitch chat to watch the stats of a driver in real time, but after people had seen it I had a few requests to open it up to others, so I created the desktop client which made it super simple for anybody to pick up the Pit Wall and start using it."
            ]
        }
    },
    {
        name: "Gabir Motors",
        description: "The world's premiere, pretend motorsports company",
        logo: "https://i.gabirmotors.com/assets/teams/GM/main.png",
        logoSize: "w-72",
        size: "full",
        link: "gabirmotors",
        links: {
            site: "https://gabirmotors.com",
            github: "https://github.com/LilSpartan/GabirReactFrontend",
            info: "/projects/gabirmotors"
        },
        infoPage: {
            images: [
                {
                    url: "/images/projects/gabirmotors/screenshot1.png",
                    alt: "The Gabir Motors landing page"
                },
                {
                    url: "/images/projects/gabirmotors/screenshot2.png",
                    alt: "The Gabir Motors Spec Map Previsualization Tool, the most popular tool on the site"
                },
                {
                    url: "/images/projects/gabirmotors/screenshot3.png",
                    alt: "The PA League calendar for Season 13"
                },
                {
                    url: "https://i.gabirmotors.com/assets/teams/GM/main.png",
                    alt: "The Gabir Motors logo"
                }
            ],
            technologies: [
                {
                    name: "All",
                    tech: [
                        {
                            name: "React",
                            link: "https://reactjs.org",
                            description: null
                        },
                        {
                            name: "UIkit",
                            link: "https://getuikit.com/",
                            description: null,
                        },
                        {
                            name: "Mongo DB",
                            link: "https://mongodb.com/",
                            description: null,
                        },
                        {
                            name: "Typescript",
                            link: "https://www.typescriptlang.org/",
                            description: null,
                        }
                    ]
                }
            ],
            description: [
                "Gabir Motorsports is the world's premiere, pretend motorsports company. Sponsor of the Penny Arcade Racing League, the Gabir Motors website is home to tools for members of the league (like the calendar) and anybody who plays iRacing (the Spec mapping tool)."
            ]
        }
    },
    {
        size: "half",
        projects: [
            {
                name: "My Portfolio",
                description: "Where you're at right now",
                logo: "/logo.png",
                logoSize: "w-44",
                size: "full",
                link: "portfolio",
                links: {
                    site: "https://gabekrahulik.dev",
                    github: "https://github.com/Lilspartan/Portfolio",
                    info: null
                },
                infoPage: null,
            },
            {
                name: "Rogue Bananas",
                description: "A crew of pirates and host of events",
                logo: "https://roguebananas.net/images/logo_big.png",
                logoSize: "w-48",
                size: "full",
                link: "roguebananas",
                links: {
                    site: "https://roguebananas.net",
                    github: "https://github.com/Lilspartan/rogue-bananas",
                    info: "/projects/roguebananas"
                },
                infoPage: {
                    images: [
                        {
                            url: "/images/projects/roguebananas/screenshot1.png",
                            alt: "The Rogue Bananas landing page"
                        },
                        {
                            url: "/images/projects/roguebananas/screenshot2.png",
                            alt: "The Rogue Bananas events schedule"
                        },
                    ],
                    technologies: [
                        {
                            name: "All",
                            tech: [
                                {
                                    name: "Next.js",
                                    link: "https://nextjs.org",
                                    description: null
                                },
                                {
                                    name: "Tailwind CSS",
                                    link: "https://tailwindcss.com/",
                                    description: null,
                                },
                                {
                                    name: "Typescript",
                                    link: "https://www.typescriptlang.org/",
                                    description: null,
                                },
                            ]
                        }
                    ],
                    description: null,
                },
            },
            {
                name: "Games",
                description: "recreating games to relearn vanilla JS",
                logo: "/images/projects/games/logo.png",
                logoSize: "w-44",
                size: "full",
                link: "games",
                links: {
                    site: "https://games.gabekrahulik.dev",
                    github: null,
                    info: "/projects/games"
                },
                infoPage: {
                    images: [
                        {
                            url: "/images/projects/games/screenshot1.png",
                            alt: "Tetris"
                        },
                        {
                            url: "/images/projects/games/logo.png",
                            alt: "Games logo"
                        }
                    ],
                    technologies: [
                        {
                            name: "All",
                            tech: [
                                {
                                    name: "HTML",
                                    link: "https://en.wikipedia.org/wiki/HTML5",
                                    description: null
                                },
                                {
                                    name: "CSS",
                                    link: "https://www.w3.org/Style/CSS/Overview.en.html",
                                    description: null,
                                },
                                {
                                    name: "JS",
                                    link: "https://www.javascript.com/",
                                    description: null,
                                },
                            ]
                        }
                    ],
                    description: [
                        "This is the project I've had the most fun with so far, it started as a school project where I had to build Minesweeper, and then I kept making other games.",
                        "Most of the games are buggy or unfinished, but that's because this is less of an attempt at an accurate recreation and more just to make sure my vanilla JS skills are still intact after using so many frameworks"
                    ],
                },
            }
        ]
    }
]