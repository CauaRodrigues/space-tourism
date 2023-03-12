import React from "react";
import { Link, useMatches } from "react-router-dom";

import { ItemLink, Menu } from "./navbar.styled";
import { LinksTypes } from "../../@types/links";
import MediaQuery from "react-responsive";
import { sizes } from "../../styles/sizes";

export const NavBar: React.FC = () => {
	const [, { pathname }] = useMatches();

	const links: LinksTypes[] = [
		{ name: "home", path: "/" },
		{ name: "destination", path: "/destination" },
		{ name: "crew", path: "/crew" },
		{ name: "technology", path: "/technology" },
	];

	return (
		<Menu>
			<ul>
				{links
					? links.map(({ name, path }, index) => {
							let active = () => {
								if (name === "home") {
									return pathname === path;
								}
								return pathname.split("/", 2)[1] === name;
							};

							return (
								<ItemLink className="nav-text" active={active()} key={index}>
									<Link to={path}>
										<MediaQuery minWidth={sizes.tablet}>
											<span className="stage">0{index} </span>
										</MediaQuery>
										{name}
									</Link>
								</ItemLink>
							);
					  })
					: null}
			</ul>
		</Menu>
	);
};
