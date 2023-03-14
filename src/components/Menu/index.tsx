import React from "react";
import { Link } from "react-router-dom";
import { Styled as S } from "./menu.styled";

export type PropsTypes = {
	open: boolean;
};

export const Menu: React.FC<PropsTypes> = ({ open }) => {
	return (
		<S.Menu open={open}>
			<Link to="/">
				<span className="stage">00</span> Home
			</Link>

			<Link to="/destination">
				<span className="stage">01</span> destination
			</Link>

			<Link to="/crew">
				<span className="stage">02</span> crew
			</Link>

			<Link to="/technology">
				<span className="stage">03</span> technology
			</Link>
		</S.Menu>
	);
};
