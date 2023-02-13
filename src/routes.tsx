import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Destination, Crew, Technology } from "./pages";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const ConfigureRoutes = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/destination" element={<Destination />} />
					<Route path="/crew" element={<Crew />} />
					<Route path="/technology" element={<Technology />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default ConfigureRoutes;
