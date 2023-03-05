import React from "react";
import MediaQuery from "react-responsive";

import { Header as HeaderComponent } from "./header.styled";
import { NavBar } from "../NavBar";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as Menu } from "../../assets/shared/icon-hamburger.svg";
import { sizes } from "../../styles/sizes";

export const Header: React.FC = () => {
	return (
		<HeaderComponent>
			<div className="content">
				<Logo className="logo" />

				<MediaQuery minWidth={sizes.tablet}>
					<span className="divider"></span>
				</MediaQuery>

				<MediaQuery minWidth={sizes.mobile}>
					<NavBar />
				</MediaQuery>

				<MediaQuery maxWidth={sizes.mobile}>
					<Menu className="menuHamburguer" />
				</MediaQuery>
			</div>
		</HeaderComponent>
	);
};
