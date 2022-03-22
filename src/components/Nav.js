import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { logoImages } from "../utilities/images";
import styles from "../styles/nav.module.css";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className={styles.nav}>
			{" "}
			<Link to="/">
				<img className={styles.logo} src={logoImages.logo} alt="logo" />
			</Link>
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
					<NavLink
						to="/"
						className={({ isActive }) =>
							`${styles.navLink}  ${isActive ? styles.activeBorder : ""}`
						}
					>
						<span>00</span> HOME
					</NavLink>
					<NavLink
						to="destination"
						className={({ isActive }) =>
							`${styles.navLink}  ${isActive ? styles.activeBorder : ""}`
						}
					>
						<span>01</span> DESTINATION{" "}
					</NavLink>
					<NavLink
						to="crew"
						className={({ isActive }) =>
							`${styles.navLink}  ${isActive ? styles.activeBorder : ""}`
						}
					>
						<span>02</span> CREW{" "}
					</NavLink>
					<NavLink
						to="technology"
						className={({ isActive }) =>
							`${styles.navLink}  ${isActive ? styles.activeBorder : ""}`
						}
					>
						<span>03</span> TECHNOLOGY{" "}
					</NavLink>
				</div>
			</div>
		</nav>
	);
}
