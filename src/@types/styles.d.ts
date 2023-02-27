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
		};
		textSize: {
			h1: number | string;
			h2: number | string;
			h3: number | string;
			h4: number | string;
			h5: number | string;
			sub1: number | string;
			sub2: number | string;
			navText: number | string;
			bodyText: number | string;
		};
		sizes: {
			tablet: number;
			mobile: number;
		};
	}
}
