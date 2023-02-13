import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { HomePage, DestinationPage, CrewPage, TechnologyPage } from "./pages";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme";

const ConfigureRoutes = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/destination" element={<DestinationPage />} />
					<Route path="/crew" element={<CrewPage />} />
					<Route path="/technology" element={<TechnologyPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default ConfigureRoutes;
