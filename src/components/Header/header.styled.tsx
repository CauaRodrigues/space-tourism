import styled from "styled-components";
import { sizes } from "../../styles/sizes";

const Header = styled.header`
	width: 100%;
	margin: 1.5rem 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: ${sizes.tablet}px) {
		margin: 0;
	}

	.content {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.logo {
		margin-left: 2rem;

		@media (max-width: ${sizes.mobile}px) {
			margin-top: 1.3rem;
		}
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
`;

export const Styled = { Header };
