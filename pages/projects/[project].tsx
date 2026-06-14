import { GetStaticPaths, GetStaticProps } from 'next';
import { Button, Card } from '../../components';
import Lightbox from '../../components/Lightbox';
import SEO from '../../components/SEO';
import { Project, Image, ShortTech } from '../../utils/interfaces';
import { projects, Tools } from '../../utils/projects';
import { getWriteupsByProject, WriteupMeta } from '../../utils/writeups';
import { formatWriteupDate } from '../../utils/dates';
import { useState } from 'react';
import { DiCss3, DiHtml5, DiMongodb } from 'react-icons/di';
import { SiJavascript, SiTailwindcss, SiTypescript, SiElectron, SiSocketdotio, SiReact, SiNodedotjs, SiUikit } from 'react-icons/si';
import { TbBrandNextjs, TbBrandFramerMotion, TbBrandCpp } from 'react-icons/tb';

const techIcon = (tech: ShortTech, cls: string) => {
	switch (tech) {
		case "C":             return <span className={cls}>C</span>;
		case "css":           return <DiCss3 className={cls} />;
		case "html":          return <DiHtml5 className={cls} />;
		case "react":         return <SiReact className={cls} />;
		case "uikit":         return <SiUikit className={cls} />;
		case "CPP":           return <TbBrandCpp className={cls} />;
		case "mongo":         return <DiMongodb className={cls} />;
		case "js":            return <SiJavascript className={cls} />;
		case "ts":            return <SiTypescript className={cls} />;
		case "node":          return <SiNodedotjs className={cls} />;
		case "next":          return <TbBrandNextjs className={cls} />;
		case "electron":      return <SiElectron className={cls} />;
		case "tailwind":      return <SiTailwindcss className={cls} />;
		case "socketio":      return <SiSocketdotio className={cls} />;
		case "framer-motion": return <TbBrandFramerMotion className={cls} />;
		default:              return null;
	}
};

const TechPill = ({ tech, index }: { tech: ShortTech; index: number }) => {
	const tool = Tools[tech];
	return (
		<a
			href={tool?.link}
			target="_blank"
			rel="noreferrer"
			data-m="bounce-up"
			data-m-delay={(index + 1) * 0.1}
			className="flex items-center gap-2 border border-accent/30 text-accent/80 px-3 py-1.5 text-xs font-semibold tracking-wider hover:border-accent hover:text-accent transition-all duration-200"
		>
			{techIcon(tech, "text-sm")}
			<span>{tool?.name ?? tech}</span>
		</a>
	);
};

interface Props {
	project: Project;
	relatedWriteups: WriteupMeta[];
}

const ProjectPage = ({ project, relatedWriteups }: Props) => {
	const [lightBoxImage, setLightBoxImage] = useState<Image | null>(null);

	const ogUrl = `/api/og?title=${encodeURIComponent(project.name)}&description=${encodeURIComponent(project.description)}&type=project`;

	return (
		<>
			<SEO
				title={`${project.name} - Gabe Krahulik`}
				description={project.description}
				url={`projects/${project.link}`}
				ogImage={ogUrl}
			/>
			{lightBoxImage && (
				<Lightbox
					src={lightBoxImage.url}
					caption={lightBoxImage.alt}
					onClose={() => setLightBoxImage(null)}
				/>
			)}

			<div className="bg-background min-h-screen text-white">
				{project.detail !== null ? (
					<>
						{/* Hero */}
						<section className="py-16 mt-16 px-4 max-w-4xl mx-auto">
							<a href="/#projects" className="inline-flex items-center gap-1 text-white/40 hover:text-white/70 text-sm transition duration-200 mb-6 block">
								← Projects
							</a>
							<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
								<div className="flex items-center gap-4">
									<img src={project.logo} alt={project.name + " logo"} className="h-12 object-contain" />
									<h1 data-m="bounce-left" className="text-4xl font-extrabold text-white border-l-4 border-accent pl-4 flex flex-wrap items-center gap-3">
										{project.name}
										{!project.active && (
											<span className="text-sm font-semibold bg-accent text-primary py-1 px-2">Inactive</span>
										)}
									</h1>
								</div>
							</div>
						</section>

						{/* Gallery */}
						{(project.detail.trailer || project.detail.images.length > 0) && (
							<section className="px-4 max-w-4xl mx-auto mb-8">
								{project.detail.trailer ? (
									<>
										<iframe
											loading="lazy"
											className="w-full aspect-video mb-4"
											src={project.detail.trailer}
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
											referrerPolicy="strict-origin-when-cross-origin"
											allowFullScreen
										/>
										{project.detail.images.length > 0 && (
											<div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
												{project.detail.images.map((image, i) => (
													<img
														key={i}
														data-m="bounce-up"
														data-m-delay={0.05 * i}
														data-m-duration="0.75"
														onClick={() => setLightBoxImage(image)}
														className="w-full aspect-video object-cover cursor-pointer hover:opacity-80 transition duration-200"
														src={image.url}
														alt={image.alt}
													/>
												))}
											</div>
										)}
									</>
								) : (
									<div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
										{project.detail.images.map((image, i) => (
											<img
												key={i}
												data-m="bounce-up"
												data-m-delay={0.05 * i}
												data-m-duration="0.75"
												onClick={() => setLightBoxImage(image)}
												className={`w-full object-cover cursor-pointer hover:opacity-80 transition duration-200 aspect-video ${i === 0 ? "col-span-2 lg:col-span-3" : ""}`}
												src={image.url}
												alt={image.alt}
											/>
										))}
									</div>
								)}
							</section>
						)}

						{/* Content + Sidebar */}
						<section className="px-4 max-w-4xl mx-auto mb-8">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
								<div className="lg:col-span-2 flex flex-col gap-4">
									{project.detail.paragraphs !== null && project.detail.paragraphs.map((p, i) => (
										<p
											key={i}
											data-m="reveal-right"
											data-m-delay={0.2 * i}
											data-m-duration="1"
											className="text-white/80 text-lg leading-relaxed"
										>{p}</p>
									))}
								</div>

								<div className="lg:col-span-1">
									<Card>
										<div className="flex flex-col gap-6">
											<div>
												<h3 className="text-sm font-bold text-white/40 mb-3 tracking-widest uppercase">Technologies</h3>
												<div className="flex flex-wrap gap-2">
													{project.detail.tech.flatMap((section, si) =>
														(section.short ?? []).map((tech, ti) => (
															<TechPill key={`${si}-${tech}`} tech={tech} index={si * 10 + ti} />
														))
													)}
												</div>
											</div>
											<div>
												<h3 className="text-sm font-bold text-white/40 mb-3 tracking-widest uppercase">Links</h3>
												<div className="flex flex-col gap-2">
													{project.links.map((link) => (
														<Button
															key={link.text}
															type={link.external ? "icon" : "outline"}
															link={link.url}
															target={link.external ? "blank" : "new"}
														>{link.text}</Button>
													))}
												</div>
											</div>
										</div>
									</Card>
								</div>
							</div>
						</section>

						{/* Related writeups */}
						{relatedWriteups.length > 0 && (
							<section className="px-4 max-w-4xl mx-auto mb-8">
								<h2 className="text-2xl font-extrabold text-white mb-4 border-l-4 border-accent pl-4">Related Writeups</h2>
								<div className="flex flex-col gap-3">
									{relatedWriteups.map(w => (
										<a key={w.slug} href={`/writing/${w.slug}`} className="block group">
											<Card>
												<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
													<div>
														<p className="text-white font-semibold group-hover:text-accent transition duration-200">{w.title}</p>
														<p className="text-white/50 text-sm mt-0.5">{w.description}</p>
													</div>
													<span className="text-white/30 text-xs shrink-0">
														{formatWriteupDate(w.date)}
													</span>
												</div>
											</Card>
										</a>
									))}
								</div>
							</section>
						)}

						{/* Footer */}
						<section className="px-4 max-w-4xl mx-auto pb-16">
							<div className="w-48">
								<Button link="/#projects">← Back to Projects</Button>
							</div>
						</section>
					</>
				) : (
					<div className="min-h-screen grid place-items-center">
						<Card>
							<div className="flex flex-col gap-2">
								<span>There's no further information for that project yet</span>
								{project.links[0] && <Button link={project.links[0].url}>View Project</Button>}
								<Button link="/#projects">Back to Projects</Button>
							</div>
						</Card>
					</div>
				)}
			</div>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: projects.map(p => ({ params: { project: p.link } })),
	fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const project = projects.find(p => p.link === params!.project) ?? null;
	if (!project) return { notFound: true };
	const relatedWriteups = getWriteupsByProject(project.link);
	return { props: { project, relatedWriteups } };
};

export default ProjectPage;
