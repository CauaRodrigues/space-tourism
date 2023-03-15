import React, { useEffect, useState } from "react";
import { data } from "./data";
import { ContainerCrew, Tab, TabsCircle } from "./page.styled";
import { CrewTypes } from "../../@types/tabs";
import { useNavigate, useParams } from "react-router-dom";
import changePageTitle from "../../utils/changePageTitle";

const Crew: React.FC = () => {
	const { person } = useParams();
	const navigate = useNavigate();
	const [Commander, Specialist, Pilot, Engineer] = data;

	const [crew, setCrew] = useState<CrewTypes>(() => {
		switch (person?.toLowerCase()) {
			case "specialist":
				return Specialist;
			case "pilot":
				return Pilot;
			case "engineer":
				return Engineer;
			default:
				return Commander;
		}
	});

	const handlerPerson = (person: CrewTypes) => {
		if (person) {
			setCrew(person);
			navigate(`/crew/${person.nameID.toLowerCase()}`);
		}
	};

	useEffect(() => {
		changePageTitle("Crew");
	}, []);

	return (
		<ContainerCrew>
			<h5>
				<span className="stage">02</span>
				Meet your crew
			</h5>

			<section className="content">
				<div className="content--info">
					<div className="description">
						<h4>{crew.role}</h4>

						<h3>{crew.name}</h3>

						<p>{crew.bio}</p>
					</div>

					<TabsCircle>
						<ul>
							<Tab
								active={crew.nameID === "commander"}
								onClick={() => {
									handlerPerson(Commander);
								}}
							/>
							<Tab
								active={crew.nameID === "specialist"}
								onClick={() => {
									handlerPerson(Specialist);
								}}
							/>
							<Tab
								active={crew.nameID === "pilot"}
								onClick={() => {
									handlerPerson(Pilot);
								}}
							/>
							<Tab
								active={crew.nameID === "engineer"}
								onClick={() => {
									handlerPerson(Engineer);
								}}
							/>
						</ul>
					</TabsCircle>
				</div>

				<figure>
					<img src={crew.imageUrl} alt={`person: ${crew.name}`} />
				</figure>
			</section>
		</ContainerCrew>
	);
};

export default Crew;
