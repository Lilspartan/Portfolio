import { Button, ButtonContainer, Card } from '../../components';

import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiTailwindcss, SiGmail } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb';

import { useRouter } from 'next/router';
import { projects, Project, Image } from '../../utils/projects';
import { useState, useEffect } from 'react';

const WarTools = () => {
	const [project, setProject] = useState<Project | null>(null);
	const [lightBoxImage, setLightBoxImage] = useState<Image | null>(null);
	const req = useRouter();

	useEffect(() => {
		let project = null;

		for (let i = 0; i < projects.length; i ++) {
			if (projects[i].size === "half") {
				for (let j = 0; j < projects[i].projects.length; j ++) {
					if (projects[i].projects[j].link === req.query.project) {
						project = projects[i].projects[j];
					}
				}
			} else if (projects[i].size === "full") {
				if (projects[i].link === req.query.project) {
					project = projects[i]
				}
			}
		}

		setProject(project);
	}, [req])

	return (
		<>
			<div onClick = {() => { setLightBoxImage(null) }} className = {`cursor-pointer fixed w-screen h-screen bg-black z-40 transition duration-200 ${lightBoxImage === null ? "opacity-0 pointer-events-none" : "opacity-60 pointer-events-auto"}`}>

			</div>

			{ lightBoxImage !== null && (
				<div className = "fixed w-screen h-screen grid place-items-center z-50 pointer-events-none">
					<img src={lightBoxImage.url} alt={lightBoxImage.alt} className = "opacity-100 w-2/3 pointer-events-auto" />
					<span className = "fixed bottom-0 mx-auto text-white mb-4 text-lg">{ lightBoxImage.alt }</span>
				</div>
			)}

			<div className="
				bg-background
				h-full 
				min-h-screen
			">
				<div className="grid place-items-center text-center text-white">
					{project !== null ? (
						<div>
							<Card>
								{
									project.infoPage !== null ? (
										<div className = "text-white">
											<div id = "images" className = "flex flex-row gap-8 overflow-x-scroll no-scrollbar">
												{ project.infoPage.images.map(image => (
													<img onClick = {() => {
														setLightBoxImage(image);
													}} className = "h-52 cursor-pointer" src={image.url} alt={image.alt} />
												)) }
											</div>

											<div id = "heading" className = "flex flex-row">
												<h1 className = "font-bold text-5xl text-left my-4 w-1/2">{ project.name }</h1>

												<div className = "flex flex-row justify-center w-1/2 my-auto gap-4">
													{ project.links.site !== null && <Button type = "block" target = "blank" link = {project.links.site}>Visit Site</Button> }
													{ project.links.github !== null && <Button target = "blank" link = {project.links.github}>View on Github</Button> }
												</div>
											</div>

											<div className="my-6 text-left">
												{ project.infoPage.description !== null && project.infoPage.description.map(p => (
													<p className = "py-2">{ p }</p>
												)) }
											</div>

											<div>
												<h2 className = "text-left text-xl font-bold">What Did I Use?</h2>
												<div className="my-2 text-left flex flex-row gap-8">
													{ project.infoPage.technologies.map(section => (
														<div>
															<h3 className = "font-semibold text-lg">{ section.name }</h3>
															<ol className = "ml-2">
																{ section.tech.map(tech => (
																	<li><a className = "text-accent" href={tech.link}>{ tech.name }</a></li>
																)) }
															</ol>
														</div>
													)) }
												</div>
											</div>

											<div className = "flex flex-row justify-end">
												<div>
													<Button link = "/projects">Back to Projects</Button>
												</div>
											</div>
										</div>
									) : "No info for this project yet"
								}
							</Card>
						</div>
					) : ""}
				</div>
			</div>
		</>
	)
}

export default WarTools;