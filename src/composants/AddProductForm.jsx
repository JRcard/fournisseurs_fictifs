import { useInventoryManagementContext } from "../InventoryManagementContext";

const AddProductForm = () => {
	const contextValues = useInventoryManagementContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!contextValues.validateAddForm()) return;

		const newProduct = {
			nom: contextValues.name,
			id: contextValues.id,
			prix: contextValues.price,
			stock: contextValues.stock,
			description: contextValues.description,
			categorie: contextValues.categorie,
			fournisseur: contextValues.supplier,
		};
		contextValues.addProduct(newProduct);
		contextValues.resetForm();
		alert("Produit ajouté avec succès: " + newProduct.nom);
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-6xl underline mb-[55px] text-center">Ajouter un produit</h1>
			<form className="flex flex-col border-2 border-gray-500 bg-gray-200 p-4 m-4 rounded-lg shadow-lg w-[30%]" onSubmit={handleSubmit}>
				<label htmlFor="name">Nom du produit: </label>
				<input
					className="border-2 rounded pl-1 bg-gray-50 placeholder:pl-1"
					type="text"
					id="name"
					name="name"
					placeholder="Entrez le nom"
					value={contextValues.name}
					onChange={(e) => contextValues.setName(e.target.value)}
				/>
				{contextValues.errors.name ? <p className="text-red-500 text-xs">{contextValues.errors.name}</p> : <p className="h-[0.875rem]"></p>}

				<label className="mt-2" htmlFor="id">
					SKU:
				</label>
				<input
					className="border-2 rounded pl-1 bg-gray-50 placeholder:pl-1"
					type="text"
					id="id"
					name="id"
					placeholder="AA-000"
					value={contextValues.id}
					onChange={(e) => contextValues.setId(e.target.value)}
				/>
				{contextValues.errors.id ? <p className="text-red-500 text-xs">{contextValues.errors.id}</p> : <p className="h-[0.875rem]"></p>}

				<div className="flex justify-between flex-wrap 2xl:flex-nowrap">
					<div className="flex flex-col mr-4">
						<label className="mt-2" htmlFor="price">
							Prix:
						</label>
						<input
							className="border-2 rounded pl-1 bg-gray-50 placeholder:pl-1"
							type="number"
							id="price"
							name="price"
							min="10"
							value={contextValues.price}
							onChange={(e) => contextValues.setPrice(e.target.value)}
						/>
						{contextValues.errors.price ? <p className="text-red-500 text-xs">{contextValues.errors.price}</p> : <p className="h-[0.875rem]"></p>}
					</div>
					<div className="flex flex-col">
						<label className="mt-2" htmlFor="stock">
							Quantité:
						</label>
						<input
							className="border-2 rounded pl-2 bg-gray-50 placeholder:pl-1"
							type="number"
							id="stock"
							name="stock"
							min="1"
							value={contextValues.stock}
							onChange={(e) => contextValues.setStock(e.target.value)}
						/>
						{contextValues.errors.stock ? <p className="text-red-500 text-xs">{contextValues.errors.stock}</p> : <p className="h-[0.875rem]"></p>}
					</div>
				</div>

				<label className="mt-2" htmlFor="categories">
					Catégorie de produit:{" "}
				</label>
				<select className="border-2 rounded bg-gray-50 " id="categories" name="categories" value={contextValues.categorie} onChange={(e) => contextValues.setCategorie(e.target.value)}>
					<option value="Salle de bain">Salle de bain</option>
					<option value="Cuisine">Cuisine</option>
				</select>
				{contextValues.errors.categorie ? <p className="text-red-500 text-xs">{contextValues.errors.categorie}</p> : <p className="h-[0.875rem]"></p>}

				<label className="mt-2" htmlFor="supplier">
					Fournisseurs:
				</label>
				<select
					className="border-2 rounded bg-gray-50 placeholder:pl-1"
					id="supplier"
					name="supplier"
					value={contextValues.supplier}
					onChange={(e) => contextValues.setSupplier(e.target.value)}>
					{contextValues.suppliers
						.filter((supplier) => (contextValues.categorie === "Salle de bain" ? supplier.categorie === "Salle de bain" : supplier.categorie === "Cuisine"))
						.map((supplier, index) => (
							<option key={index} value={supplier.nom}>
								{supplier.nom}
							</option>
						))}
				</select>
				{contextValues.errors.supplier ? <p className="text-red-500 text-xs">{contextValues.errors.supplier}</p> : <p className="h-[0.875rem]"></p>}

				<div className="flex flex-col">
					<label className="mt-2" htmlFor="description">
						Description du produit:
					</label>
					<textarea
						className="border-2 rounded pl-1 bg-gray-50"
						id="description"
						name="description"
						rows="6"
						col="250"
						value={contextValues.description}
						onChange={(e) => contextValues.setDescription(e.target.value)}></textarea>
					{contextValues.errors.description ? <p className="text-red-500 text-xs">{contextValues.errors.description}</p> : <p className="h-[0.875rem]"></p>}
				</div>
				<input className="p-2 rounded-[10px] bg-gray-800 text-blue-100 mt-6  cursor-pointer" type="submit" value="Ajouter" />
			</form>
		</div>
	);
};

export default AddProductForm;
