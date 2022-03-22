import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Layout from "./components/Layout";
import styles from "./styles/app.module.css";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="destination" element={<Destination />} />
					<Route path="crew" element={<Crew />} />
					<Route path="technology" element={<Technology />} />
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
