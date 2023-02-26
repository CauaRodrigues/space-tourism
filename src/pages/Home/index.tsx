import React from "react";
import { ButtonExplore, ContainerHome } from "./home.styled";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<ContainerHome>
			<section className="hero">
				<h5>SO, YOU WANT TO TRAVEL TO</h5>

				<h1>SPACE</h1>

				<p>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</section>

			<section className="container-button">
				<Link to="/destination">
					<ButtonExplore>Explore</ButtonExplore>
				</Link>
			</section>
		</ContainerHome>
	);
};

export default Home;
