import React, { useEffect, useState } from "react";
import { DestinyTypes } from "../../@types/tabs";
import { data } from "./data";
import { useNavigate, useParams } from "react-router-dom";

import { ContainerDestination, Tab, Tabs, AdditionalInfo } from "./page.styled";
import changePageTitle from "../../utils/changePageTitle";

const Destination: React.FC = () => {
	const { destiny } = useParams();
	const navigate = useNavigate();
	const [Moon, Mars, Europa, Titan] = data;

	const [destination, setDestination] = useState<DestinyTypes>(() => {
		switch (destiny?.toLowerCase()) {
			case "mars":
				return Mars;
			case "europa":
				return Europa;
			case "titan":
				return Titan;
			default:
				return Moon;
		}
	});

	const handlerDestination = (destiny: DestinyTypes) => {
		if (destiny) {
			setDestination(destiny);
			navigate(`/destination/${destiny.name.toLowerCase()}`);
		}
	};

	useEffect(() => {
		changePageTitle("Destination");
	}, []);

	return (
		<ContainerDestination>
			<h5>
				<span className="stage">01</span>Pick your destination
			</h5>

			<section className="content">
				<figure>
					<img
						src={destination.imageUrl}
						alt={`Destination: ${destination.name}`}
					/>
				</figure>

				<div className="content--info">
					<Tabs>
						<ul>
							<Tab
								className="nav-text"
								active={destination.name === Moon.name}
								onClick={() => handlerDestination(Moon)}
							>
								Moon
							</Tab>
							<Tab
								className="nav-text"
								active={destination.name === Mars.name}
								onClick={() => handlerDestination(Mars)}
							>
								Mars
							</Tab>
							<Tab
								className="nav-text"
								active={destination.name === Europa.name}
								onClick={() => handlerDestination(Europa)}
							>
								Europa
							</Tab>
							<Tab
								className="nav-text"
								active={destination.name === Titan.name}
								onClick={() => handlerDestination(Titan)}
							>
								Titan
							</Tab>
						</ul>
					</Tabs>

					<div>
						<h2>{destination.name}</h2>

						<p>{destination.description}</p>
					</div>

					<span className="line--divider"></span>

					<AdditionalInfo>
						<div className="info">
							<span className="sub--2">AVG. DISTANCE</span>
							<span className="sub--1">{destination.distance}</span>
						</div>

						<div className="info">
							<span className="sub--2">Est. travel time</span>
							<span className="sub--1">{destination.travel}</span>
						</div>
					</AdditionalInfo>
				</div>
			</section>
		</ContainerDestination>
	);
};

export default Destination;
