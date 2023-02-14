import styled from "styled-components";
import BgImage from "../../assets/home/background-home-desktop.jpg";

export const ContainerMain = styled.main`
	width: 100%;
	height: 100vh;
	padding: 12px 0;

	background-image: url(${BgImage});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;
