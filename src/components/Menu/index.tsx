import React from "react";
import { Link } from "react-router-dom";
import { Styled as S } from "./menu.styled";
import { BurgerProps } from "../../@types/BurgerProps";

export const Menu: React.FC<BurgerProps> = ({ open, setOpen }) => {
	return (
		<S.Menu open={open}>
			<Link to="/" onClick={() => setOpen((prevState: boolean) => !prevState)}>
				<span className="stage">00</span> Home
			</Link>

			<Link
				to="/destination"
				onClick={() => setOpen((prevState: boolean) => !prevState)}
			>
				<span className="stage">01</span> destination
			</Link>

			<Link
				to="/crew"
				onClick={() => setOpen((prevState: boolean) => !prevState)}
			>
				<span className="stage">02</span> crew
			</Link>

			<Link
				to="/technology"
				onClick={() => setOpen((prevState: boolean) => !prevState)}
			>
				<span className="stage">03</span> technology
			</Link>
		</S.Menu>
	);
};
