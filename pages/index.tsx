import { GetStaticProps } from 'next';
import { Button, Card } from '../components';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { SiTailwindcss, SiGmail, SiKofi, SiReplit, SiDiscord, SiBluesky,
         SiJavascript, SiTypescript, SiElectron, SiSocketdotio, SiReact, SiNodedotjs, SiUikit } from 'react-icons/si';
import { TbBrandNextjs, TbBrandCpp, TbBrandFramerMotion } from 'react-icons/tb';
import { DiCss3, DiHtml5, DiMongodb } from 'react-icons/di';
import { useState } from 'react';
import classNames from 'classnames';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { projects, charity } from '../utils/projects';
import { ShortTech } from '../utils/interfaces';
import { getAllWriteups, WriteupMeta } from '../utils/writeups';
import { formatWriteupDate } from '../utils/dates';

const OPEN_TO_WORK = false;

const contacts = [
    { name: "gmail",    link: "mailto:gabe@gabekrahulik.dev" },
    { name: "linkedin", link: "https://www.linkedin.com/in/gabe-krahulik/" },
    { name: "github",   link: "https://github.com/Lilspartan" },
    { name: "bluesky",  link: "https://bsky.app/profile/gabekrahulik.dev" },
    { name: "kofi",     link: "https://ko-fi.com/gabekrahulik" },
    { name: "discord",  link: "https://discord.com/users/378319931005206530" },
    { name: "twitter",  link: "https://twitter.com/gabekrahulik" },
];

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

const ContactIcon = ({ contact, index }: { contact: typeof contacts[0]; index: number }) => {
    const classes = classNames([
        "mx-3", "transition", "duration-300", "mt-12", "lg:mt-8", "text-4xl",
        contact.name, "group-hover:-translate-y-3", "group-hover:scale-125",
    ]);

    let Icon = <></>;
    switch (contact.name) {
        case "twitter":  Icon = <AiOutlineTwitter className={classes} />; break;
        case "linkedin": Icon = <AiFillLinkedin className={classes} />;   break;
        case "github":   Icon = <AiFillGithub className={classes} />;     break;
        case "bluesky":  Icon = <SiBluesky className={classes} />;        break;
        case "discord":  Icon = <SiDiscord className={classes} />;        break;
        case "replit":   Icon = <SiReplit className={classes} />;         break;
        case "gmail":    Icon = <SiGmail className={classes} />;          break;
        case "kofi":     Icon = <SiKofi className={classes} />;           break;
    }

    return (
        <a
            aria-label={`Link to my ${contact.name}`}
            className={`group social ${contact.name}`}
            data-m-delay={String((Math.abs(Math.ceil(index - (contacts.length / 2)))) * 0.25 + 0.75)}
            data-m={index < Math.floor(contacts.length / 2) ? "bounce-left" : index > Math.floor(contacts.length / 2) ? "bounce-right" : "bounce-down"}
            data-m-duration="0.75"
            href={contact.link}
            target="_blank"
        >
            {Icon}
        </a>
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

            <section id="hero" className="relative min-h-screen grid place-items-center text-center px-4 pt-16">
                <div data-m="drop" data-m-delay="0.5">
                    <Card>
                        {OPEN_TO_WORK && (
                            <div className="flex justify-end mb-2">
                                <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                                    Open to work
                                </span>
                            </div>
                        )}
                        <span data-m="reveal-right" data-m-duration="1" data-m-delay="1" className="text-3xl text-white p-4 block text-center">
                            My Name is <span className="gradient-name font-bold">Gabe Krahulik</span>
                        </span>
                        <span data-m="reveal-right" data-m-duration="1.5" data-m-delay="1.5" className="text-2xl block text-white p-4 text-center">
                            a{age === "18" ? "n" : ""} <span className="text-accent font-bold">{age}</span> year old developer from <span className="text-accent font-bold">Seattle</span>
                        </span>
                        <div className="p-4 mt-2 flex flex-row justify-center gap-2" data-m="bounce-up" data-m-delay="2.5" data-m-duration="1">
                            <div className="w-full lg:w-1/2">
                                <Button link="/#projects" type="outline" glow>View my Projects</Button>
                            </div>
                            <div className="w-full lg:w-1/4">
                                <Button link="/resume" type="outline">Resume</Button>
                            </div>
                        </div>
                        <div className="text-white flex flex-row flex-wrap lg:flex-nowrap justify-center gap-1 lg:gap-4 mx-2 lg:mx-8">
                            {contacts.map((contact, i) => (
                                <ContactIcon key={contact.name} contact={contact} index={i} />
                            ))}
                        </div>
                    </Card>
                </div>
                <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition flex flex-col items-center gap-1 text-sm animate-bounce">
                    <span>scroll</span>
                    <span>↓</span>
                </a>
            </section>

            <section id="about" className="py-24 px-4 max-w-4xl mx-auto">
                <ScrollReveal animation="reveal-right" duration="0.6">
                    <h2 className="text-4xl font-extrabold text-white mb-8 border-l-4 border-accent pl-4">About Me</h2>
                </ScrollReveal>
                <ScrollReveal animation="bounce-up" duration="0.7" delay="0.1">
                <Card>
                    <p className="text-white/80 text-lg leading-relaxed mb-8">
                        I'm a developer from Seattle building games and web apps. I love working across the full stack and have found that same passion extend across to the world of game development. I try to stick close to my roots with network programming and engine architecture but enjoy making anything that I can see people have fun with!
                    </p>
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
            </section>

            <section id="projects" className="py-16 px-4 max-w-7xl mx-auto">
                <ScrollReveal animation="reveal-right" duration="0.6">
                    <h2 className="text-4xl font-extrabold text-white mb-8 border-l-4 border-accent pl-4">My Projects</h2>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, i) => (
                        <ScrollReveal key={i} animation="bounce-up" duration="0.6" delay={String(Math.round((i % 4) * 0.1 * 10) / 10)} className={project.featured ? 'sm:col-span-2' : ''}>
                            <Card full>
                                <div className="flex flex-col h-full justify-between gap-4">
                                    <div>
                                        <img
                                            src={project.logo}
                                            alt={project.name + " logo"}
                                            className={`object-contain mb-4 ${project.featured ? 'h-20' : 'h-14'}`}
                                        />
                                        <h3 className={`font-extrabold text-white ${project.featured ? 'text-2xl' : 'text-xl'}`}>
                                            {project.name}
                                        </h3>
                                        {!project.active && (
                                            <span className="text-xs font-semibold bg-accent text-primary py-0.5 px-2 inline-block mt-1">
                                                Inactive
                                            </span>
                                        )}
                                        <p className="text-white/60 text-sm mt-2 leading-relaxed">{project.description}</p>
                                        {project.tech.length > 0 && (
                                            <div className="flex flex-row gap-1.5 flex-wrap mt-3">
                                                {project.tech.slice(0, 4).map((tech, ti) => (
                                                    <SmallTechIcon key={ti} tech={tech} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {(() => {
                                        const hasMoreInfo = project.detail?.paragraphs !== null;
                                        const totalButtons = project.links.length + (hasMoreInfo ? 1 : 0);
                                        const useGrid = project.featured && totalButtons >= 3;
                                        return (
                                            <div className={useGrid ? "grid grid-cols-2 gap-1.5" : "flex flex-col gap-1.5"}>
                                                {project.links.map((link) => (
                                                    <Button
                                                        key={link.text}
                                                        type={link.external ? "icon" : "outline"}
                                                        link={link.url}
                                                        target={link.external ? "blank" : "new"}
                                                    >{link.text}</Button>
                                                ))}
                                                {hasMoreInfo && (
                                                    <div className={useGrid && totalButtons % 2 === 1 ? "col-span-2" : ""}>
                                                        <Button type="outline" link={`/projects/${project.link}`}>More Info</Button>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                {recentWriteups.length > 0 && (
                    <section id="writing" className="py-16 px-4 max-w-4xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <ScrollReveal animation="reveal-right" duration="0.6">
                            <h2 className="text-3xl font-extrabold text-white border-l-4 border-accent pl-4">Recent Writeups</h2>
                            </ScrollReveal>
                            <a href="/writing" className="text-accent/70 hover:text-accent text-sm transition duration-200">All writeups →</a>
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

                <ScrollReveal animation="reveal-right" duration="0.6">
                    <h2 className="text-3xl font-extrabold text-white mt-20 mb-8 border-l-4 border-accent pl-4">Charity Work</h2>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {charity.map((event: any, i: number) => (
                        <ScrollReveal key={i} animation="bounce-up" duration="0.6" delay={String(Math.round((i % 3) * 0.1 * 10) / 10)}>
                        <Card full>
                            {new Date(event.startDate) > new Date() || event.raised === 0 ? (
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h2 className="font-bold text-xl text-glow text-accent mb-4">Upcoming Event</h2>
                                        <h1 className="text-xl font-extrabold text-left text-white">{event.name}</h1>
                                        <p className="text-left text-sm mt-4 text-white/60">{event.notes}</p>
                                    </div>
                                    <div className="flex flex-col text-left mt-4">
                                        {event.links.length > 0 && <span className="text-white/40 text-sm">Links:</span>}
                                        {event.links.map((link: any) => (
                                            <span key={link.url} className="ml-2 my-1 text-accent"><a href={link.url}>{link.text}</a></span>
                                        ))}
                                        <p className="text-sm text-white/40 mt-2">{new Date(event.startDate).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h1 className="text-xl font-extrabold text-left text-white">{event.name}</h1>
                                        <span className="text-lg mt-1 text-left text-white/60 block">Raised: ${Intl.NumberFormat().format(event.raised)}</span>
                                        <span className="text-lg mb-1 text-left text-white/60 block">Role: {event.role}</span>
                                    </div>
                                    <div className="flex flex-col text-left mt-4">
                                        {event.links.length > 0 && <span className="text-white/40 text-sm">Links:</span>}
                                        {event.links.map((link: any) => (
                                            <span key={link.url} className="ml-2 my-1 text-accent"><a href={link.url}>{link.text}</a></span>
                                        ))}
                                        <span className="text-sm text-white/40 mt-2">
                                            {event.startDate === event.endDate
                                                ? new Date(event.startDate).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })
                                                : `${new Date(event.startDate).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })} - ${new Date(event.endDate).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}`
                                            }
                                        </span>
                                    </div>
                                </div>
                            )}
                        </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section id="contact" className="py-24 px-4 text-center">
                <ScrollReveal animation="bounce-up" duration="0.6">
                <h2 className="text-3xl font-extrabold text-white mb-2">Get in Touch</h2>
                <p className="text-white/40 mb-4">Open to new opportunities and collaborations.</p>
                </ScrollReveal>
                <div className="text-white flex flex-row flex-wrap justify-center gap-1 lg:gap-4">
                    {contacts.map((contact, i) => (
                        <ContactIcon key={contact.name + "-footer"} contact={contact} index={i} />
                    ))}
                </div>
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
