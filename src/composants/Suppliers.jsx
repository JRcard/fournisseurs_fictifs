import SupplierCard from "./SupplierCard";
import { useInventoryManagementContext } from "../InventoryManagementContext";

const Suppliers = () => {
	const { suppliers } = useInventoryManagementContext();

	if (!suppliers || suppliers.length === 0) return <p>Aucun item à afficher.</p>;

	return (
		<>
			<div className="flex flex-col items-stretch h-screen">
				<h1 className="text-6xl underline mb-[55px] text-center">Les fournisseurs</h1>

				<div className="grid grid-cols-4 gap-4">
					{suppliers.map((supplier, id) => (
						<SupplierCard key={id} supplier={supplier} />
					))}
				</div>
			</div>
		</>
	);
};

export default Suppliers;
