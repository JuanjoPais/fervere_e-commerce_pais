import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getDoc, doc} from "firebase/firestore";
import {db} from "../../servicios/firebase/firebaseConfig";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const {itemId} = useParams();

	useEffect(() => {
		setIsLoading(true);
		const productRef = doc(db, "products", itemId);

		getDoc(productRef)
			.then((response) => {
				const data = response.data();

				const productAdapted = {id: response.id, ...data};

				setItem(productAdapted);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [itemId]);

	if (isLoading === true) {
		return <h1>Cargando item...</h1>;
	}

	return <ItemDetail {...item} />;
};

export default ItemDetailContainer;
