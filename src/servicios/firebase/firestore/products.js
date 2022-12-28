import {
	collection,
	getDocs,
	query,
	where,
	getDoc,
	doc,
} from "firebase/firestore";
import {db} from "../firebaseConfig";

export const getProducts = (categoriaId) => {
	return new Promise((resolve, reject) => {
		const productsRef = categoriaId
			? query(collection(db, "products"), where(`categoria`, `==`, categoriaId))
			: collection(db, "products");

		getDocs(productsRef)
			.then((response) => {
				const productsAdapted = response.docs.map((doc) => {
					const data = doc.data();

					return {id: doc.id, ...data};
				});
				resolve(productsAdapted);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const getProductById = (itemId) => {
	return new Promise((resolve, reject) => {
		const productRef = doc(db, "products", itemId);

		getDoc(productRef)
			.then((response) => {
				const data = response.data();

				const productAdapted = {id: response.id, ...data};

				resolve(productAdapted);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
