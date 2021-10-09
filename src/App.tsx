import "./App.css";

import { Caroumesh, Model } from "caroumesh";

function App() {
	return (
		<div className="Container">
			<h1>Caroumesh - Example</h1>

			<Caroumesh
				shadows
				theme={"dodgerblue"}
				width={"75vw"}
				height={"75vh"}
				border={"2px solid gold"}
				borderRadius={"2em"}
			>
				<Model src="assets/Star destroyer.glb" scale={0.1} shadows />
				<Model src="assets/TIE fighter.glb" scale={5} shadows />
			</Caroumesh>

			<div className="Info">
				<a
					className="Link"
					href="https://github.com/Adonis-Stavridis/caroumesh-example"
					target="_blank"
					rel="noreferrer"
				>
					Example repo
				</a>
				<a
					className="Link NPM"
					href="https://www.npmjs.com/package/caroumesh"
					target="_blank"
					rel="noreferrer"
				>
					NPM package
				</a>
			</div>

			<p>
				Made by{" "}
				<a
					className="Contact"
					href="https://github.com/Adonis-Stavridis"
					target="_blank"
					rel="noreferrer"
				>
					Adonis Stavridis
				</a>
				.
			</p>
		</div>
	);
}

export default App;
