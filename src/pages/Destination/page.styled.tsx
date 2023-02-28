import styled from "styled-components";

export const ContainerDestination = styled.article`
	width: 100%;
	padding: 3rem 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h5 {
		width: 80%;

		.stage {
			opacity: 0.25;
		}
	}

	section.content {
		width: 80%;
		margin: 2rem 0;

		display: flex;
		justify-content: space-between;
		align-items: center;

		.content--info {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			span.line--divider {
				width: 100%;
				padding: 1px;
				background-color: ${(props) => props.theme.colors.primary};
			}
		}
	}
`;

export const PlanetImage = styled.figure`
	width: 100%;
`;

export const Tabs = styled.nav`
	width: 100%;

	ul {
		display: flex;
		gap: 2rem;
	}
`;

export const Tab = styled.li``;

export const Description = styled.div`
	border: 1px solid green;
	width: 100%;
	margin: 24px 0;
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
