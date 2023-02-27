import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	margin: 1.5rem 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.content {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.logo {
		margin-left: 2rem;
	}

	.divider {
		flex-grow: 1;
		padding: 1px;
		opacity: 0.25;
		background-color: ${(props) => props.theme.colors.primary};
		position: relative;
		left: 42px;
		z-index: 10;
	}

	.menuHamburguer {
		margin-right: 2rem;
	}
`;
