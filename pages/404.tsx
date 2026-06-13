import { Button, Card } from '../components';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { SiTailwindcss, SiGmail, SiKofi, SiReplit, SiDiscord, SiBluesky,
         SiJavascript, SiTypescript, SiElectron, SiSocketdotio, SiReact, SiNodedotjs, SiUikit } from 'react-icons/si';
import { TbBrandNextjs, TbBrandCpp, TbBrandFramerMotion } from 'react-icons/tb';
import { DiCss3, DiHtml5, DiMongodb } from 'react-icons/di';
import { useState } from 'react';
import classNames from 'classnames';
import { projects, charity } from '../utils/projects';
import { ShortTech } from '../utils/interfaces';

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

const technologies = [
    "Next.js", "TypeScript", "React", "Tailwind CSS",
    "Node.js", "MongoDB", "JavaScript", "C++", "Electron", "Socket.IO",
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
        case "C":             return <span className = {cls}>C</span>;
        case "css":           return <DiCss3 className = {cls} />;
        case "html":          return <DiHtml5 className = {cls} />;
        case "react":         return <SiReact className = {cls} />;
        case "uikit":         return <SiUikit className = {cls} />;
        case "CPP":           return <TbBrandCpp className = {cls} />;
        case "mongo":         return <DiMongodb className = {cls} />;
        case "js":            return <SiJavascript className = {cls} />;
        case "ts":            return <SiTypescript className = {cls} />;
        case "node":          return <SiNodedotjs className = {cls} />;
        case "next":          return <TbBrandNextjs className = {cls} />;
        case "electron":      return <SiElectron className = {cls} />;
        case "tailwind":      return <SiTailwindcss className = {cls} />;
        case "socketio":      return <SiSocketdotio className = {cls} />;
        case "framer-motion": return <TbBrandFramerMotion className = {cls} />;
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
        case "twitter":  Icon = <AiOutlineTwitter className = {classes} />; break;
        case "linkedin": Icon = <AiFillLinkedin className = {classes} />;   break;
        case "github":   Icon = <AiFillGithub className = {classes} />;     break;
        case "bluesky":  Icon = <SiBluesky className = {classes} />;        break;
        case "discord":  Icon = <SiDiscord className = {classes} />;        break;
        case "replit":   Icon = <SiReplit className = {classes} />;         break;
        case "gmail":    Icon = <SiGmail className = {classes} />;          break;
        case "kofi":     Icon = <SiKofi className = {classes} />;           break;
    }

    return (
        <a
            aria-label={`Link to my ${contact.name}`}
            className = {`group social ${contact.name}`}
            data-m-delay={String((Math.abs(Math.ceil(index - (contacts.length / 2)))) * 0.25 + 0.75)}
            data-m={index < Math.floor(contacts.length / 2) ? "bounce-left" : index > Math.floor(contacts.length / 2) ? "bounce-right" : "bounce-down"}
            data-m-duration="0.75"
            href={contact.link}
            target="_new"
        >
            {Icon}
        </a>
    );
};

const NotFound = () => {
    return (
        <div className = "bg-background min-h-screen flex flex-col justify-between">

            <section id="hero" className = "relative grid place-items-center text-center px-4 pt-16 mt-32">
                <div data-m="drop" data-m-delay="0.5">
                    <span data-m="reveal-right" data-m-duration="1" data-m-delay="1" className = "text-3xl text-white p-4 block text-center">
                        <h1 className = "gradient-name font-bold text-6xl">404</h1>
                        <h2 className = "text-4xl">That page does not exist</h2>
                    </span>
                </div>
            </section>

            <section id="contact" className = "py-24 px-4 text-center">
                <h2 className = "text-3xl font-extrabold text-white mb-2">Get in Touch</h2>
                <p className = "text-white/40 mb-4">Open to new opportunities and collaborations.</p>
                <div className = "text-white flex flex-row flex-wrap justify-center gap-1 lg:gap-4">
                    {contacts.map((contact, i) => (
                        <ContactIcon key={contact.name + "-footer"} contact={contact} index={i} />
                    ))}
                </div>
                <p className = "mt-16 text-white/20 text-sm">
                    Made with <span className = "text-accent">Next.js</span> and <span className = "text-accent">Tailwind CSS</span>
                </p>
            </section>

        </div>
    );
};

export default NotFound;
