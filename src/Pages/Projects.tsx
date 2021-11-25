import { Card, CardHeading} from "../Components/Card"
import NavBar from '../Components/NavBar';
import {ReactComponent as Logo} from '../logo.svg';
import { Button, ButtonContainer } from '../Components/Button';

const Landing = () => {
    return (
			<div className="bg-background">
				<NavBar />

				<div className="flex flex-row h-screen justify-center flex-wrap mt-24 lg:mt-2">
					<Card>
						<img src="./with_text.png" className="w-96 mx-auto" />
						<CardHeading>Gabir Motors</CardHeading>
						<p className="mt-8">
							The world's premiere, pretend Motorsports Company.
						</p>
						<br />
						<ButtonContainer>
							<Button link="https://github.com/Lilspartan/GabirReactFrontend" target="new" type="outline">View on Github</Button>
							<Button link="https://gabirmotors.com" target="new" type="outline">Visit Website</Button>
							<Button link="/projects/gabirmotors" type="outline">More Info</Button>
						</ButtonContainer>
					</Card>

					<Card>
						<Logo className="w-96 mx-auto" />
						<br />
						<CardHeading>Portfolio</CardHeading>
						<p className="mt-8">
							This website, my portfolio with links to my projects and info about me
						</p>
						<br />
						<ButtonContainer>
							<Button link="/" target="new" type="outline">Visit Website</Button>
						</ButtonContainer>
					</Card>
				</div>
			</div>
    )
}

export default Landing
