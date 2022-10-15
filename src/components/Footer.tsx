import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	return (
		<footer>
			<p>Useful Links</p>
			<div className='icons'>
				<a href='https://github.com/alexk1923'>
					<FaGithub />
				</a>
				<a href='https://www.linkedin.com/in/alexandru-kullman/'>
					<FaLinkedin />
				</a>
				<a href='mailto:alexandrukullman@gmail.com'>
					<FaEnvelope />
				</a>
			</div>
			© {new Date().getFullYear()} Alex Kullman
		</footer>
	);
}
