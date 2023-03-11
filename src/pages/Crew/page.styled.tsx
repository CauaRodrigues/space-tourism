import styled from "styled-components";
import { MainContainer } from "../../styles/components";
import { Props } from "../../@types/activeProps";

export const ContainerCrew = styled(MainContainer)`
	h5 {
		width: 80%;

		@media (max-width: 1210px) {
			width: 90%;
		}
	}

	section.content {
		width: 80vw;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 1210px) {
			width: 90%;
		}

		@media (max-width: 1000px) {
			width: 100%;
			flex-direction: column;
		}

		@media (max-width: 500px) {
			flex-direction: column-reverse;
			gap: 3rem;
		}

		figure {
			width: 45%;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			border-bottom: 2px solid ${(props) => props.theme.colors.divider};

			@media (max-width: 1000px) {
				width: 60%;
			}

			@media (max-width: 500px) {
				width: 90%;
			}

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

			@media (max-width: 1000px) {
				width: 90%;
				text-align: center;
				align-items: center;
				gap: 2rem;
			}

			.description {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				p {
					padding-right: 10rem;

					@media (max-width: 1000px) {
						padding: 0;
					}
				}
			}
		}
	}
`;

export const TabsCircle = styled.nav`
	@media (max-width: 1000px) {
		margin-bottom: 3rem;
	}

	ul {
		display: flex;
		gap: 1.5rem;
	}
`;

export const Tab = styled.li<Props>`
	width: min(1rem, 5vw);
	height: min(1rem, 5vw);
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
