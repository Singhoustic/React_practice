import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactElement = React.createElement(
	"a",
	{
		href: "https://www.google.com",
		target: "_blank",
	},
	"click on me"
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
