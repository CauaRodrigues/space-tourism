import React from "react";
import { data } from "./data";
import { Styleds as S } from "./page.styled";
import { sizes } from "../../styles/sizes";

const Technology: React.FC = () => {
	const sla = data[0];

	return (
		<S.ContainerTechnology>
			<h5>
				<span className="stage">03</span>SPACE LAUNCH 101
			</h5>

			<section className="container--content">
				<div className="content">
					<S.TabsNumbered>
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</S.TabsNumbered>

					<div className="info">
						<span className="nav-text">THE TERMINOLOGY…</span>

						<h3>LAUNCH VEHICLE</h3>

						<p>
							A launch vehicle or carrier rocket is a rocket-propelled vehicle
							used to carry a payload from Earth's surface to space, usually to
							Earth orbit or beyond. Our WEB-X carrier rocket is the most
							powerful in operation. Standing 150 metres tall, it's quite an
							awe-inspiring sight on the launch pad!
						</p>
					</div>

					<S.Image>
						<source
							srcSet={sla.imagesUrl.landscape}
							media={`(max-width: ${sizes.tablet}px)`}
						/>
						<img src={sla.imagesUrl.portrait} alt={sla.name} />
					</S.Image>
				</div>
			</section>
		</S.ContainerTechnology>
	);
};

export default Technology;
