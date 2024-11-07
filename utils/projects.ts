import { Project, Tool, Image, ShortTech } from './interfaces';

export const Tools: {[ key in ShortTech ]?: Tool} = {
    "node": {
        name: "Node.JS",
        description: null,
        icon: null,
        link: "https://nodejs.org/",
    },
    "next": {
        name: "Next.JS",
        description: null,
        icon: null,
        link: "https://nextjs.org/",
    },
    "mongo": {
        name: "MongoDB",
        description: null,
        icon: null,
        link: "https://mongodb.com/",
    },
    "react": {
        name: "React",
        description: null,
        icon: null,
        link: "https://reactjs.org/",
    },
    "uikit": {
        name: "UIKit",
        description: null,
        icon: null,
        link: "https://getuikit.com/",
    },
    "socketio": {
        name: "Socket.IO",
        description: null,
        icon: null,
        link: "https://socket.io/",
    },
    "js": {
        name: "JavaScript",
        description: null,
        icon: null,
        link: "https://www.javascript.com/",
    },
    "tailwind": {
        name: "Tailwind CSS",
        description: null,
        icon: null,
        link: "https://tailwindcss.com/",
    },
    "ts": {
        name: "TypeScript",
        description: null,
        icon: null,
        link: "https://www.typescriptlang.org/",
    },
    "electron": {
        name: "Electron",
        description: null,
        icon: null,
        link: "https://www.electronjs.org/",
    },
    "html": {
        name: "HTML5",
        description: null,
        icon: null,
        link: "https://en.wikipedia.org/wiki/HTML5",
    },
    "css": {
        name: "CSS3",
        description: null,
        icon: null,
        link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    "framer-motion": {
        name: "Framer Motion",
        description: null,
        icon: null,
        link: "https://framer.com/motion"
    },
    "C": {
        name: "C",
        description: null,
        icon: null,
        link: "https://en.wikipedia.org/wiki/C_(programming_language)"
    },
    "CPP": {
        name: "C++",
        description: null,
        icon: null,
        link: "https://isocpp.org/"
    },
}

export const projects:(Project | {size: "half", projects: Project[]})[] = [
    {
        size: "half",
        projects: [
            {
                name: "Wheel Saint: Hellride",
                description: "A roguelike race through purgatory",
                logo: "/images/projects/wheel-saint-hellride/logo.png",
                logoSize: "w-44",
                size: "full",
                type: "game",
                link: "wheel-saint-hellride",
                active: true,
                new_links: [
                    {
                        text: "Steam Page",
                        url: "https://store.steampowered.com/app/2745150/Wheel_Saint_Hellride/",
                        external: true,
                        type: "block"
                    },
                ],
                infoPage: {
                    images: [
                        {
                            "url": "/images/projects/wheel-saint-hellride/logo.png",
                            "alt": "The Wheel Saint: Hellride logo"
                        },
                        {
                            url: "/images/projects/wheel-saint-hellride/splash_art.png",
                            alt: "Steam splash art for Wheel Saint: Hellride"
                        },
                    ],
                    technologies: [
                        {
                            name: "All",
                            short: [
                                "electron", "js", "html", "css"
                            ]
                        }
                    ],
                    description: [
                        "Wheel Saint: Hellride is a rogue-like race through purgatory to rescue lost souls! Drive your car through neverending waves of demons, find lost souls and upgrade your ride!"
                    ],
                }
            },
            {
                name: "Quantum Flux",
                description: "Race against the clock to prevent a nuclear disaster",
                logo: "/images/projects/quantum-flux/logo.png",
                logoSize: "w-44",
                size: "full",
                type: "game",
                link: "quantum-flux",
                active: true,
                new_links: [
                    {
                        text: "Download",
                        url: "/downloads/quantum-flux/Quantum_Flux_Setup.exe",
                        external: false,
                        type: "block"
                    },
                ],
                infoPage: {
                    images: [
                        {
                            url: "/images/projects/quantum-flux/logo.png",
                            alt: "The Quantum Flux logo"
                        },
                        {
                            url: "/images/projects/quantum-flux/Screenshot_01.png",
                            alt: "A screenshot of Quantum Flux"
                        },
                        {
                            url: "/images/projects/quantum-flux/Screenshot_02.png",
                            alt: "A screenshot of Quantum Flux"
                        },
                        {
                            url: "/images/projects/quantum-flux/Screenshot_03.png",
                            alt: "A screenshot of Quantum Flux"
                        },
                        {
                            url: "/images/projects/quantum-flux/Screenshot_04.png",
                            alt: "A screenshot of Quantum Flux"
                        },
                        {
                            url: "/images/projects/quantum-flux/Screenshot_05.png",
                            alt: "A screenshot of Quantum Flux"
                        },
                    ],
                    technologies: [
                        {
                            name: "All",
                            short: [
                                "CPP"
                            ]
                        }
                    ],
                    description: [
                        "It's your first day on the job at a nuclear power plant, as disaster strikes it's up to you to save the world.",
                        "Quantum Flux was a game I made in a team for my GAM150 class at DigiPen, I focused mostly on engine and gameplay systems, but also did some work on actual gameplay elements."
                    ],
                }
            },
            {
                name: "Gabir Motors",
                description: "The world's premiere, pretend motorsports company",
                logo: "https://gabirmotors.com/i/assets/teams/GM/main.png",
                logoSize: "w-72",
                size: "full",
                link: "gabirmotors",
                active: true,
                new_links: [
                    {
                        text: "Visit Site",
                        url: "https://gabirmotors.com",
                        external: true,
                        type: "block"
                    },
                    {
                        text: "View Source",
                        url: "https://github.com/Lilspartan/Gabir-Rebuild",
                        external: true,
                        type: "group"
                    }
                ],
                infoPage: {
                    images: [
                        {
                            url: "/images/projects/beta-gabir/screenshot-1.png",
                            alt: "The Gabir Motors landing page"
                        },
                        {
                            url: "https://gabirmotors.com/i/assets/teams/GM/main.png",
                            alt: "The Gabir Motors logo"
                        }
                    ],
                    technologies: [
                        {
                            name: "Website",
                            short: [
                                "next", "tailwind", "ts", "framer-motion"
                            ],
                        }
                    ],
                    description: [
                        "Gabir Motorsports is the world's premiere, pretend motorsports company. Sponsor of the Penny Arcade Racing League, the Gabir Motors website is home to tools for members of the league (like the calendar) and anybody who plays iRacing (the Spec mapping tool)."
                    ]
                }
            },
        ],
    },
    {
        name: "War Tools",
        description: "An unofficial companion for Warhammer 40k",
        logo: "/images/projects/wartools/logo.png",
        logoSize: "w-1/4",
        size: "full",
        link: "wartools",
        active: true,
        new_links: [
            {
                text: "Visit Site",
                url: "https://wartools.xyz",
                external: true,
                type: "block"
            }
        ],
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
                    short: [
                        "next", "tailwind", "mongo", "ts"
                    ],
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
        logo: "https://gabirmotors.com/i/assets/other/pit_wall.png",
        logoSize: "h-20",
        size: "full",
        link: "pitwall",
        active: false,
        new_links: [
            {
                text: "Visit Site",
                url: "https://pitwall.gabirmotors.com",
                external: true,
                type: "block"
            },
            {
                text: "View Source",
                url: "https://github.com/Lilspartan/GabirLiveStandings",
                external: true,
                type: "group"
            }
        ],
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
                    url: "https://gabirmotors.com/i/assets/other/pit_wall.png",
                    alt: "The Pit Wall logo"
                }
            ],
            technologies: [
                {
                    name: "Website",
                    short: [
                        "next", "tailwind", "ts", "socketio"
                    ],
                },
                {
                    name: "Desktop Client",
                    short: [
                        "electron", "react", "socketio", "ts", "tailwind"
                    ]
                }
            ],
            description: [
                "The Pit Wall started as a way for Twitch chat to watch the stats of a driver in real time, but after people had seen it I had a few requests to open it up to others, so I created the desktop client which made it super simple for anybody to pick up the Pit Wall and start using it."
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
                active: true,
                new_links: [
                    {
                        text: "Visit Site",
                        url: "/",
                        external: false,
                        type: "block"
                    },
                    {
                        text: "View Source",
                        url: "https://github.com/Lilspartan/Portfolio",
                        external: true,
                        type: "group"
                    }
                ],
                infoPage: {
                    images: [
                        
                    ],
                    technologies: [
                        {
                            name: "All",
                            short: [
                                "next", "tailwind", "ts"
                            ]
                        }
                    ],
                    description: null,
                },
            },
            {
                name: "Better StudentVue",
                description: "A project defined by \"Why isn't this already a feature?\"",
                logo: "/logo.png",
                logoSize: "w-1/4",
                size: "full",
                link: "betterstudentvue",
                active: false,
                new_links: [],
                infoPage: {
                    images: [
                        {
                            url: "/images/projects/betterstudentvue/screenshot1.png",
                            alt: "A screenshot of the home page of Better StudentVue"
                        },
                    ],
                    technologies: [
                        {
                            name: "All",
                            short: [
                                "next", "tailwind", "ts"
                            ]
                        }
                    ],
                    description: [
                        "All I wanted to do was see how doing an assignment would affect my grade, but imagine my surprise when my school's gradebook didn't have that feature! The horror... What was I going to do, well I definitely wasn't going to do my finance homework, the best use of my time would be to make my own version of the gradebook that gives me the features I've always wanted.",
                    ]
                }
            },
            {
                name: "Games",
                description: "Recreating games to relearn vanilla JS",
                logo: "/images/projects/games/logo.png",
                logoSize: "w-44",
                size: "full",
                link: "games",
                active: true,
                new_links: [
                    {
                        text: "Visit Site",
                        url: "https://games.gabekrahulik.dev",
                        external: true,
                        type: "block"
                    }
                ],
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
                            short: [
                                "html", "css", "js"
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
    },
]

interface Event {
    startDate: string;
    endDate: string;
    name: string;
    notes: string;
    links: Link[];
}

type Link = {
    text: string;
    url: string;
}

interface CharityEvent extends Event {
    raised: number;
    role: Role;
}

type Role = "Volunteer" | "Organizer";

export const charity: CharityEvent[] = [
    {
        name: "The PA League Gives Back 2023",
        startDate: "2023-03-26",
        endDate: "2023-03-26",
        notes: "The PA League will once again take to Sebring International Raceway to drive for 12 hours while raising money for Child's Play",
        raised: 3384.15,
        role: "Organizer",
        links: [
            {
                text: "Tiltify Campaign",
                url: "https://tiltify.com/+pa-league/pa-league-gives-back-2023"
            },
            {
                text: "iRacing Events Calendar",
                url: "https://www.iracing.com/special-events/#"
            },
            {
                text: "Child's Play",
                url: "https://www.childsplaycharity.org/"
            },
        ]
    },
    {
        name: "Draw4Charity + World Builders",
        startDate: "2023-02-19",
        endDate: "2023-02-19",
        notes: "I helped to organize and run the closing segment of the Draw4Charity winter 2023 charity stream.",
        raised: 10500,
        role: "Volunteer",
        links: [
            {
                text: "Draw4Charity",
                url: "https://draw4charity.org/"
            },
            {
                text: "World Builders",
                url: "https://worldbuilders.org/"
            },
            {
                text: "Tiltify Campaign",
                url: "https://tiltify.com/@draw4charity/draw4charity-february-2023"
            }
        ]
    },
    {
        name: "Draw4Charity + Child's Play",
        startDate: "2022-07-17",
        endDate: "2022-07-17",
        notes: "I helped to organize and run the closing segment of the Draw4Charity summer 2022 charity stream.",
        raised: 16115.06,
        role: "Volunteer",
        links: [
            {
                text: "Draw4Charity",
                url: "https://draw4charity.org/"
            },
            {
                text: "Child's Play",
                url: "https://www.childsplaycharity.org/"
            },
            {
                text: "Tiltify Campaign",
                url: "https://tiltify.com/@draw4charity/draw4charity-july-15th-17th-2022"
            }
        ]
    },
    {
        name: "The PA League Gives Back 2022",
        startDate: "2022-03-25",
        endDate: "2022-03-27",
        notes: "I organized and helped run a set of charity streams to benefit Child's Play's Gamers Give Back event for 2022",
        raised: 4382.48,
        role: "Organizer",
        links: [
            {
                text: "Tiltify Campaign",
                url: "https://tiltify.com/+pa-league/pa-league-gives-back"
            },
            {
                text: "Event (Twitch VOD)",
                url: "https://www.twitch.tv/videos/1437596675"
            }
        ]
    },
    {
        name: "Draw4Charity + Child's Play",
        startDate: "2021-07-17",
        endDate: "2021-07-17",
        notes: "I helped to organize and run the closing segment of the Draw4Charity summer 2022 charity stream.",
        raised: 12500.69,
        role: "Volunteer",
        links: [
            {
                text: "Draw4Charity",
                url: "https://draw4charity.org/"
            },
            {
                text: "Child's Play",
                url: "https://www.childsplaycharity.org/"
            },
            {
                text: "Tiltify Campaign",
                url: "https://tiltify.com/@draw4charity/draw4charity-july-15th-17th-2022"
            }
        ]
    },
    {
        name: "The PA League Gives Back 2021",
        startDate: "2021-03-25",
        endDate: "2021-03-27",
        notes: "I organized and helped run a set of charity streams to benefit Child's Play's Gamers Give Back event for 2021",
        raised: 2510,
        role: "Organizer",
        links: [
            {
                text: "Tiltify Campaign",
                url: "https://tiltify.com/@cwgabriel/12-hours-of-sebring-for-the-kids"
            },
            {
                text: "Event (Twitch VOD)",
                url: "https://www.twitch.tv/videos/965530125"
            }
        ]
    }
]