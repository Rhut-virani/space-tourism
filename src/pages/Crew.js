import { useState } from "react";
import styles from "../styles/crew.module.css";
import { crewImages } from "../utilities/images";
import json from "../data/data.json";

export default function Crew() {
	const [currentId, setCurrentId] = useState(0);
	const { crew } = json;
	const lastName = crew[currentId].name.split(" ")[1];
	return (
		<div className={styles.main}>
			<div className={styles.crewHeading}>
				<h5>
					<span>02</span> MEET YOUR CREW
				</h5>
			</div>
			<div className={styles.crewWrapper}>
				<div className={styles.imageWrapper}>
					<img
						className={styles.crewImage}
						src={crewImages[lastName]}
						alt={crew[currentId].name}
					/>
				</div>
				<div className={styles.crewInfo}>
					<div className={styles.selectionDots}>
						{crew.map((e, i) => {
							return (
								<button
									key={i}
									className={i === currentId ? styles.activeBubble : ""}
									onClick={() => {
										setCurrentId(i);
									}}
								></button>
							);
						})}
					</div>
					<div className={styles.crewinfoText}>
						<h4>{crew[currentId].role.toUpperCase()}</h4>
						<h3>{crew[currentId].name.toUpperCase()}</h3>
						<p>{crew[currentId].bio}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
