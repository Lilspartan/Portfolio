import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Button, Card, ContactIcons, SectionHeading } from '../components';
import { SiTailwindcss, SiJavascript, SiTypescript, SiElectron, SiSocketdotio,
         SiReact, SiNodedotjs, SiUikit } from 'react-icons/si';
import { TbBrandNextjs, TbBrandCpp, TbBrandFramerMotion } from 'react-icons/tb';
import { DiCss3, DiHtml5, DiMongodb } from 'react-icons/di';
import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { projects, charity } from '../utils/projects';
import { ShortTech } from '../utils/interfaces';
import { getAllWriteups, WriteupMeta } from '../utils/writeups';
import { formatWriteupDate } from '../utils/dates';

const OPEN_TO_WORK = false;

const experience = [
    {
        role: "Teaching Assistant - GAM200/250",
        link: "https://www.digipen.edu",
        subtitle: "Sophomore Game Project, DigiPen Institute of Technology",
        dates: "Fall 2025 - Spring 2026",
    },
    {
        role: "Teaching Assistant - CS260",
        link: "https://www.digipen.edu",
        subtitle: "Computer Networks I, DigiPen Institute of Technology",
        dates: "Summer 2026",
    },
];

const currentlyDoing = [
    { role: "Pursuing a BS in Computer Science", subtitle: "DigiPen Institute of Technology" },
];

const technologies = [
    "Docker", "Redis", "HTML/CSS",
    "Next.js", "TypeScript", "React", "Tailwind CSS",
    "Bun", "Node.js", "MongoDB", "JavaScript", "C/C++", "Electron", "Socket.IO",
];

const disciplines = [
    "Full-Stack Development",
    "Systems Programming",
    "Real-Time Networking",
    "Game Engine Development",
    "Software Architecture",
    "Cross-Platform Apps",
];

const titles = [
    "developer",
    "game developer",
    "full-stack developer",
    "systems programmer",
    "software engineer",
];

const SmallTechIcon = ({ tech }: { tech: ShortTech }) => {
    const cls = "text-base text-white/70";
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

const CyclingWord = ({ words, interval = 2200 }: { words: string[]; interval?: number }) => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex(i => (i + 1) % words.length);
                setVisible(true);
            }, 300);
        }, interval);
        return () => clearInterval(id);
    }, [words, interval]);

    return (
        <span
            className={`text-accent font-bold inline-block whitespace-nowrap transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
            }`}
        >
            {words[index]}
        </span>
    );
};

function calculateAge(date: number) {
    const ageDifMs = Date.now() - date;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

interface Props {
    recentWriteups: WriteupMeta[];
}

const Landing = ({ recentWriteups }: Props) => {
    const [age] = useState(calculateAge(1094760000000).toString());

    return (
        <div className="bg-background">
            <SEO
                title="Gabe Krahulik | Developer"
                description="Game and web developer from Seattle building full-stack apps and game engines."
            />

            <section id="hero" className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-24 pb-16">
                <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-6 items-center">
                    <div>
                        <div data-m="reveal-right" data-m-duration="1" data-m-delay="0.4">
                            {OPEN_TO_WORK && (
                                <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold mb-4">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                                    Open to work
                                </span>
                            )}
                            <span className="text-white/50 text-sm uppercase tracking-[0.3em] font-semibold block mb-4">
                                Hey, I'm
                            </span>
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95]">
                                <span className="gradient-name">Gabe<br />Krahulik</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-white/70 mt-6 max-w-2xl">
                                a {age} year old <CyclingWord words={titles} /> from Seattle
                            </p>
                        </div>
                        <div data-m="bounce-up" data-m-delay="0.8" data-m-duration="1">
                            <ContactIcons className="text-white flex flex-row flex-wrap gap-1" />
                        </div>
                    </div>

                    <div data-m="bounce-up" data-m-delay="1" data-m-duration="1" className="lg:mt-16 lg:ml-auto w-full lg:max-w-sm">
                        <span className="text-xs font-bold text-white/40 tracking-widest uppercase block mb-4">
                            Currently: {currentlyDoing.map(a => a.role).join(' · ')}
                        </span>
                        <div className="flex flex-col gap-3">
                            <Button
                                link="/#projects"
                                type="outline"
                                glow
                                className="bg-accent! text-primary! border-accent! hover:opacity-90! py-4! text-lg!"
                            >View my Projects</Button>
                            <Button
                                link="/resume"
                                type="outline"
                                className="py-4! text-lg!"
                            >Resume</Button>
                        </div>
                    </div>
                </div>
                <a href="#about" className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition flex-col items-center gap-1 text-sm animate-bounce">
                    <span>scroll</span>
                    <span>↓</span>
                </a>
            </section>

            <section id="about" className="py-24 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16">
                    <ScrollReveal animation="reveal-right" duration="0.6" className="block">
                        <div className="lg:sticky lg:top-32">
                            <SectionHeading eyebrow="Who I am">About Me</SectionHeading>
                            <p className="text-white/80 text-lg leading-relaxed mt-6">
                                I'm a developer from Seattle building games and web apps. I love working across the full stack and have found that same passion extend across to the world of game development. I try to stick close to my roots with network programming and engine architecture but enjoy making anything that I can see people have fun with!
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="bounce-up" duration="0.7" delay="0.1" className="block lg:mt-20">
                    <Card>
                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-sm font-bold text-white/40 mb-3 tracking-widest uppercase">Experience</h3>
                                <div className="flex flex-col gap-3">
                                    {experience.map((e) => (
                                        <div key={e.role} className="border border-white/10 p-4">
                                            <p className="text-white font-semibold text-base">{e.role}</p>
                                            <a href={e.link} target="_blank" className="text-accent/80 hover:text-accent transition-all duration-200 text-sm mt-0.5 block">
                                                {e.subtitle}
                                            </a>
                                            <p className="text-white/40 text-xs mt-1 tracking-wider">{e.dates}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white/40 mb-3 tracking-widest uppercase">Education</h3>
                                <div className="border border-white/10 p-4">
                                    <p className="text-white font-semibold text-base">BS in Computer Science</p>
                                    <a href="https://www.digipen.edu/" target="_blank" className="text-accent/80 hover:text-accent transition-all duration-200 text-sm mt-0.5 block">
                                        DigiPen Institute of Technology
                                    </a>
                                    <p className="text-white/40 text-xs mt-1 tracking-wider">2023 - 2027</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white/40 mb-3 tracking-widest uppercase">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map(skill => (
                                        <span key={skill} className="border border-accent/30 text-accent/80 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white/40 mb-3 tracking-widest uppercase">Disciplines</h3>
                                <div className="flex flex-wrap gap-2">
                                    {disciplines.map(d => (
                                        <span key={d} className="border border-white/10 text-white/60 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                                            {d}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                    </ScrollReveal>
                </div>
            </section>

            <section id="projects" className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
                <ScrollReveal animation="reveal-right" duration="0.6" className="block mb-8">
                    <SectionHeading eyebrow="What I've built">My Projects</SectionHeading>
                </ScrollReveal>
                <div className="flex flex-col gap-16 mb-16">
                    {projects.filter(p => p.featured).map((project, i) => {
                        const heroImage = project.detail?.images?.[0]?.url ?? project.logo;
                        const hasMoreInfo = project.detail?.paragraphs !== null;
                        return (
                            <ScrollReveal key={project.link} animation={i % 2 === 0 ? "reveal-right" : "reveal-left"} duration="0.6">
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                    <div className={`group relative aspect-video bg-primary overflow-hidden border border-white/10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                        <img src={heroImage} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div>
                                        <img src={project.logo} alt={project.name + " logo"} className="h-14 object-contain mb-4" />
                                        <h3 className="text-3xl font-extrabold text-white mb-3">{project.name}</h3>
                                        {!project.active && (
                                            <span className="text-xs font-semibold bg-accent text-primary py-0.5 px-2 inline-block mb-2">
                                                Inactive
                                            </span>
                                        )}
                                        <p className="text-white/60 leading-relaxed mb-4">{project.description}</p>
                                        {project.tech.length > 0 && (
                                            <div className="flex flex-row gap-2 flex-wrap mb-6">
                                                {project.tech.map((tech, ti) => (
                                                    <SmallTechIcon key={ti} tech={tech} />
                                                ))}
                                            </div>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                            {project.links.map((link) => (
                                                <Button
                                                    key={link.text}
                                                    type={link.external ? "icon" : "outline"}
                                                    link={link.url}
                                                    target={link.external ? "blank" : "new"}
                                                    className="w-auto!"
                                                >{link.text}</Button>
                                            ))}
                                            {hasMoreInfo && (
                                                <Button type="outline" link={`/projects/${project.link}`} className="w-auto!">More Info</Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                <div className="flex flex-col divide-y divide-white/5 border-t border-b border-white/5">
                    {projects.filter(p => !p.featured).map((project, i) => {
                        const hasMoreInfo = project.detail?.paragraphs !== null;
                        const primaryLink = project.links[0];
                        const href = hasMoreInfo ? `/projects/${project.link}` : (primaryLink?.url ?? "#");
                        const external = !hasMoreInfo && !!primaryLink?.external;
                        return (
                            <ScrollReveal key={project.link} animation="bounce-up" duration="0.5" delay={String(Math.round((i % 6) * 0.05 * 10) / 10)}>
                                <a
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noreferrer" : undefined}
                                    className="group flex items-center gap-4 py-5"
                                >
                                    <img src={project.logo} alt={project.name + " logo"} className="h-10 w-10 object-contain shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h4 className="text-white font-bold group-hover:text-accent transition duration-200">{project.name}</h4>
                                            {!project.active && (
                                                <span className="text-[10px] font-semibold bg-accent text-primary py-0.5 px-1.5">
                                                    Inactive
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white/50 text-sm mt-0.5 truncate">{project.description}</p>
                                    </div>
                                    <div className="hidden sm:flex gap-1.5 shrink-0">
                                        {project.tech.slice(0, 4).map((tech, ti) => (
                                            <SmallTechIcon key={ti} tech={tech} />
                                        ))}
                                    </div>
                                    <span className="text-white/30 group-hover:text-accent transition duration-200 text-lg shrink-0">→</span>
                                </a>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {recentWriteups.length > 0 && (
                    <section id="writing" className="py-16 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
                        <div className="flex items-end justify-between mb-8 gap-4">
                            <ScrollReveal animation="reveal-right" duration="0.6" className="block">
                                <SectionHeading eyebrow="Latest thoughts">Recent Writeups</SectionHeading>
                            </ScrollReveal>
                            <Link href="/writing" className="text-accent/70 hover:text-accent text-sm transition duration-200 whitespace-nowrap mb-1">All writeups →</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            {recentWriteups[0] && (() => {
                                const w = recentWriteups[0];
                                const project = projects.find(p => p.link === w.project);
                                return (
                                    <ScrollReveal animation="bounce-up" duration="0.6">
                                    <a href={`/writing/${w.slug}`} className="block group">
                                        <Card full>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        {project && (
                                                            <span className="border border-accent/30 text-accent/80 px-2 py-0.5 text-xs font-semibold tracking-wider uppercase">
                                                                {project.name}
                                                            </span>
                                                        )}
                                                        <span className="text-white/30 text-xs">{formatWriteupDate(w.date)}</span>
                                                    </div>
                                                    <p className="text-white font-bold text-lg group-hover:text-accent transition duration-200">{w.title}</p>
                                                    <p className="text-white/50 text-sm mt-1">{w.description}</p>
                                                </div>
                                                <span className="text-white/30 group-hover:text-accent transition duration-200 text-lg shrink-0">→</span>
                                            </div>
                                        </Card>
                                    </a>
                                    </ScrollReveal>
                                );
                            })()}
                            {recentWriteups.length > 1 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {recentWriteups.slice(1, 3).map((w, i) => {
                                        const project = projects.find(p => p.link === w.project);
                                        return (
                                            <ScrollReveal key={w.slug} animation="bounce-up" duration="0.6" delay={String(i * 0.1)}>
                                            <a href={`/writing/${w.slug}`} className="block group">
                                                <Card full>
                                                    <div className="flex flex-col h-full justify-between gap-3">
                                                        <div>
                                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                                {project && (
                                                                    <span className="border border-accent/30 text-accent/80 px-2 py-0.5 text-xs font-semibold tracking-wider uppercase">
                                                                        {project.name}
                                                                    </span>
                                                                )}
                                                                <span className="text-white/30 text-xs">{formatWriteupDate(w.date)}</span>
                                                            </div>
                                                            <p className="text-white font-bold group-hover:text-accent transition duration-200">{w.title}</p>
                                                            <p className="text-white/50 text-sm mt-1">{w.description}</p>
                                                        </div>
                                                        <span className="text-white/30 group-hover:text-accent transition duration-200 text-sm">Read more →</span>
                                                    </div>
                                                </Card>
                                            </a>
                                            </ScrollReveal>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                <ScrollReveal animation="reveal-right" duration="0.6" className="block mt-20 mb-8">
                    <SectionHeading eyebrow="Giving back">Charity Work</SectionHeading>
                </ScrollReveal>
                <div className="flex flex-col divide-y divide-white/5 border-t border-b border-white/5">
                    {charity.map((event: any, i: number) => {
                        const isUpcoming = new Date(event.startDate) > new Date() || event.raised === 0;
                        const dateLabel = event.startDate === event.endDate
                            ? new Date(event.startDate).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })
                            : `${new Date(event.startDate).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })} - ${new Date(event.endDate).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}`;
                        return (
                            <ScrollReveal key={i} animation="bounce-up" duration="0.5" delay={String(Math.round((i % 6) * 0.05 * 10) / 10)}>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-5">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h4 className="text-white font-bold">{event.name}</h4>
                                            {isUpcoming && (
                                                <span className="text-[10px] font-semibold text-accent border border-accent/40 py-0.5 px-1.5 uppercase tracking-wider">
                                                    Upcoming
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white/50 text-sm mt-0.5">
                                            {isUpcoming ? event.notes : `Raised $${Intl.NumberFormat().format(event.raised)} · ${event.role}`}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0 flex-wrap">
                                        {event.links.map((link: any) => (
                                            <a
                                                key={link.url}
                                                href={link.url}
                                                className="border border-white/10 text-white/50 hover:text-accent hover:border-accent/40 transition duration-200 px-2 py-1 text-xs whitespace-nowrap"
                                            >
                                                {link.text}
                                            </a>
                                        ))}
                                        <span className="text-white/30 text-xs whitespace-nowrap">{dateLabel}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </section>

            <section id="contact" className="py-24 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
                <ScrollReveal animation="bounce-up" duration="0.6" className="block">
                <SectionHeading eyebrow="Let's talk">Get in Touch</SectionHeading>
                <p className="text-white/40 mt-4 mb-8 max-w-md">Open to new opportunities and collaborations.</p>
                </ScrollReveal>
                <ContactIcons className="text-white flex flex-row flex-wrap gap-1 lg:gap-4" keyPrefix="footer-" />
                <p className="mt-16 text-white/20 text-sm">
                    Made with <span className="text-accent">Next.js</span> and <span className="text-accent">Tailwind CSS</span>
                </p>
            </section>

        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const recentWriteups = getAllWriteups().slice(0, 3);
    return { props: { recentWriteups } };
};

export default Landing;
