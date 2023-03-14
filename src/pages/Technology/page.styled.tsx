import styled from "styled-components";
import { MainContainer } from "../../styles/components";

const ContainerTechnology = styled(MainContainer)`
	padding-right: 0;

	@media (max-width: 1000px) {
		padding: 0;
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
				order: 1;
				flex-direction: column;
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

	span {
		width: 60px;
		height: 60px;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: transparent;
		border: 1px solid ${({ theme }) => theme.colors.primary};
		border-radius: 50%;

		color: ${({ theme }) => theme.colors.primary};
		text-align: center;
		font-size: min(2rem, 6vw);
		font-weight: 400;
		font-family: "Bellefair", serif;
		cursor: pointer;
	}
`;

const Image = styled.picture`
	img {
		@media (max-width: 1000px) {
			width: 100%;
		}
	}
`;

export const Styleds = { ContainerTechnology, TabsNumbered, Image };
