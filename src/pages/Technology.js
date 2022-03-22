import styles from "../styles/technology.module.css";
import json from "../data/data.json";
import { technologyImages } from "../utilities/images";
import { useState, useEffect } from "react";
import useWindowWidth from "../utilities/isDesktop";

export default function Technology() {
	const [currentId, setCurrentId] = useState(0);
	const [imagePath, setImagePath] = useState();
	const isDesktop = useWindowWidth();
	const { technology } = json;

	useEffect(() => {
		setImagePath(
			`${technology[currentId].name.split(" ")[0].toLowerCase()}${
				isDesktop ? "Desktop" : ""
			}`
		);
	}, [isDesktop, currentId, technology]);

	return (
		<div className={styles.main}>
			<div className={styles.techHeading}>
				<h5>
					<span>03</span> SPACE LAUNCH 101
				</h5>
			</div>
			<div className={styles.techWrapper}>
				<div className={styles.techImageWrapper}>
					<img
						className={styles.techImage}
						src={technologyImages[imagePath]}
						alt={technology.name}
					/>
				</div>
				<div className={styles.techInfo}>
					<div className={styles.selectionBubble}>
						{technology.map((e, i) => {
							return (
								<button
									key={i}
									className={i === currentId ? styles.activeBubble : ""}
									onClick={() => {
										setCurrentId(i);
									}}
								>
									{i + 1}
								</button>
							);
						})}
						<div></div>
					</div>
					<div className={styles.techinfoText}>
						<div className={styles.techInfoTitle}>
							<span>THE TERMINOLOGY ...</span>
						</div>
						<div className={styles.techInfoName}>
							<h3>{technology[currentId].name.toUpperCase()}</h3>
						</div>
						<div className={styles.techInfoDescription}>
							<p>{technology[currentId].description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
