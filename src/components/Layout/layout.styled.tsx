import styled from "styled-components";
import { sizes } from "../../styles/sizes";

interface Props {
	image: string;
}

export const ContainerMain = styled.main<Props>`
	width: 100%;
	min-height: 100vh;
	padding: 1rem 0;

	@media (max-width: ${sizes.tablet}px) {
		padding: 0;
	}

	background-image: url(${(props) => props.image});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;
