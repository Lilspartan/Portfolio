import { Card, CardHeading } from "../../Components/Card"
import NavBar from '../../Components/NavBar';
import { Button, ButtonContainer } from '../../Components/Button';

const Landing = () => {
	return (
		<div className="bg-background h-full">
			<NavBar />

			<div className="grid place-items-center h-screen">
				<Card>
					<div className="">
						<div className="flex flex-row flex-wrap"> 
							<img src="../img/GabirMotorsScreenshot01.png" alt="Gabir Motors Site" className="w-1/3 rounded-lg mx-auto p-2" style={{ minWidth: "200px" }}/>
							<img src="../img/GabirMotorsScreenshot02.png" alt="Gabir Motors Site" className="w-1/3 rounded-lg mx-auto p-2" style={{ minWidth: "200px" }}/>
						</div>
						<br />
						<ButtonContainer>
							<span className="text-4xl text-white font-extrabold text-center p-1 mr-6">Gabir Motors</span>
							<Button link="https://github.com/Lilspartan/GabirReactFrontend" target="new" type="outline">View on Github</Button>
							<Button link="https://gabirmotors.com" target="new" type="outline">Visit Website</Button>
						</ButtonContainer>
					</div>
					<br />
					<h2 className="text-2xl font-bold text-white">What is this?</h2>
					<p>
						Gabir Motors is the world's premiere, pretend Motorsports Company. It all started in March of 2020, right after the pandemic started, when my own father got into <a href="https://www.iracing.com/" className="text-accent">iRacing</a>. As a racer, he needed a team to drive for, and so in the universe he had created he raced for <strong>"Gabir Motorsports"</strong>. A while into hos simracing journey he started the <a href="https://discord.gabirmotors.com" className="text-accent">PA Racing League</a>, and that's what this site was built for, it contains many useful tools, not only for members of the league, but for any drivers.
					</p>
					<br />
					<Button link="/projects" type="outline">Go Back</Button>
				</Card>
			</div>
		</div>
	)
}

export default Landing
