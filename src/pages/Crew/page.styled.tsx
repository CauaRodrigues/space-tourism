import styled from "styled-components";
import { MainContainer } from "../../styles/components";

export const ContainerCrew = styled(MainContainer)`
	h5 {
		width: 80%;
	}
`;

export const TabsCircle = styled.nav`
	ul {
		display: flex;
		gap: 1.5rem;
	}
`;

export const Tab = styled.li`
	width: 18px;
	height: 18px;

	border-radius: 50%;
	cursor: pointer;

	background-color: ${(props) => props.theme.colors.primary};
`;
