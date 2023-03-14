import React, { useState } from "react";
import MediaQuery from "react-responsive";

import { Styled as S } from "./header.styled";
import { NavBar } from "../NavBar";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { sizes } from "../../styles/sizes";
import { Burger } from "../Burger";
import { Menu } from "../Menu";

export const Header: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false);

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

				<MediaQuery maxWidth={sizes.mobile}>
					<Burger open={openMenu} setOpen={setOpenMenu} />
					<Menu open={openMenu} />
				</MediaQuery>
			</div>
		</S.Header>
	);
};
