import { useNavigate } from "react-router-dom";
import { useInventoryManagementContext } from "../InventoryManagementContext";
import ProductCard from "./ProductCard";

const Products = () => {
	const { products, resetForm } = useInventoryManagementContext();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/ajout`);
		resetForm();
	};

	if (!products || products.length === 0) return <p>Aucun item à afficher.</p>;

	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col ">
					<h1 className="text-6xl underline">Les produits</h1>
					<button className="text-2xl p-2 rounded-[10px] bg-gray-800 text-blue-100 mb-[30px] mt-[50px] cursor-pointer" onClick={handleClick}>
						Ajouter
					</button>
				</div>
				<div className="grid grid-cols-4 xl:gap-4">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</>
	);
};

export default Products;
