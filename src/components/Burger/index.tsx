import React from "react";
import { Styled as S } from "./burger.styled";

export type PropsTypes = {
	open: boolean;
	setOpen?: any;
};

export const Burger: React.FC<PropsTypes> = ({ open, setOpen }) => {
	return (
		<S.Burger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</S.Burger>
	);
};
