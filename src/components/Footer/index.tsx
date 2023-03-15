import React from "react";
import { Styleds as S } from "./footer.styled";

export const Footer: React.FC = () => {
	return (
		<S.Footer>
			<p>
				Made with
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
					alt="react icon"
				/>
				and
				<img
					src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png"
					alt="heart icon"
				/>
			</p>

			<a
				href="https://github.com/CauaRodrigues"
				target="_blank"
				rel="noreferrer"
			>
				Cauã Rodrigues
			</a>
		</S.Footer>
	);
};
