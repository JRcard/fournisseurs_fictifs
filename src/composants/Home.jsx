import "../styles/App.css";
import { useInventoryManagementContext } from "../InventoryManagementContext";

const Home = () => {
	const contextValues = useInventoryManagementContext();

	const date = new Date();
	const currentDate = (date) => {
		const day = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"][date.getDay()];
		const dateOfDay = String(date.getDate());
		const month = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"][date.getMonth()];
		const year = String(date.getFullYear());

		return day + ", " + dateOfDay + " " + month + " " + year;
	};

	return (
		<div className="flex flex-col h-screen">
			<div>
				<h1 className="text-6xl font-bold text-right ">{currentDate(date)}</h1>
			</div>
			<div className="border-2 border-blue-500 my-8"></div>
			<div>
				<p className="text-2xl my-2">
					<span className="font-semibold">Quantité totale de l'inventaire:</span> {contextValues.nombreTotalStock}
				</p>
				<p className="text-2xl my-6">
					<span className="font-semibold">Quantité de produits dans la catégorie salle de bain:</span> {contextValues.nombreSalleDeBain}
				</p>
				<p className="text-2xl my-2">
					<span className="font-semibold">Quantité de produits dans la catégorie cuisine:</span> {contextValues.nombreCuisine}
				</p>
			</div>
		</div>
	);
};

export default Home;
