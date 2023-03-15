import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "./data";
import { Styleds as S } from "./page.styled";
import { sizes } from "../../styles/sizes";
import { TechTypes } from "../../@types/tabs";

const Technology: React.FC = () => {
	const { techNameUrl } = useParams();
	const navigate = useNavigate();
	const [LaunchVehicle, Spaceport, SpaceCapsule] = data;

	const [tech, setTech] = useState<TechTypes>(() => {
		switch (techNameUrl?.toLowerCase()) {
			case "spaceport":
				return Spaceport;
			case "space-capsule":
				return SpaceCapsule;
			default:
				return LaunchVehicle;
		}
	});

	const handlerTech = (tech: TechTypes) => {
		if (tech) {
			setTech(tech);
			navigate(`/technology/${tech.nameId}`);
		}
	};

	return (
		<S.ContainerTechnology>
			<h5>
				<span className="stage">03</span>SPACE LAUNCH 101
			</h5>

			<section className="container--content">
				<div className="content">
					<S.TabsNumbered>
						<S.TabNumbered
							active={tech.nameId === "launch-vehicle"}
							onClick={() => handlerTech(LaunchVehicle)}
						>
							1
						</S.TabNumbered>
						<S.TabNumbered
							active={tech.nameId === "spaceport"}
							onClick={() => handlerTech(Spaceport)}
						>
							2
						</S.TabNumbered>
						<S.TabNumbered
							active={tech.nameId === "space-capsule"}
							onClick={() => handlerTech(SpaceCapsule)}
						>
							3
						</S.TabNumbered>
					</S.TabsNumbered>

					<div className="info">
						<span className="nav-text">THE TERMINOLOGY…</span>

						<h3>{tech.name}</h3>

						<p>{tech.description}</p>
					</div>

					<S.Image>
						<source
							srcSet={tech.imagesUrl.landscape}
							media={`(max-width: ${sizes.tablet}px)`}
						/>
						<img src={tech.imagesUrl.portrait} alt={tech.name} />
					</S.Image>
				</div>
			</section>
		</S.ContainerTechnology>
	);
};

export default Technology;
