import styled from "styled-components";
import { BurgerProps } from "../../@types/BurgerProps";

const Menu = styled.nav<BurgerProps>`
	height: 100vh;
	width: 70%;
	padding: 2rem;
	padding-top: 8rem;

	position: absolute;
	top: 0;
	right: 0;

	display: ${({ open }) => (open ? "flex" : "none")};
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 2rem;

	background: rgba(255, 255, 255, 0.06);
	backdrop-filter: blur(20px);
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
	text-align: left;

	a {
		color: ${({ theme }) => theme.colors.primary};
		font-weight: 400;
		font-size: min(1.2rem, 7vw);
		letter-spacing: 2.7px;
		font-family: "Barlow Condensed", sans-serif;
		text-transform: uppercase;
	}
`;

export const Styled = { Menu };
