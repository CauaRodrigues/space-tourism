import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.content {
		width: 95%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.divider {
		width: 40%;
		padding: 1px;
		opacity: 0.25;
		background-color: ${(props) => props.theme.colors.primary};
		position: relative;
		left: 32px;
		z-index: 10;
	}
`;
