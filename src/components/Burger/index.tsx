import React from "react";
import { Styled as S } from "./burger.styled";
import { BurgerProps } from "../../@types/BurgerProps";

export const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
	return (
		<S.Burger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</S.Burger>
	);
};
