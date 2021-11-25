import {ReactComponent as Logo} from '../logo.svg';
import { Link } from 'react-router-dom';
import {useState} from 'react'

const NavBar = () => {
	const [hidden, setHidden] = useState(true);

	return (
		<div className="absolute w-screen">
			<nav className="bg-background">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-7">
							<div>
								<Link to="/" className="flex items-center py-4 px-2">
									<Logo className="h-16 mr-1"/>
								</Link>
							</div>
							<div className="hidden md:flex items-center space-x-1">
								<Link to="/projects" className="rounded-lg hover:bg-primary py-2 px-6 text-white font-semibold hover:text-accent transition duration-300">Projects</Link>
								<Link to="#" className="rounded-lg hover:bg-primary py-2 px-6 text-white font-semibold hover:text-accent transition duration-300">About</Link>
							</div>
						</div>
						<div className="md:hidden flex items-center">
							<button className="outline-none mobile-menu-button mr-6" onClick = {() => { setHidden(!hidden) }}>
							<svg className=" w-6 h-6 text-gray-500 hover:text-accent "
								x-show="!showMenu"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
						</div>
					</div>
				</div>
				<div className={`${hidden ? "hidden" : ""} mobile-menu w-screen rounded-b-3xl`}>
					<ul className="text-white">
						<li><Link to="/projects" className="block text-sm px-2 py-4 mx-8 hover:bg-accent transition duration-300">Projects</Link></li>
						<li><Link to="#" className="block text-sm px-2 py-4 mx-8 hover:bg-accent transition duration-300">About</Link></li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default NavBar;