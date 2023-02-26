import React from "react";
import MediaQuery from "react-responsive";

import { Header as HeaderComponent } from "./header.styled";
import { NavBar } from "../NavBar";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";

export const Header: React.FC = () => {
	return (
		<HeaderComponent>
			<div className="content">
				<Logo className="logo" />

				<MediaQuery minWidth={1000}>
					<span className="divider"></span>
				</MediaQuery>

				<MediaQuery minWidth={500}>
					<NavBar />
				</MediaQuery>

				<MediaQuery maxWidth={500}>
					<button>Menu</button>
				</MediaQuery>
			</div>
		</HeaderComponent>
	);
};
