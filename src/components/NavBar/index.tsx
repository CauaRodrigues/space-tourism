import React from "react";
import { Menu } from "./navbar.styled";

export const NavBar: React.FC = () => {
	return (
		<Menu>
			<ul>
				<li>00 home</li>
				<li>01 destination</li>
				<li>02 crew</li>
				<li>03 tchnology</li>
			</ul>
		</Menu>
	);
};
