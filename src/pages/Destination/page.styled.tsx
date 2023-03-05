import styled from "styled-components";
import { Props } from "../../@types/activeProps";
import { MainContainer } from "../../styles/components";

export const ContainerDestination = styled(MainContainer)`
	section.content {
		width: 80%;
		display: flex;
		justify-content: space-between;

		@media (max-width: 1082px) {
			width: 80%;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 3rem;
		}

		@media (max-width: 700px) {
			width: 100%;
		}

		.content--info {
			width: 40%;

			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;

			@media (max-width: 1082px) {
				width: 90%;
				text-align: center;
				justify-content: center;
				align-items: center;
				gap: 2rem;
			}

			span.line--divider {
				width: 100%;
				padding: 1px;
				background-color: ${(props) => props.theme.colors.divider};
			}
		}
	}
`;

export const PlanetImage = styled.figure`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Tabs = styled.nav`
	width: 100%;

	@media (max-width: 1082px) {
		width: max-content;
	}

	ul {
		display: flex;
		gap: 2rem;
	}
`;

export const Tab = styled.li<Props>`
	display: flex;
	flex-direction: column;
	color: ${(props) => props.theme.colors.text};
	cursor: default;

	&::after {
		content: " ";
		width: 100%;
		padding: 1.05px;
		position: relative;
		top: 10px;
	}

	${(props) => {
		if (props.active) {
			return `
				color: ${props.theme.colors.primary};
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
`;

export const Description = styled.div`
	width: 100%;
`;

export const AdditionalInfo = styled.div`
	width: 100%;
	display: flex;
	gap: 4rem;

	@media (max-width: 1082px) {
		justify-content: space-around;
		gap: 1rem;
	}

	.info {
		display: flex;
		flex-direction: column;
	}
`;
