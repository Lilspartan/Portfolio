import { Button } from '../components';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail, SiKofi, SiReplit, SiDiscord, SiBluesky } from 'react-icons/si';
import classNames from 'classnames';

const contacts = [
    { name: "gmail",    link: "mailto:gabe@gabekrahulik.dev" },
    { name: "linkedin", link: "https://www.linkedin.com/in/gabe-krahulik/" },
    { name: "github",   link: "https://github.com/Lilspartan" },
    { name: "bluesky",  link: "https://bsky.app/profile/gabekrahulik.dev" },
    { name: "kofi",     link: "https://ko-fi.com/gabekrahulik" },
    { name: "discord",  link: "https://discord.com/users/378319931005206530" },
    { name: "twitter",  link: "https://twitter.com/gabekrahulik" },
];

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
                    <span className = "text-3xl text-white p-4 block text-center">
                        <h1 className = "gradient-name font-bold text-6xl">404</h1>
                        <h2 className = "text-4xl">That page does not exist</h2>
                    </span>
                    <div className="w-auto h-auto">
                        <Button link="/#projects" type="outline" glow>View my Projects</Button>
                    </div>
                </div>
            </section>

            <section data-m="drop" id="contact" className = "py-24 px-4 text-center">
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
