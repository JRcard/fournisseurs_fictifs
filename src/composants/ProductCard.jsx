import { useNavigate } from "react-router-dom";
import { useInventoryManagementContext } from "../InventoryManagementContext";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const contextValues = useInventoryManagementContext();

	const handleClick = (id) => {
		navigate(`/modifie/${id}`);
		contextValues.setProductById(id);
	};

	return (
		<div className="border-2 border-gray-500 bg-gray-200 p-4 m-2 rounded-lg shadow-lg">
			<h3 className=" text-base md:text-xl xl:text-3xl font-bold py-2">{product.nom}</h3>
			<ul className="list-disc pl-6 pt-2">
				<li>
					<span className="font-semibold">SKU:</span> {product.id}
				</li>
				<li>
					<span className="font-semibold">Description:</span> {product.description}
				</li>
				<li>
					<span className="font-semibold">Prix:</span> {product.prix}$
				</li>
				<li>
					<span className="font-semibold">Stock:</span> {product.stock}
				</li>
				<li>
					<span className="font-semibold">Catégorie:</span> {product.categorie}
				</li>
				<li>
					<span className="font-semibold">Fournisseur:</span> {product.fournisseur}
				</li>
			</ul>
			<button className="p-2 rounded-[10px] bg-gray-800 text-blue-100 mt-6  cursor-pointer" onClick={() => handleClick(product.id)}>
				Modifier
			</button>
		</div>
	);
};

export default ProductCard;
