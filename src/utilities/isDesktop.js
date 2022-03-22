import { useState, useEffect } from "react";

export default function useWindowWidth() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1008);

	useEffect(() => {
		const handleWidthChange = () => {
			const { innerWidth: width } = window;
			setIsDesktop(width > 1008);
		};

		window.addEventListener("resize", handleWidthChange);

		return () => window.removeEventListener("resize", handleWidthChange);
	}, []);

	return isDesktop;
}
