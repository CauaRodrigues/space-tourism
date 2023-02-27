import styled from "styled-components";

interface Props {
	active: boolean;
}

export const Menu = styled.nav`
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	background: ${(props) => props.theme.colors.blurEffect};
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);

	ul {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5rem;

		@media (max-width: ${(props) => props.theme.sizes.tablet}px) {
			gap: 0;
			justify-content: space-around;
			padding: 0 12px;
		}
	}

	@media (max-width: ${(props) => props.theme.sizes.tablet}px) {
		flex-grow: 0;
		width: 65%;
	}
`;

export const ItemLink = styled.li<Props>`
	padding: 1.8rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&::after {
		content: " ";
		width: 100%;
		padding: 1px;
		position: relative;
		top: 28px;
	}

	${(props) => {
		if (props.active) {
			return `
				&::after {
					background: ${props.theme.colors.primary};
				}
			`;
		}
		return `
			&:hover {
				cursor: pointer;
				&::after {
					background: ${props.theme.colors.primary};
					opacity: 0.5;
				}
			}
		`;
	}}

	a {
		text-transform: uppercase;
		font-size: 1.1rem;
		font-weight: 500;
		word-spacing: 4px;
		color: ${(props) => props.theme.colors.primary};

		span {
			font-weight: 700;
		}
	}
`;
