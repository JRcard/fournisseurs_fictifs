import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<h1>Erreur 404 - Page Inconnu</h1>
			<Link to={"/"}>Accueil</Link>
		</div>
	);
};

export default Error;
