import { Button, ButtonContainer, Card, CardHeading } from '../../components';

import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb';

import { projects } from '../../utils/projects';

const animationGap = 0.2;

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
                                    <div className = {`flex flex-col lg:flex-row gap-8 justify-between`}>
                                        <img src = {project.logo} alt={project.name + " logo"} className = {"lg:h-20 h-full my-auto rounded-lg"} />
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
                            <div className = "flex flex-col lg:flex-row">
                                {project.projects.map((p, i) => (
                                    <div className = "w-full lg:w-1/3" data-m = "bounce-down" data-m-delay = {animationGap * (index + i) + animationGap} data-m-duration = {animationGap * 2}>
                                        <Card>
                                            <div className = {`flex flex-col gap-8 justify-between`}>
                                                <img src = {p.logo} alt={p.name + " logo"} className = {"w-40 mx-auto my-auto rounded-lg"} />
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
