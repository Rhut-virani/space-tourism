import { NavLink } from "react-router-dom";
import { useState } from "react";
import { logoImages } from "../utilities/images";
import styles from "../styles/nav.module.css";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const pages = ["/", "destination", "crew", "technology", "Test"];

	return (
		<nav className={styles.nav}>
			{" "}
			<NavLink to="/">
				<img className={styles.logo} src={logoImages.logo} alt="logo" />
			</NavLink>
			<div className={styles.navLine}></div>
			<img
				src={isOpen ? logoImages.close : logoImages.hamburger}
				onClick={() => {
					setIsOpen((prev) => !prev);
				}}
				className={`${isOpen ? styles.close : styles.hamburger} ${
					styles.navIcon
				}`}
				alt={isOpen ? "close Navigation menu" : "Navigation menu button"}
			/>
			<div
				className={`${styles.navLinkOverlay} ${isOpen ? styles.showNav : ""} `}
			>
				<div className={styles.navLinkWrapper}>
					{pages.map((page, i) => {
						return (
							<NavLink
								to={page}
								key={i}
								onClick={() => {
									setIsOpen((prev) => !prev);
								}}
								className={({ isActive }) =>
									`${styles.navLink}  ${isActive ? styles.activeBorder : ""}`
								}
							>
								<span>0{i} </span>
								{page === "/" ? `HOME` : page.toUpperCase()}
							</NavLink>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
