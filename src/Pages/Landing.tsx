import { Card, CardHeading } from "../Components/Card"
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Button, ButtonContainer } from '../Components/Button';

import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'

const Landing = () => {
	function calculateAge(date: number) {
		var ageDifMs = Date.now() - date;
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	return (
		<div className="bg-background h-full">
			<NavBar />

			<div className="grid place-items-center h-screen text-center">
				<Card>
					<span className="text-3xl text-white p-4 font-extrabold text-center">My Name is <span className="text-accent opacity-90">Gabe Krahulik</span></span>

					<br />

					<div className="p-4 mt-4">
						<Button link="/projects" type="outline">View my Projects</Button>
					</div>

					<div className="text-white flex flex-row justify-center">
						<a href="https://github.com/Lilspartan" target="_new"><AiFillGithub className="transition duration-300 mx-2 mt-8 text-4xl hover:text-github"/></a>
						<a href="https://twitter.com/gabekrahulik" target="_new"><AiOutlineTwitter className="transition duration-300 mx-2 mt-8 text-4xl hover:text-twitter"/></a>
					</div>
				</Card>
				<span className="absolute bottom-0 m-6 w-auto text-white text-xl font-semibold">Made with <a href="https://reactjs.org/" target="_new"><DiReact className="inline text-accent" /></a> and <a href="https://tailwindcss.com/" target="_new"><SiTailwindcss className="inline text-accent" /></a></span>
			</div>
		</div>
	)
}

export default Landing
