import styled from "styled-components";
import { PropsTypes } from ".";

const Burger = styled.button<PropsTypes>`
	width: 2rem;
	height: 2rem;

	z-index: 10;
	position: absolute;
	top: 5%;
	right: 2rem;

	background: transparent;
	border: none;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		position: relative;

		background: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
		transition: all 0.3s linear;
		transform-origin: 1px;

		&:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export const Styled = { Burger };
