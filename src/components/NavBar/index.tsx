import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "./navbar.styled";
import { LinksTypes } from "../../@types/links";

export const NavBar: React.FC = () => {
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
							return (
								<li className="nav-text" key={index}>
									<Link to={path}>
										0{index} {name}
									</Link>
								</li>
							);
					  })
					: null}
			</ul>
		</Menu>
	);
};

// {
// 	/* <li className="nav-text">
// 	<Link to="/">00 home</Link>
// </li>
// <li className="nav-text">
// 	<Link to="/destination">01 destination</Link>
// </li>
// <li className="nav-text">
// 	<Link to="/crew">02 crew</Link>
// </li>
// <li className="nav-text">
// 	<Link to="/technology">03 technology</Link>
// </li> */
// }
