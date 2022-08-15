import styles from "../styles/test.module.css";
import json from "../data/data.json";
import { images } from "../utilities/images";
import { useState, useEffect } from "react";
import useWindowWidth from "../utilities/isDesktop";

export default function Test({ dataName = "technology" }) {
	const [currentId, setCurrentId] = useState(0);
	const [imagePath, setImagePath] = useState();
	const isDesktop = useWindowWidth();
	const data = json[dataName];
	const testImages = images[dataName];
	useEffect(() => {
		setImagePath(
			`${data[currentId].name.split(" ")[0].toLowerCase()}${
				isDesktop ? "Desktop" : ""
			}`
		);
	}, [isDesktop, currentId, data]);

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
						src={testImages[imagePath]}
						alt={data.name}
					/>
				</div>
				<div className={styles.techInfo}>
					<div className={styles.selectionBubble}>
						{data.map((e, i) => {
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
							<h3>{data[currentId].name.toUpperCase()}</h3>
						</div>
						<div className={styles.techInfoDescription}>
							<p>{data[currentId].description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
