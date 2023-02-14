import styled from "styled-components";

export const Menu = styled.nav`
	flex: 1;
	height: 10vh;

	display: flex;
	align-items: center;
	justify-content: center;

	background: rgba(255, 255, 255, 0.06);
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);

	ul {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	li.nav-text a {
		text-transform: uppercase;
		font-size: 1.1rem;
		word-spacing: 4px;
		color: ${(props) => props.theme.colors.primary};
	}
`;
