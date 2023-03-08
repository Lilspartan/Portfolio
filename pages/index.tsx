import { Button, Card } from '../components';

import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { SiTailwindcss, SiGmail, SiKofi, SiReplit, SiDiscord } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb';
import { useState } from 'react';

import classNames from 'classnames';

const contacts = [
	{ name: "github", link: "https://github.com/Lilspartan" },
	{ name: "gmail", link: "mailto:gabe@gabekrahulik.dev" },
	{ name: "kofi", link: "https://ko-fi.com/gabekrahulik" },
	{ name: "linkedin", link: "https://www.linkedin.com/in/gabe-krahulik/" },
	{ name: "twitter", link: "https://twitter.com/gabekrahulik" },
	{ name: "replit", link: "https://replit.com/@GabeKrahulik" },
	{ name: "discord", link: "https://discord.com/users/378319931005206530" },
]

const ContactIcon = ({ contact, index }) => {
	const classes = classNames([
		"mx-3",
		"transition",
		"duration-300",
		"mt-12",
		"lg:mt-8",
		"text-4xl",
		contact.name,
		"group-hover:-translate-y-1",
		"group-hover:scale-110",
	]);

	let Icon = <></>;

	switch (contact.name) {
		case "twitter": Icon = <AiOutlineTwitter className = {classes} />; break;
		case "linkedin": Icon = <AiFillLinkedin className = {classes} />; break;
		case "github": Icon = <AiFillGithub className = {classes} />; break;
		case "discord": Icon = <SiDiscord className = {classes} />; break;
		case "replit": Icon = <SiReplit className = {classes} />; break;
		case "gmail": Icon = <SiGmail className = {classes} />; break;
		case "kofi": Icon = <SiKofi className = {classes} />; break;
	}

	return (
		<a className = {`group social ${contact.name}`} data-m-delay={String((Math.abs(Math.ceil(index - (contacts.length / 2)))) * 0.25 + 0.75)} data-m={index < Math.floor(contacts.length / 2) ? "bounce-left" : index > Math.floor(contacts.length / 2) ? "bounce-right" : "bounce-down"} data-m-duration = "0.75" href={contact.link} target="_new">
			{ Icon }
		</a>
	)
}

const Landing = () => {
	const [age, setAge] = useState(calculateAge(1094760000000).toString());

	function calculateAge(date: number) {
		var ageDifMs = Date.now() - date;
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	return (
		<div className="
			bg-background
			h-full
		">
			<div className="grid place-items-center h-screen text-center">
				<div data-m="drop" data-m-delay="0.5">
					<Card>
						<span data-m="reveal-right" data-m-duration="1" data-m-delay="1" className="text-3xl text-white p-4 block text-center">My Name is <span className="text-accent opacity-90 font-bold">Gabe Krahulik</span></span>
						{/* <img data-m="reveal-down" data-m-duration="0.5" data-m-delay="1.5" src = "/logo.png" className = "w-24 rounded-lg mx-auto mt-2" /> */}
						<span data-m="reveal-right" data-m-duration="1.5" data-m-delay="1.5" className="text-2xl block text-white p-4 text-center"> a{age === "18" ? "n" : ""} <span className = "text-accent font-bold">{ age }</span> year old web developer from <span className = "text-accent font-bold">Seattle</span></span>

						<div className="p-4 mt-2 flex flex-row justify-center" data-m="bounce-up" data-m-delay="2.5" data-m-duration="1">
							<div className = "w-full lg:w-1/2">
								<Button link="/projects" type="outline" glow>View my Projects</Button>
							</div>
						</div>

						<div className="text-white flex flex-row flex-wrap lg:flex-nowrap justify-center gap-1 lg:gap-4 mx-2 lg:mx-8">
							{ contacts.map((contact, i) => (
								<ContactIcon contact = { contact } index = { i } />
							)) }
						</div>
					</Card>
				</div>
				<span data-m = "bounce-up" data-m-duration = "0.5" className="absolute bottom-0 m-6 w-auto text-white text-xl font-semibold">Made with <a href="https://nextjs.org/" target="_new"><TbBrandNextjs className="inline text-accent" /></a> and <a href="https://tailwindcss.com/" target="_new"><SiTailwindcss className="inline text-accent" /></a></span>
			</div>
		</div>
	)
}

export default Landing
