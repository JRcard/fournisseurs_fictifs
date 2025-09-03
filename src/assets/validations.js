export const validateSku = (code, products) => {
	const regex = /^(CU|SB)-\d{3}$/;
	const isNewID = products.find((product) => product.id === code);

	if (!regex.test(code)) {
		return "Le code doit commencer par CU ou SB, suivi d'un tiret et de trois chiffres (ex: CU-123).";
	}
	if (isNewID) {
		return "Ce code est déjà utilisé.";
	}
	return null;
};
export const validateName = (code) => {
	if (code === "") {
		return "Le nom ne peut pas être vide.";
	} else if (code.length < 3) {
		return "Le nom doit contenir au moins 3 caractères.";
	} else return null;
};
export const validatePrice = (code) => {
	if (code === "") {
		return "Le prix ne peut pas être vide.";
	} else if (code < 10) {
		return "Le prix doit être supérieur ou égal à 10$.";
	} else return null;
};
export const validateStock = (code) => {
	if (code === "") {
		return "La quantité ne peut pas être vide.";
	} else if (code < 1) {
		return "La quantité doit être supérieure ou égale à 1.";
	} else return null;
};
export const validateDescription = (code) => {
	if (code.length < 10 || code > 500) {
		return "La description ne peut pas être vide et doit contenir entre 10 et 500 caractères.";
	} else return null;
};
export const validateSelection = (code) => {
	if (code === "") {
		return "Ce champ ne peut pas être vide.";
	} else return null;
};
