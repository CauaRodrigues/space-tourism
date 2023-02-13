import React from "react";
import ReactDOM from "react-dom/client";
import ConfigureRoutes from "./routes";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ConfigureRoutes />
	</React.StrictMode>
);
