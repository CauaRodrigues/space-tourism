import styled from "styled-components";
import { MainContainer } from "../../styles/components";
import { Props } from "../../@types/activeProps";

const ContainerTechnology = styled(MainContainer)`
	padding-right: 0;

	@media (max-width: 1000px) {
		padding-left: 0;
	}

	.container--content {
		width: 100%;
		height: min-content;
		display: flex;
		justify-content: flex-end;
	}

	.content {
		width: 85%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;

		.info {
			width: 55%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			gap: 1.5rem;

			p {
				width: 80%;
			}

			@media (max-width: 1000px) {
				width: 95%;
				padding-bottom: 1rem;
				order: 1;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				text-align: center;
			}
		}

		@media (max-width: 1000px) {
			width: 100%;
			flex-direction: column;
		}
	}
`;

const TabsNumbered = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media (max-width: 1000px) {
		order: 1;
		flex-direction: row;
	}
`;

const TabNumbered = styled.span<Props>`
	width: min(70px, 20vw);
	height: min(70px, 20vw);

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme, active }) =>
		active ? theme.colors.primary : "transparent"};
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 50%;

	color: ${({ theme, active }) =>
		active ? theme.colors.bg : theme.colors.primary};
	text-align: center;
	font-size: min(2rem, 8vw);
	font-weight: 400;
	font-family: "Bellefair", serif;
	cursor: pointer;

	&:hover {
		border-color: ${({ theme }) => theme.colors.primary};
	}
`;

const Image = styled.picture`
	@media (max-width: 1000px) {
		width: 100%;
	}

	img {
		@media (max-width: 1000px) {
			width: 100%;
		}
	}
`;

export const Styleds = {
	ContainerTechnology,
	TabsNumbered,
	TabNumbered,
	Image,
};
