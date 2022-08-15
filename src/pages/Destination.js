import styles from "../styles/destination.module.css";
import json from "../data/data.json";
import { useState } from "react";
import { destinationImages } from "../utilities/images";

export default function Destination() {
	const [currentId, setCurrentId] = useState(0);
	const { destinations } = json;
	return (
		<div className={styles.main}>
			<div className={styles.destinationHeading}>
				<h5>
					<span>01</span> PICK YOUR DESTINATION
				</h5>
			</div>
			<div className={styles.destinationWrapper}>
				<div className={styles.imageWrapper}>
					<img
						src={destinationImages[`${destinations[currentId].name}`]}
						className={styles.image}
						alt="destination location"
					/>
				</div>
				<div className={styles.destinationInfo}>
					<div className={styles.destinationButtons}>
						{destinations.map((e, i) => {
							return (
								<button
									key={i}
									onClick={() => {
										setCurrentId(i);
									}}
									className={i === currentId ? styles.activeDestination : ""}
								>
									{e.name}
								</button>
							);
						})}
					</div>
					<div className={styles.destinationText}>
						<h2>{destinations[currentId].name.toUpperCase()}</h2>
						<p>{destinations[currentId].description}</p>
					</div>
					<div className={styles.line}></div>
					<div className={styles.destinationStats}>
						<div className={styles.distance}>
							<span>AVG. DISTANCE</span>
							<h5>{destinations[currentId].distance.toUpperCase()}</h5>
						</div>
						<div className={styles.time}>
							<span>EST. TRAVEL TIME</span>
							<h5>{destinations[currentId].travel.toUpperCase()}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
