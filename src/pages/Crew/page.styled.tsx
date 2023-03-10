import styled from "styled-components";
import { MainContainer } from "../../styles/components";
import { Props } from "../../@types/activeProps";

export const ContainerCrew = styled(MainContainer)`
	h5 {
		width: 80%;
	}

	section.content {
		width: 80vw;
		display: flex;
		justify-content: space-between;
		align-items: center;

		figure {
			width: 45%;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			border-bottom: 2px solid ${(props) => props.theme.colors.divider};

			img {
				width: 75%;
			}
		}

		.content--info {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 5rem;

			.description {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				p {
					padding-right: 10rem;
				}
			}
		}
	}
`;

export const TabsCircle = styled.nav`
	ul {
		display: flex;
		gap: 1.5rem;
	}
`;

export const Tab = styled.li<Props>`
	width: 18px;
	height: 18px;
	border-radius: 50%;

	${(props) => {
		if (props.active) {
			return `
				background: ${props.theme.colors.primary};
			`;
		}
		return `
			cursor: pointer;
			background: ${props.theme.colors.primary};
			opacity: 0.17;
			&:hover {
				opacity: 0.5;
			}
		`;
	}}
`;
