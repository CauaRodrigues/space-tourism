import styled from "styled-components";

export const ContainerHome = styled.article`
	width: 100%;
	min-height: 70vh;
	padding: 3rem 12px;

	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	flex-wrap: wrap;

	section.hero {
		width: 450px;

		@media (max-width: ${(props) => props.theme.sizes.tablet}px) {
			text-align: center;
			padding: 24px;
			margin: 12px 0;
		}

		h5 {
			color: ${(props) => props.theme.colors.text};
		}
	}

	section.container-button {
		min-width: 20%;
		margin: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const ButtonExplore = styled.button`
	min-width: 230px;
	min-height: 230px;

	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.primary};

	text-transform: uppercase;
	font-family: "Bellefair", serif;
	font-weight: 300;
	font-size: 30px;

	cursor: pointer;

	&:hover {
		box-shadow: 0 0 0 1.2em #ffffff5a;
	}

	a {
		color: #000000;
	}
`;
