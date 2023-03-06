// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		name: string;
		colors: {
			bg: string;
			primary: string;
			text: string;
			blurEffect: string;
			divider: string;
		};
		sizes: {
			tablet: number;
			mobile: number;
		};
	}
}
