// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Link } from "react-scroll";
import "aos/dist/aos.css";
import player from "../img/player.png";
import Typewriter from "typewriter-effect";

import useWindowDimensions from "../hooks/useWindowDimensions";

export default function LandingPage() {
	const { height, width } = useWindowDimensions();

	// 0.15 height for wider screens, 0.1 for narrower
	const offset = width / height > 4 / 3 ? -0.15 * height : -0.1 * height;

	return (
		<div id='home' className='landing-container'>
			<div className='typewriter-item'>
				<Typewriter
					options={{
						strings: [
							"Get data about your favorite team",
							"Select a country, then search for your team",
						],
						autoStart: true,
						loop: true,
						delay: 75,
					}}
				/>
				<Link to='team' duration={500} spy={true} smooth={true} offset={offset}>
					<button>SELECT TEAM</button>
				</Link>
			</div>
			<div data-aos='zoom-in' className='illustration-item'>
				<img src={player} alt='football player' />
			</div>
		</div>
	);
}
