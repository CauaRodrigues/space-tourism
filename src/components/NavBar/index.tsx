import React from "react";
import { Link, useMatches } from "react-router-dom";

import { ItemLink, Menu } from "./navbar.styled";
import { LinksTypes } from "../../@types/links";

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
							let active = pathname === path;

							return (
								<ItemLink className="nav-text" active={active} key={index}>
									<Link to={path}>
										<span>0{index}</span> {name}
									</Link>
								</ItemLink>
							);
					  })
					: null}
			</ul>
		</Menu>
	);
};
