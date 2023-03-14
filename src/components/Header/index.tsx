import React from "react";
import MediaQuery from "react-responsive";

import { Styled as S } from "./header.styled";
import { NavBar } from "../NavBar";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { sizes } from "../../styles/sizes";

export const Header: React.FC = () => {
	return (
		<S.Header>
			<div className="content">
				<Logo className="logo" />

				<MediaQuery minWidth={sizes.tablet}>
					<span className="divider"></span>
				</MediaQuery>

				<MediaQuery minWidth={sizes.mobile}>
					<NavBar />
				</MediaQuery>
			</div>
		</S.Header>
	);
};
