import { Button, ButtonContainer, Card } from '../components';

import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiTailwindcss, SiGmail, SiKofi } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb';

const Landing = () => {
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
						<span data-m="reveal-right" data-m-duration="1.5" data-m-delay="2" className="text-2xl mt-6 block text-white p-4 text-center"> a{calculateAge(1094760000000).toString().split('').includes("8") ? "n" : ""} <span className = "text-accent font-bold">{calculateAge(1094760000000)}</span> year old web developer from <span className = "text-accent font-bold">Seattle</span></span>

						<div className="p-4 mt-2 flex flex-row justify-center" data-m="bounce-up" data-m-delay="2.75" data-m-duration="1">
							<div className = "w-full lg:w-1/2">
								<Button link="/projects" type="outline" glow>View my Projects</Button>
							</div>
						</div>

						<div className="text-white flex flex-row justify-center">
							<a data-m-delay="0.75" data-m="bounce-left" data-m-duration = "0.75" href="https://github.com/Lilspartan" target="_new"><AiFillGithub className="transition duration-300 mx-2 mt-8 text-4xl hover:text-github" /></a>
							<a data-m-delay="0.75" data-m="bounce-right" data-m-duration = "0.75" href="mailto:gabe@gabekrahulik.dev" target="_new"><SiGmail className="transition duration-300 mx-2 mt-8 text-4xl hover:text-gmail" /></a>
							<a data-m-delay="0.75" data-m="bounce-left" data-m-duration = "0.75" href="https://ko-fi.com/gabekrahulik" target="_new"><SiKofi className="transition duration-300 ml-2 mt-8 text-4xl hover:text-kofi" /></a>
							<a data-m-delay="0.75" data-m="bounce-right" data-m-duration = "0.75" href="https://twitter.com/gabekrahulik" target="_new"><AiOutlineTwitter className="transition duration-300 mx-2 mt-8 text-4xl hover:text-twitter" /></a>
						</div>
					</Card>
				</div>
				<span data-m = "bounce-up" data-m-duration = "0.5" className="absolute bottom-0 m-6 w-auto text-white text-xl font-semibold">Made with <a href="https://nextjs.org/" target="_new"><TbBrandNextjs className="inline text-accent" /></a> and <a href="https://tailwindcss.com/" target="_new"><SiTailwindcss className="inline text-accent" /></a></span>
			</div>
		</div>
	)
}

export default Landing
