import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.heroText}>
				<div className={styles.heroTitle}>
					<h5>SO, YOU WANT TO TRAVEL TO</h5>
				</div>
				<div className={styles.heroHeading}>
					<h1>SPACE</h1>
				</div>
				<div className={styles.heroBody}>
					<p>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
			</div>
			<div className={styles.heroButton}>
					<Link to="">
						<span>EXPLORE</span>
					</Link>
			</div>
		</div>
	);
}
