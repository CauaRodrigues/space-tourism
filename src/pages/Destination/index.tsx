import React from "react";
import { ContainerDestination } from "./page.styled";
import Moon from "../../assets/destination/image-moon.webp";

const Destination: React.FC = () => {
	return (
		<ContainerDestination>
			<h5>
				<span className="stage">01</span> Pick your destination
			</h5>

			<section className="content">
				<figure>
					<img src={Moon} alt="Destination: Moon" />
				</figure>

				<div>
					<nav>
						<ul>
							<li className="nav-text">Moon</li>
							<li className="nav-text">Mars</li>
							<li className="nav-text">Europa</li>
							<li className="nav-text">Titan</li>
						</ul>
					</nav>

					<h2>Moon</h2>

					<p>
						See our planet as you’ve never seen it before. A perfect relaxing
						trip away to help regain perspective and come back refreshed. While
						you’re there, take in some history by visiting the Luna 2 and Apollo
						11 landing sites.
					</p>

					<span className="line--divider"></span>

					<div className="group__additional-info">
						<div className="info">
							<span className="sub--2">AVG. DISTANCE</span>
							<span className="sub--1">384,400 km</span>
						</div>

						<div className="info">
							<span className="sub--2">Est. travel time</span>
							<span className="sub--1">3 days</span>
						</div>
					</div>
				</div>
			</section>
		</ContainerDestination>
	);
};

export default Destination;
