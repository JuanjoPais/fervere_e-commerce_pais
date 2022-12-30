import {getDoc, doc} from "firebase/firestore";
import {db} from "../firebaseConfig";

export const getOrderById = (orderId) => {
	return new Promise((resolve, reject) => {
		const orderRef = doc(db, "orders", orderId);

		getDoc(orderRef)
			.then((response) => {
				const data = response.data();
				console.log(data);

				const orderAdapted = {id: response.id, ...data};

				resolve(orderAdapted);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
