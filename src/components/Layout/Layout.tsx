import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { ContainerMain } from "./layout.styled";

export const Layout: React.FC = () => {
	return (
		<ContainerMain>
			<Header />

			<Outlet />
		</ContainerMain>
	);
};
