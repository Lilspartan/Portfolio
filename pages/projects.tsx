import { Button, ButtonContainer, Card, CardHeading } from '../components';

import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb';

const animationGap = 0.4;
const projects = [
    {
        name: "War Tools",
        description: "An unofficial companion for Warhammer 40k",
        logo: "https://wartools.xyz/images/header.jpg",
        logoSize: "w-1/4",
        size: "full",
        links: {
            site: "https://wartools.xyz",
            github: null,
            info: "/projects/wartools",
        }
    },
    {
        name: "The Pitwall",
        description: "Git your Twitch chat the tools they need to be your pit crew",
        logo: "https://i.gabirmotors.com/assets/other/pit_wall.png",
        logoSize: "h-20",
        size: "full",
        links: {
            site: "https://pitwall.gabirmotors.com",
            github: "https://github.com/LilSpartan/GabirLiveStandings",
            info: "/projects/pitwall"
        }
    },
    {
        name: "Gabir Motors",
        description: "The world's premiere, pretend motorsports company",
        logo: "https://i.gabirmotors.com/assets/teams/GM/main.png",
        logoSize: "w-72",
        size: "full",
        links: {
            site: "https://gabirmotors.com",
            github: "https://github.com/LilSpartan/GabirReactFrontend",
            info: "/projects/gabirmotors"
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
                size: "half",
                links: {
                    site: "https://gabekrahulik.dev",
                    github: "https://github.com/Lilspartan/Portfolio",
                    info: "/projects/portfolio"
                }
            },
            {
                name: "Rogue Bananas",
                description: "A crew of pirates and host of events",
                logo: "https://roguebananas.net/images/logo_big.png",
                logoSize: "w-48",
                size: "half",
                links: {
                    site: "https://roguebananas.net",
                    github: "https://github.com/Lilspartan/rogue-bananas",
                    info: "/projects/roguebananas"
                }
            },
            {
                name: "Games",
                description: "recreating games to relearn vanilla JS",
                logo: "/logo.png",
                logoSize: "w-44",
                size: "half",
                links: {
                    site: "https://games.gabekrahulik.dev",
                    github: null,
                    info: "/projects/games"
                }
            }
        ]
    }
]

const Landing = () => {
	return (
		<div className="
			bg-background
			h-full text-center
		">
			<div className = "flex flex-col text-white">
                {projects.map((project, index) => {
                    if (project.size === "full") {
                        return (
                            <div data-m = "bounce-down" data-m-delay = {animationGap * index} data-m-duration = {animationGap * 2}>
                                <Card>
                                    <div className = {`flex flex-row gap-8 justify-between`}>
                                        <img src = {project.logo} alt={project.name + " logo"} className = {project.logoSize + " my-auto rounded-lg"} />
                                        <div className = "flex flex-col justify-center">
                                            <h1 className = "text-5xl font-extrabold">{ project.name }</h1>
                                            <span className = "text-xl my-8">{ project.description }</span>
                                        </div>
                                        <div className = "flex flex-col justify-center">
                                            { project.links.site !== null && <Button type = "block" target = "blank" link = {project.links.site}>Visit Site</Button> }
                                            { project.links.github !== null && <Button target = "blank" link = {project.links.github}>View on Github</Button> }
                                            { project.links.info !== null && <Button link = {project.links.info}>More Info</Button> }
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )
                    } else {
                        return (
                            <div className = "flex flex-row">
                                {project.projects.map((p, i) => (
                                    <div className = "w-1/3" data-m = "bounce-down" data-m-delay = {animationGap * (index + i) + animationGap} data-m-duration = {animationGap * 2}>
                                        <Card>
                                            <div className = {`flex flex-col gap-8 justify-between`}>
                                                <img src = {p.logo} alt={p.name + " logo"} className = {p.logoSize + " mx-auto my-auto rounded-lg"} />
                                                <div className = "flex flex-col justify-center">
                                                    <h1 className = "text-4xl font-extrabold">{ p.name }</h1>
                                                    <span className = "text-lg my-8">{ p.description }</span>
                                                </div>
                                                <div className = "flex flex-col justify-center">
                                                    <div className="flex flex-row justify-center gap-2">
                                                        { p.links.site !== null && <Button type = "block" target = "blank" link = {p.links.site}>Visit Site</Button> }
                                                        { p.links.info !== null && <Button link = {p.links.info}>More Info</Button> }
                                                    </div>
                                                    <div className="block">
                                                        { p.links.github !== null && <Button target = "blank" link = {p.links.github}>View on Github</Button> }
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                })}
            </div>
		</div>
	)
}

export default Landing
