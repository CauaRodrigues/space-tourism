import React, { useEffect, useState } from "react";
import { Outlet, useMatches } from "react-router-dom";
import MediaQuery, { useMediaQuery } from "react-responsive";

import { Header } from "../Header";
import { ContainerMain } from "./layout.styled";

import { BG_HOME, BG_DESTINATION, BG_CREW, BG_TECHNOLOGY } from "../../assets";
import { sizes } from "../../styles/sizes";
import { Burger } from "../Burger";
import { Menu } from "../Menu";

export const Layout: React.FC = () => {
	const [, { pathname }] = useMatches();
	const [bgImage, setBgImage] = useState<string>(BG_HOME.desktop);

	const isTablet = useMediaQuery({ query: "(max-width: 730px" });
	const isMobile = useMediaQuery({ query: "(max-width: 505px" });

	useEffect(() => {
		const verifyRoute = () => {
			switch (pathname.split("/", 2)[1]) {
				case "":
					setBgImage(() => {
						if (isTablet) {
							return BG_HOME.tablet;
						} else if (isMobile) {
							return BG_HOME.mobile;
						} else {
							return BG_HOME.desktop;
						}
					});
					break;
				case "destination":
					setBgImage(() => {
						if (isTablet) {
							return BG_DESTINATION.tablet;
						} else if (isMobile) {
							return BG_DESTINATION.mobile;
						} else {
							return BG_DESTINATION.desktop;
						}
					});
					break;
				case "crew":
					setBgImage(() => {
						if (isTablet) {
							return BG_CREW.tablet;
						} else if (isMobile) {
							return BG_CREW.mobile;
						} else {
							return BG_CREW.desktop;
						}
					});
					break;
				case "technology":
					setBgImage(() => {
						if (isTablet) {
							return BG_TECHNOLOGY.tablet;
						} else if (isMobile) {
							return BG_TECHNOLOGY.mobile;
						} else {
							return BG_TECHNOLOGY.desktop;
						}
					});
					break;
			}
		};

		verifyRoute();
	}, [isMobile, isTablet, pathname]);

	const [openMenu, setOpenMenu] = useState(false);

	return (
		<ContainerMain image={`${bgImage}`}>
			<Header />

			<Outlet />

			<MediaQuery maxWidth={sizes.mobile}>
				<Burger open={openMenu} setOpen={setOpenMenu} />
				<Menu open={openMenu} setOpen={setOpenMenu} />
			</MediaQuery>
		</ContainerMain>
	);
};
