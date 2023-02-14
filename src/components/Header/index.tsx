import React from "react";

import { Header as HeaderComponent } from "./header.styled";
import { NavBar } from "../NavBar";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";

export const Header: React.FC = () => {
	return (
		<HeaderComponent>
			<div className="content">
				<Logo />

				<span className="divider"></span>

				<NavBar />
			</div>
		</HeaderComponent>
	);
};
