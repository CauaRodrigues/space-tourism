import styled from "styled-components";

const Footer = styled.footer`
	width: 100%;
	height: 10vh;

	position: absolute;
	bottom: -60px;
	background-color: ${({ theme }) => theme.colors.bg};
	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
		font-size: min(1rem, 6vw);
		line-height: 1;
		font-weight: 300;
	}

	a {
		position: relative;
		font-family: "Barlow", sans-serif;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.text};

		&::before {
			content: " ";
			height: 2px;

			position: absolute;
			bottom: -1px;
			left: 0;
			right: 0;

			background: ${({ theme }) => theme.colors.primary};
			transform-origin: bottom right;
			transform: scaleX(0);
			transition: transform 0.8s ease;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.primary};

			&::before {
				transform-origin: bottom left;
				transform: scaleX(1);
			}
		}
	}

	img {
		width: 18px;
		display: inline;

		&:first-child {
			margin: 0 8px;
		}

		&:last-child {
			margin-left: 8px;
		}
	}
`;

export const Styleds = { Footer };
