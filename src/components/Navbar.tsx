import { Link } from "react-scroll";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Navbar() {
	const { height, width } = useWindowDimensions();

	// 0.15 height for wider screens, 0.1 for narrower
	const offset = width / height > 4 / 3 ? -0.15 * height : -0.1 * height;

	return (
		<div className='nav-container'>
			<h1>Football Data</h1>
			<ul className='links-container'>
				<Link
					to='home'
					spy={true}
					smooth={true}
					duration={500}
					className='nav-item'
					activeClass='is-active'
					offset={offset}
				>
					HOME
				</Link>
				<Link
					to='team'
					duration={500}
					spy={true}
					smooth={true}
					offset={offset}
					activeClass='is-active'
				>
					TEAM
				</Link>
				<Link
					to='stats'
					duration={500}
					spy={true}
					smooth={true}
					offset={offset}
					activeClass='is-active'
				>
					STATS
				</Link>
			</ul>
		</div>
	);
}
