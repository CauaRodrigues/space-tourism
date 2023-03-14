import styled from "styled-components";

export const MainContainer = styled.article`
	width: 100%;
	padding: 3rem 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;

	h5 {
		width: 70%;

		@media (max-width: 1082px) {
			width: 95%;
		}

		@media (max-width: 500px) {
			width: max-content;
			align-self: center;
			text-align: center;
		}

		.stage {
			opacity: 0.25;

			&::after {
				content: " ";
			}
		}
	}
`;
