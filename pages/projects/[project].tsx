import { Button, ButtonContainer, Card, IconButton } from '../../components';

import { Project, Image, ShortTech } from '../../utils/interfaces';

import { useRouter } from 'next/router';
import { projects, Tools } from '../../utils/projects';
import { useState, useEffect } from 'react';

import { DiCss3, DiHtml5, DiMongodb } from 'react-icons/di';
import { SiJavascript, SiTailwindcss, SiTypescript, SiElectron, SiSocketdotio, SiReact, SiNodedotjs, SiUikit } from 'react-icons/si';
import { TbBrandNextjs, TbBrandFramerMotion, TbBrandCpp } from 'react-icons/tb';

const TechIcon = ({ tech, index }: { tech: ShortTech, index: number }) => {
	const classes = "text-xl";
	var Icon = <></>
	
	switch (tech) {
		case "css": Icon = <DiCss3 className = { classes } />; break;
		case "html": Icon = <DiHtml5 className = { classes } />; break;
		case "react": Icon = <SiReact className = { classes } />; break; 
		case "uikit": Icon = <SiUikit className = { classes } />; break;
		case "CPP": Icon = <TbBrandCpp className = { classes } />; break;
		case "mongo": Icon = <DiMongodb className = { classes } />; break;
		case "js": Icon = <SiJavascript className = { classes } />; break;
		case "ts": Icon = <SiTypescript className = { classes } />; break;
		case "node": Icon = <SiNodedotjs className = { classes } />; break;
		case "next": Icon = <TbBrandNextjs className = { classes } />; break;
		case "electron": Icon = <SiElectron className = { classes } />; break; 
		case "tailwind": Icon = <SiTailwindcss className = { classes } />; break;
		case "socketio": Icon = <SiSocketdotio className = { classes } />; break; 
		case "framer-motion": Icon = <TbBrandFramerMotion className = { classes} />; break;
		case "C": Icon = <span>C</span>; break;
	}

	return (
		<div className = "" data-m = "bounce-up" data-m-delay = {(index + 1) * 0.25}><Button target = "blank" link = {Tools[tech].link}>{ Icon }</Button></div>
	)
}

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
			<div onClick = {() => { setLightBoxImage(null) }} className = {`cursor-pointer fixed w-screen h-screen bg-black z-40 transition duration-200 ${lightBoxImage === null ? "opacity-0 pointer-events-none" : "opacity-80 pointer-events-auto"}`}>

			</div>

			{ lightBoxImage !== null && (
				<div className = "fixed w-screen h-screen grid place-items-center z-50 pointer-events-none">
					<img data-m = "bounce-down" data-m-duration = "0.75" src={lightBoxImage.url} alt={lightBoxImage.alt} className = "opacity-100 w-2/3 pointer-events-auto" />
					<span data-m = "bounce-up" data-m-duration = "0.75" data-m-delay = "0.2" className = "fixed bottom-0 mx-auto text-white mb-4 text-lg">{ lightBoxImage.alt }</span>
				</div>
			)}

			<div className="
				bg-background
				h-full 
				min-h-screen
			">
				<div className="grid place-items-center text-center min-h-screen text-white">
					{project !== null ? (
						<div className = "lg:p-8">
							<Card>
								{
									project.infoPage !== null ? (
										<div className = "text-white">
											<div id = "images" className = "flex flex-row gap-8 overflow-x-scroll no-scrollbar">
												{ project.infoPage.images.map((image, i) => (
													<img data-m = "bounce-down" data-m-delay = {0.1 * i} data-m-duration = "0.75" onClick = {() => {
														setLightBoxImage(image);
													}} className = "h-52 cursor-pointer" src={image.url} alt={image.alt} />
												)) }
											</div>

											<div id = "heading" className = "flex flex-col lg:flex-row">
												<h1 data-m = "bounce-left" className = "font-bold text-5xl text-left my-4 w-full lg:w-1/2 flex">
													{ project.name }
													{ !project.active && <span className = "text-lg my-auto mx-4 bg-accent text-primary inline py-1 px-2 rounded-lg">Inactive Project</span> }	
												</h1>

												<div data-m = "bounce-right" className = "flex flex-col lg:flex-row justify-center w-full lg:w-1/2 my-auto lg:gap-4">
													{ 
														project.new_links && project.new_links.map((link) => (
															<Button 
																type = { link.external ? "icon" : "outline" }
																link = { link.url }
																target = {link.external ? "blank" : "new"}
															>{link.text}</Button>
														))
													}
												</div>
											</div>

											<div className="my-6 text-left">
												{ project.infoPage.description !== null && project.infoPage.description.map((p, i) => (
													<p data-m = "reveal-right" data-m-delay = {0.2 * i} data-m-duration = "1" className = "py-2">{ p }</p>
												)) }
											</div>

											<div>
												<h2 className = "text-left text-xl font-bold" data-m = "bounce-down" data-m-duration = "0.5">What Did I Use?</h2>
												
												<div className="my-2 text-left flex flex-col lg:flex-row gap-8 mb-8 lg:mb-0">
													{ project.infoPage.technologies.map((section, i) => (
														<div className = "flex flex-col">
															{ project.infoPage.technologies.length > 1 && <h3 className = "font-semibold text-lg mt-2" data-m = "bounce-up" data-m-delay = {i * 0.5}>{ section.name }</h3> }
															<div className = "flex flex-row gap-2 ml-2">
																{section.short !== undefined ? (
																	<>
																		{ section.short.map((tech, i) => (
																			<TechIcon tech = { tech } index = { i } />
																		))}
																	</>
																) : (
																	""
																)}
															</div>
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
									) : (
										<div className = "flex flex-col gap-2">
											<span>
												There's no further information for that project yet
											</span>
											<Button link = {project.links.site}>View Project</Button>
											<Button link = "/projects">Back to Projects</Button>
										</div>
									)
								}
							</Card>
						</div>
					) : (
						<div>
							<Card>
								<div className = "flex flex-col gap-8">
									<span>
										Couldn't find the project you're looking for, are you sure you're in the right place?
									</span>
									<Button link = "/projects">Back to Projects</Button>
								</div>

								
							</Card>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default WarTools;
