import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type TeamContainerProps = {
	children: React.ReactNode;
};

export default function TeamContainer({ children }: TeamContainerProps) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<div data-aos='fade-up' className='team-container' id='team'>
			{children}
		</div>
	);
}
