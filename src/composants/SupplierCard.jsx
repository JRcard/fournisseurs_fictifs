import { useInventoryManagementContext } from "../InventoryManagementContext";

const SupplierCard = ({ supplier }) => {
	return (
		<div className="border-2 border-gray-500 bg-gray-200 p-2 rounded-lg shadow-lg">
			<h3 className="text-3xl font-bold py-2">{supplier.nom}</h3>
			<p className="font-semibold">{supplier.categorie}</p>
			<a className="underline text-blue-600 font-bold" href={supplier.siteWeb} target="_blank">
				Site Web
			</a>
		</div>
	);
};

export default SupplierCard;
