import styled from "styled-components";

export const ContainerDestination = styled.article`
	width: 100%;
	padding: 3rem 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;

	h5 {
		width: 70%;

		.stage {
			opacity: 0.25;
		}
	}

	section.content {
		width: 75%;
		display: flex;
		justify-content: space-between;

		.content--info {
			width: 40%;

			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;

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

	ul {
		display: flex;
		gap: 2rem;
	}
`;

export const Tab = styled.li`
	color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.div`
	width: 100%;
`;

export const AdditionalInfo = styled.div`
	width: 100%;
	display: flex;
	gap: 3rem;

	.info {
		display: flex;
		flex-direction: column;
	}
`;
