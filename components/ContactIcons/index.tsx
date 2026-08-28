import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail, SiKofi, SiReplit, SiDiscord, SiBluesky, SiModrinth } from 'react-icons/si';
import classNames from 'classnames';

export const contacts = [
    { name: "gmail",    link: "mailto:gabe@gabekrahulik.dev" },
    { name: "linkedin", link: "https://www.linkedin.com/in/gabe-krahulik/" },
    { name: "github",   link: "https://github.com/Lilspartan" },
    { name: "bluesky",  link: "https://bsky.app/profile/gabekrahulik.dev" },
    { name: "kofi",     link: "https://ko-fi.com/gabekrahulik" },
    { name: "discord",  link: "https://discord.com/users/378319931005206530" },
    { name: "twitter",  link: "https://twitter.com/gabekrahulik" },
    { name: "modrinth", link: "https://modrinth.com/user/Lilspartan" },
];

type Contact = typeof contacts[number];

const ContactIcon = ({ contact, index }: { contact: Contact; index: number }) => {
    const classes = classNames([
        "mx-3", "transition", "duration-300", "mt-12", "lg:mt-8", "text-4xl",
        contact.name, "group-hover:-translate-y-3", "group-hover:scale-125",
    ]);

    let Icon = <></>;
    switch (contact.name) {
        case "twitter":  Icon = <AiOutlineTwitter className={classes} />; break;
        case "linkedin": Icon = <AiFillLinkedin className={classes} />;   break;
        case "github":   Icon = <AiFillGithub className={classes} />;     break;
        case "modrinth": Icon = <SiModrinth className={classes} />;       break;
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

type ContactIconsProps = {
    className?: string;
    keyPrefix?: string;
};

const ContactIcons = ({ className, keyPrefix = "" }: ContactIconsProps) => (
    <div className={className}>
        {contacts.map((contact, i) => (
            <ContactIcon key={keyPrefix + contact.name} contact={contact} index={i} />
        ))}
    </div>
);

export default ContactIcons;
