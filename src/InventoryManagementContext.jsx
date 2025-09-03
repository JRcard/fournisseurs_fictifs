import { createContext, useContext, useState } from "react";
import listeFournisseurs from "./assets/listeFournisseurs";
import listeProduits from "./assets/listeProduits";
import { validateSku, validateName, validatePrice, validateStock, validateDescription, validateSelection } from "./assets/validations";

const InventoryManagementContext = createContext();

export const InventoryProvider = ({ children }) => {
	// State pour les produits et les fournisseurs
	const [products, setProducts] = useState(listeProduits);
	const [suppliers, setSuppliers] = useState(listeFournisseurs);

	// State pour les champs du formulaire
	const [name, setName] = useState("");
	const [id, setId] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [categorie, setCategorie] = useState("");
	const [supplier, setSupplier] = useState("");
	const [description, setDescription] = useState("");

	// State pour les erreurs de validation
	const [errors, setErrors] = useState({});

	// Fonctions pour ajouter, modifier et récupérer des produits
	// Compte le nombre de produits par catégorie
	const counter = products.reduce(
		(acc, product) => {
			if (product.categorie === "Salle de bain") {
				acc.salleDeBain += 1;
			} else if (product.categorie === "Cuisine") {
				acc.cuisine += 1;
			}
			return acc;
		},
		{ salleDeBain: 0, cuisine: 0 }
	);

	const [nombreSalleDeBain, setNombreSalleDeBain] = useState(counter.salleDeBain);
	const [nombreCuisine, setNombreCuisine] = useState(counter.cuisine);
	const [nombreTotalStock, setNombreTotalStock] = useState(products.reduce((acc, product) => acc + product.stock, 0));

	// Ajoute un produit à la liste des produits
	const addProduct = (product) => {
		setProducts([...products, product]);
		setNombreCuisine((prev) => (product.categorie === "Cuisine" ? prev + 1 : prev));
		setNombreSalleDeBain((prev) => (product.categorie === "Salle de bain" ? prev + 1 : prev));
		setNombreTotalStock((prev) => prev + parseInt(product.stock));
	};

	// Modifie un produit existant dans la liste des produits
	const modifyProduct = (id) => {
		const productToChange = products.find((product) => product.id === id);

		if (productToChange.stock < stock) {
			const ajustedStock = parseInt(stock) - parseInt(productToChange.stock);
			setNombreTotalStock((prev) => prev + ajustedStock);
		} else if (productToChange.stock > stock) {
			const ajustedStock = parseInt(productToChange.stock) - parseInt(stock);
			setNombreTotalStock((prev) => prev - ajustedStock);
		}
		productToChange.nom = name;
		productToChange.prix = price;
		productToChange.stock = stock;
		productToChange.description = description;

		setProducts((prevProducts) => prevProducts.map((currentProduct) => (currentProduct.id === id ? { ...currentProduct, ...productToChange } : currentProduct)));

		console.log("Modification du produit:", productToChange);
	};

	// Récupère un produit par son ID et met à jour les champs du formulaire
	const setProductById = (id) => {
		const productSelected = products.find((product) => product.id === id);

		setCategorie(productSelected.categorie);
		setName(productSelected.nom);
		setPrice(productSelected.prix);
		setStock(productSelected.stock);
		setDescription(productSelected.description);
		setSupplier(productSelected.fournisseur);
		setId(productSelected.id);
	};

	// Réinitialise les champs du formulaire
	const resetForm = () => {
		setName("");
		setId("");
		setPrice("");
		setStock("");
		setDescription("");
		setCategorie("Salle de bain");
		setSupplier(suppliers[0].nom);
	};

	// Valide les champs du formulaire et met à jour les erreurs
	// Retourne true si tous les champs sont valides, sinon false
	const validateAddForm = () => {
		const newErrors = {};
		newErrors.name = validateName(name);
		newErrors.id = validateSku(id, products);
		newErrors.price = validatePrice(price);
		newErrors.stock = validateStock(stock);
		newErrors.description = validateDescription(description);
		newErrors.supplier = validateSelection(supplier);

		setErrors(newErrors);
		return Object.values(newErrors).every((err) => err === null);
	};
	const validateModifyForm = () => {
		const newErrors = {};
		newErrors.name = validateName(name);
		newErrors.price = validatePrice(price);
		newErrors.stock = validateStock(stock);
		newErrors.description = validateDescription(description);

		setErrors(newErrors);
		return Object.values(newErrors).every((err) => err === null);
	};

	// Liste des props que fournit le contexte
	const contextValues = {
		products,
		addProduct,
		suppliers,
		modifyProduct,
		setProductById,
		categorie,
		setCategorie,
		supplier,
		setSupplier,
		name,
		setName,
		id,
		setId,
		price,
		setPrice,
		stock,
		setStock,
		description,
		setDescription,
		resetForm,
		errors,
		setErrors,
		validateAddForm,
		validateModifyForm,
		nombreSalleDeBain,
		nombreCuisine,
		nombreTotalStock,
	};

	return <InventoryManagementContext.Provider value={contextValues}>{children}</InventoryManagementContext.Provider>;
};

// Hook pour utiliser le contexte dans les composants
export const useInventoryManagementContext = () => useContext(InventoryManagementContext);
