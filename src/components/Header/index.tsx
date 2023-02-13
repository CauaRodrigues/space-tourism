import React from "react";
import { Header as HeaderComponent } from "./header.styled";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { NavBar } from "../NavBar";

export const Header: React.FC = () => {
	return (
		<HeaderComponent>
			<Logo />

			<NavBar />
		</HeaderComponent>
	);
};
