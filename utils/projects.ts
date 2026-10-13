import { Project, Tool, ShortTech } from './interfaces';

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
    "react-native": {
        name: "React Native",
        description: null,
        icon: null,
        link: "https://reactnative.dev/",
    },
    "expo": {
        name: "Expo",
        description: null,
        icon: null,
        link: "https://expo.dev/",
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

export const projects: Project[] = [
    {
        name: "Quantum Flux",
        description: "Race against the clock to prevent a nuclear disaster",
        logo: "/images/projects/quantum-flux/logo.png",
        link: "quantum-flux",
        active: true,
        featured: false,
        tech: ["CPP"],
        links: [],
        resumeRole: "Developer",
        resumeDates: "Jan 2024 - Apr 2024",
        resumeBullets: [
            "Assisted game development by working on core game systems in C++.",
            "Created systems for user interfaces and player interaction.",
        ],
        detail: {
            trailer: "https://www.youtube.com/embed/-70nSf9X30Q",
            images: [
                { url: "/images/projects/quantum-flux/logo.png", alt: "The Quantum Flux logo" },
                { url: "/images/projects/quantum-flux/Screenshot_01.png", alt: "A screenshot of Quantum Flux" },
                { url: "/images/projects/quantum-flux/Screenshot_02.png", alt: "A screenshot of Quantum Flux" },
                { url: "/images/projects/quantum-flux/Screenshot_03.png", alt: "A screenshot of Quantum Flux" },
                { url: "/images/projects/quantum-flux/Screenshot_04.png", alt: "A screenshot of Quantum Flux" },
                { url: "/images/projects/quantum-flux/Screenshot_05.png", alt: "A screenshot of Quantum Flux" },
            ],
            tech: [{ name: "All", short: ["CPP"] }],
            paragraphs: [
                "It's your first day on the job at a nuclear power plant, as disaster strikes it's up to you to save the world.",
                "Quantum Flux was a game I made in a team for my GAM150 class at DigiPen, I focused mostly on engine and gameplay systems, but also did some work on actual gameplay elements."
            ],
        },
    },
    {
        name: "Forge Fiasco",
        description: "A co-op party game centered around managing a blacksmith",
        logo: "/images/projects/forge-fiasco/logo.png",
        link: "forge-fiasco",
        active: true,
        featured: false,
        tech: ["CPP"],
        links: [],
        resumeRole: "Developer & Buildmaster",
        resumeDates: "Sep 2024 - Apr 2025",
        resumeBullets: [
            "Created the initial core engine prototype used as the foundation for the full game.",
            "Worked on user-facing systems including game UI, tutorials, and in-engine editor tools.",
            "Focused on backend systems like serialization, messaging, and analytics with an emphasis on developer experience.",
        ],
        detail: {
            trailer: "https://www.youtube.com/embed/DMdii-rpamE",
            images: [
                { url: "/images/projects/forge-fiasco/logo.png", alt: "The Forge Fiasco logo" },
                { url: "/images/projects/forge-fiasco/screenshot_1.jpg", alt: "A screenshot of Forge Fiasco gameplay" },
                { url: "/images/projects/forge-fiasco/screenshot_2.jpg", alt: "A screenshot of the lobby menu of Forge Fiasco" },
                { url: "/images/projects/forge-fiasco/screenshot_3.jpg", alt: "A screenshot of Forge Fiasco gameplay" },
                { url: "/images/projects/forge-fiasco/Recursion Games Alt Dark.png", alt: "The Recursion Games team logo" },
            ],
            tech: [{ name: "All", short: ["CPP"] }],
            paragraphs: [
                "Forge Fiasco is a co-op party game centered around being a blacksmith and managing your own forge. The overall objective of the game is to survive the onslaught of customers while keeping your reputation high, since if your reputation falls below the threshold your forge will be closed. You can tackle the challenge alone or have 3 other friends join you on your journey as you battle against time and customer satisfaction. The main idea for this game is to be a fun and chaotic party game where casual and competitive gamers can unite to try and be the top forge managers.",
                "Forge Fiasco was a game I worked on in a team of 5 for my GAM200/250 classes at DigiPen. Over the two semesters, we had to create a custom engine through to an MVP, then use that engine to create our game."
            ],
        },
    },
    {
        name: "Sandstone (Docs Website)",
        description: "Landing page redesign for the Sandstone Minecraft datapack library",
        logo: "/images/projects/sandstone/logo.png",
        link: "sandstone",
        active: true,
        featured: true,
        tech: ["html", "react", "css", "js"],
        links: [
            { text: "Visit the Docs", url: "https://sandstone.dev", external: true },
            { text: "View Source", url: "https://github.com/sandstone-mc/sandstone-documentation", external: true },
        ],
        detail: {
            images: [
                { url: "/images/projects/sandstone/screenshot_after.png", alt: "The redesigned Sandstone landing page" },
                { url: "/images/projects/sandstone/screenshot_after_full.png", alt: "The full redesigned Sandstone landing page" }
            ],
            tech: [{ name: "All", short: ["html", "react", "css", "js"] }],
            paragraphs: [
                "Sandstone is a TypeScript library that assists Minecraft datapack development. Instead of writing raw .mcfunction files and JSON resources by hand, you write TypeScript and get full IDE autocompletion for every command, predicate, loot table, and advancement in the game. Built-in abstractions like if/else, loops, and boolean logic compile down to optimized vanilla commands, and the NPM ecosystem means common patterns like raycasting can be published and shared across projects.",
                "I redesigned the Sandstone documentation website, the public face of the project at sandstone.dev. The existing site was functional but not much visually. The goal was to give it a landing page that matched the ambition of the library itself. I rebuilt the hero section and overall page structure using React and custom CSS within the Docusaurus framework, focusing on clear hierarchy, better feature presentation, and a visual identity that matched the Minecraft ecosystem while still feeling unique.",
            ]
        }
    },
    {
        name: "SummitGuessr",
        description: "A GeoGuessr-style game built from panoramas of the Smithed Summit Minecraft server",
        logo: "/images/projects/summitguessr/logo.png",
        link: "summitguessr",
        active: true,
        featured: true,
        tech: ["next", "tailwind", "ts"],
        links: [
            { text: "Visit Site", url: "https://summitguessr.lilspartan.link", external: true },
        ],
        detail: {
            images: [
                { url: "/images/projects/summitguessr/screenshot-setup.png", alt: "The SummitGuessr game setup screen, with region, round, and timer options" },
                { url: "/images/projects/summitguessr/screenshot-playing.png", alt: "A panorama shown during a round of SummitGuessr, with the round timer, score, and guess map visible" },
            ],
            tech: [{ name: "All", short: ["next", "tailwind", "ts"] }],
            paragraphs: [
                "Smithed Summit is an in-game Minecraft convention for datapackers, mapmakers, and other creators to show off what they'd made, all hosted on a hand-built island for two weeks.",
                "SummitGuessr is a GeoGuessr-style game built using panoramas taken around the Summit server, challenging players to guess where on the island each panorama was taken.",
            ],
        },
    },
    {
        name: "Gabir Motors",
        description: "The world's premiere, pretend motorsports company",
        logo: "https://gabirmotors.com/i/assets/teams/GM/main.png",
        link: "gabirmotors",
        active: true,
        featured: false,
        tech: ["next", "tailwind", "ts", "framer-motion"],
        resumeRole: "Lead Developer",
        resumeDates: "2021 - Present",
        resumeBullets: [
            "Built and maintained the official site for a simracing community with hundreds of active members.",
            "Developed community tools including a race calendar, spec mapping utility, and driver stats pages.",
            "Architected the full-stack site using Next.js, TypeScript, and Tailwind CSS.",
        ],
        links: [
            { text: "Visit Site", url: "https://gabirmotors.com", external: true },
            { text: "View Source", url: "https://github.com/Lilspartan/Gabir-Rebuild", external: true },
        ],
        detail: {
            images: [
                { url: "/images/projects/beta-gabir/screenshot-1.png", alt: "The Gabir Motors landing page" },
                { url: "https://gabirmotors.com/i/assets/teams/GM/main.png", alt: "The Gabir Motors logo" },
            ],
            tech: [{ name: "Website", short: ["next", "tailwind", "ts", "framer-motion"] }],
            paragraphs: [
                "Gabir Motorsports is the world's premiere, pretend motorsports company. Sponsor of the Penny Arcade Racing League, the Gabir Motors website is home to tools for members of the league (like the calendar) and anybody who plays iRacing (the Spec mapping tool)."
            ],
        },
    },
    {
        name: "Kregs Toolbox",
        description: "A beginner friendly game creation tool built in a custom C++ engine",
        logo: "/images/projects/kregs-toolbox/logo.png",
        link: "kregs-toolbox",
        active: true,
        featured: true,
        tech: ["CPP"],
        links: [],
        resumeRole: "UI/UX Developer",
        resumeDates: "Sep 2025 - Apr 2026",
        resumeBullets: [
            "Designed and built a drag-and-drop visual scripting editor using the Clay UI library in a custom C++ engine.",
            "Implemented a Scratch-like block system with JSON-defined blocks, nested input slots, and auto-compilation to a custom scripting language (Prose).",
            "Designed and implemented a larger UI system for the project",
        ],
        detail: {
            trailer: "https://www.youtube.com/embed/5XQm3lwc3t8",
            images: [
                { url: "/images/writings/prose-scripting/example.png", alt: "Block scripting editor" },
            ],
            tech: [{ name: "All", short: ["CPP"] }],
            paragraphs: [
                "Kregs Toolbox is a beginner-friendly game creation tool built for my GAM300/350 classes at DigiPen. A team of 8 CS majors built a custom C++ engine from scratch with a Vulkan renderer, a custom audio system, and Jolt physics, then used it to ship a game inspired by tools like Kodu Game Lab, Project Spark, and Dreams.",
                "As the UI/UX programmer, in addition to all the game menus and interactions, I designed and built the visual scripting editor: a drag-and-drop block system backed by a custom scripting language called Prose. Blocks are defined in JSON, nested into sentences with WHEN/THEN logic, and auto-compiled to Prose scripts that the engine runs at runtime. The goal was to make game logic approachable for complete beginners without hiding what's actually happening under the hood.",
            ],
        },
    },
    {
        name: "War Tools",
        description: "An unofficial companion for Warhammer 40k",
        logo: "/images/projects/wartools/logo.png",
        link: "wartools",
        active: false,
        featured: false,
        tech: ["next", "tailwind", "mongo", "ts"],
        resumeRole: "Sole Developer",
        resumeDates: "Aug 2022 - May 2023",
        resumeBullets: [
            "Built a mobile-friendly army list and campaign tracker for Warhammer 40K.",
            "Orchestrated multiple subsystems including authentication, MongoDB data management, and cross-device sync.",
        ],
        links: [
            // { text: "Visit Site", url: "https://wartools.xyz", external: true },
        ],
        detail: {
            images: [
                { url: "/images/projects/wartools/logo.png", alt: "The War Tools logo" },
                { url: "/images/projects/wartools/screenshot1.png", alt: "A screenshot of the roster viewer tool on War Tools" },
                { url: "/images/projects/wartools/screenshot2.png", alt: "A screenshot of the dataslate tool on War Tools" },
                { url: "/images/projects/wartools/screenshot3.png", alt: "A screenshot of the roster list" },
            ],
            tech: [{ name: "All", short: ["next", "tailwind", "mongo", "ts"] }],
            paragraphs: [
                "War Tools was born out of a need for a companion app for Warhammer 40k, I realized that all the existing options either didn't have what I wanted or weren't designed to work on phone screens, so I decided to do it myself.",
                "War Tools started as just a way to view army lists but quickly evolved into also supporting custom campaign kill teams and I added an account system to sync everything across multiple devices. It went from a summer project to something I'm actively working on to this day."
            ],
        },
    },
    {
        name: "My Portfolio",
        description: "Where you're at right now",
        logo: "/logo.png",
        link: "portfolio",
        active: true,
        featured: false,
        tech: ["next", "tailwind", "ts"],
        links: [
            { text: "Visit Site", url: "/", external: false },
            { text: "View Source", url: "https://github.com/Lilspartan/Portfolio", external: true },
        ],
        detail: {
            images: [],
            tech: [{ name: "All", short: ["next", "tailwind", "ts"] }],
            paragraphs: null,
        },
    },
    {
        name: "Wheel Saint: Hellride",
        description: "A roguelike race through purgatory",
        logo: "/images/projects/wheel-saint-hellride/logo.png",
        link: "wheel-saint-hellride",
        active: true,
        unfinished: true,
        featured: false,
        tech: ["electron", "js", "html", "css"],
        resumeRole: "Developer",
        resumeDates: "2023",
        links: [
            { text: "Steam Page", url: "https://store.steampowered.com/app/2745150/Wheel_Saint_Hellride/", external: true },
        ],
        detail: {
            images: [
                { url: "/images/projects/wheel-saint-hellride/splash_art.png", alt: "Steam splash art for Wheel Saint: Hellride" },
                { url: "/images/projects/wheel-saint-hellride/logo.png", alt: "The Wheel Saint: Hellride logo" },
            ],
            tech: [{ name: "All", short: ["electron", "js", "html", "css"] }],
            paragraphs: [
                "Wheel Saint: Hellride is a rogue-like race through purgatory to rescue lost souls! Drive your car through neverending waves of demons, find lost souls and upgrade your ride!"
            ],
        },
    },
    {
        name: "Eyrewood Adventures",
        description: "A story-driven step tracking RPG for Android",
        logo: "/images/projects/eyrewood-adventures/logo.png",
        link: "eyrewood-adventures",
        active: true,
        unfinished: true,
        featured: false,
        tech: ["react-native", "expo", "ts"],
        links: [],
        detail: {
            images: [
                { url: "/images/projects/eyrewood-adventures/forest_art.webp", alt: "Concept art of the Eyrewood forest" },
            ],
            tech: [{ name: "All", short: ["react-native", "expo", "ts"] }],
            paragraphs: [
                "Eyrewood Adventures is a step-tracking RPG for Android that turns real-world walking into in-game progress. As you rack up steps, you explore zones with parallax-scrolling art, stumble into random Points of Interest, and collect clues that unlock creature Hunts you complete by walking a target step count.",
                "I'm building it solo in React Native with Expo, using a background pedometer service to track steps even when the app isn't in the foreground. Zone, hunt, and POI content ships as versioned data bundles pulled from Supabase and cached on-device, and player progress persists locally so the game keeps working offline. It's still unfinished: the core walking and hunt loop works, but a lot of the surrounding game is still a placeholder.",
            ],
        },
    },
    {
        name: "The Pitwall",
        description: "Give your Twitch chat the tools they need to be your pit crew",
        logo: "https://gabirmotors.com/i/assets/other/pit_wall.png",
        link: "pitwall",
        active: false,
        featured: false,
        tech: ["next", "tailwind", "ts", "socketio", "electron", "react"],
        resumeRole: "Lead Developer",
        resumeDates: "Jun 2022 - Jul 2023",
        resumeBullets: [
            "Created a real-time telemetry dashboard for sim-racing streamers and their Twitch chat.",
            "Managed high-traffic, real-time data using WebSockets and Socket.IO.",
            "Built a companion Electron desktop app for easy broadcaster setup and data capture.",
        ],
        links: [
            { text: "Visit Site", url: "https://pitwall.gabirmotors.com", external: true },
            { text: "View Source", url: "https://github.com/Lilspartan/GabirLiveStandings", external: true },
        ],
        detail: {
            images: [
                { url: "/images/projects/pitwall/screenshot2.png", alt: "A screenshot of what the Pit Wall looks like during a race" },
                { url: "/images/projects/pitwall/screenshot1.png", alt: "A screenshot of the Pit Wall desktop app" },
                { url: "https://gabirmotors.com/i/assets/other/pit_wall.png", alt: "The Pit Wall logo" },
            ],
            tech: [
                { name: "Website", short: ["next", "tailwind", "ts", "socketio"] },
                { name: "Desktop Client", short: ["electron", "react", "socketio", "ts", "tailwind"] },
            ],
            paragraphs: [
                "The Pit Wall started as a way for Twitch chat to watch the stats of a driver in real time, but after people had seen it I had a few requests to open it up to others, so I created the desktop client which made it super simple for anybody to pick up the Pit Wall and start using it."
            ],
        },
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
            { text: "Tiltify Campaign", url: "https://tiltify.com/+pa-league/pa-league-gives-back-2023" },
            { text: "iRacing Events Calendar", url: "https://www.iracing.com/special-events/#" },
            { text: "Child's Play", url: "https://www.childsplaycharity.org/" },
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
            { text: "Draw4Charity", url: "https://draw4charity.org/" },
            { text: "World Builders", url: "https://worldbuilders.org/" },
            { text: "Tiltify Campaign", url: "https://tiltify.com/@draw4charity/draw4charity-february-2023" },
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
            { text: "Draw4Charity", url: "https://draw4charity.org/" },
            { text: "Child's Play", url: "https://www.childsplaycharity.org/" },
            { text: "Tiltify Campaign", url: "https://tiltify.com/@draw4charity/draw4charity-july-15th-17th-2022" },
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
            { text: "Tiltify Campaign", url: "https://tiltify.com/+pa-league/pa-league-gives-back" },
            { text: "Event (Twitch VOD)", url: "https://www.twitch.tv/videos/1437596675" },
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
            { text: "Draw4Charity", url: "https://draw4charity.org/" },
            { text: "Child's Play", url: "https://www.childsplaycharity.org/" },
            { text: "Tiltify Campaign", url: "https://tiltify.com/@draw4charity/draw4charity-july-15th-17th-2022" },
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
            { text: "Tiltify Campaign", url: "https://tiltify.com/@cwgabriel/12-hours-of-sebring-for-the-kids" },
            { text: "Event (Twitch VOD)", url: "https://www.twitch.tv/videos/965530125" },
        ]
    }
]
