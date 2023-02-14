import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Home, Destination, Technology, Crew } from "./pages";

export const Router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/destination",
				element: <Destination />,
			},
			{
				path: "/technology",
				element: <Technology />,
			},
			{
				path: "/crew",
				element: <Crew />,
			},
		],
	},
]);
