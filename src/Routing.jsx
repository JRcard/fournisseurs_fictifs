import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./composants/Home";
import Products from "./composants/Products";
import Suppliers from "./composants/Suppliers";
import Error from "./composants/Error";
import AddProductForm from "./composants/AddProductForm";
import ModifyProductForm from "./composants/ModifyProductForm";

const routing = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			errorElement: <Error />,
			children: [
				{ path: "/", element: <Home /> },
				{ path: "/produits", element: <Products /> },
				{ path: "/fournisseurs", element: <Suppliers /> },
				{ path: "/ajout", element: <AddProductForm /> },
				{ path: "/modifie/:id", element: <ModifyProductForm /> },
			],
		},
	],
	{
		// Set the basename to match the base path in vite.config.js
		// This is necessary for deployment in a subdirectory
		basename: "/FournisseursFictifs",
	}
);

export default routing;
