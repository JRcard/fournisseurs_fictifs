import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import routing from "./Routing.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={routing} />
	</StrictMode>
);
