import React from "react";
import { data } from "./data";
import { ContainerCrew, Tab, TabsCircle } from "./page.styled";

const Crew: React.FC = () => {
	return (
		<ContainerCrew>
			<h5>
				<span className="stage">02</span>
				Meet your crew
			</h5>

			<section className="content">
				<div className="content--info">
					<div className="description">
						<h4>Commander</h4>

						<h3>Douglas Hurley</h3>

						<p>
							Douglas Gerald Hurley is an American engineer, former Marine Corps
							pilot and former NASA astronaut. He launched into space for the
							third time as commander of Crew Dragon Demo-2.
						</p>
					</div>

					<TabsCircle>
						<ul>
							<Tab active={true} />
							<Tab active={false} />
							<Tab active={false} />
							<Tab active={false} />
						</ul>
					</TabsCircle>
				</div>

				<figure>
					<img src={data[0].imageUrl} alt={`crew: ${data[0].name}`} />
				</figure>
			</section>
		</ContainerCrew>
	);
};

export default Crew;
