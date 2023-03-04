import React, { useEffect, useState } from "react";
import { Outlet, useMatches } from "react-router-dom";

import { Header } from "../Header";
import { ContainerMain } from "./layout.styled";

import bgHome from "../../assets/home/background-home-desktop.jpg";
import bgCrew from "../../assets/crew/background-crew-desktop.png";
import bgDestination from "../../assets/destination/background-destination-desktop.png";
import bgTechnology from "../../assets/technology/background-technology-desktop.png";

export const Layout: React.FC = () => {
	const [, { pathname }] = useMatches();
	const [image, setImage] = useState<string>(bgHome);

	useEffect(() => {
		const verifyRoute = () => {
			switch (pathname.split("/", 2)[1]) {
				case "":
					setImage(bgHome);
					break;
				case "destination":
					setImage(bgDestination);
					break;
				case "crew":
					setImage(bgCrew);
					break;
				case "technology":
					setImage(bgTechnology);
					break;
			}
		};

		verifyRoute();
	}, [pathname]);

	return (
		<ContainerMain image={`${image}`}>
			<Header />

			<Outlet />
		</ContainerMain>
	);
};
