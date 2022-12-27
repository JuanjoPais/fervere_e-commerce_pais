import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";

import "./ItemsContainer.css";
import {useParams} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../servicios/firebase/firebaseConfig";
import {InfinitySpin} from "react-loader-spinner";

const ItemsContainer = () => {
	const [items, setItems] = useState([]);
	const {categoriaId} = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const productsRef = categoriaId
			? query(collection(db, "products"), where(`categoria`, `==`, categoriaId))
			: collection(db, "products");

		getDocs(productsRef)
			.then((response) => {
				const productsAdapted = response.docs.map((doc) => {
					const data = doc.data();

					return {id: doc.id, ...data};
				});
				setItems(productsAdapted);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoriaId]);

	if (loading === true) {
		return (
			<div style={{display: "flex", justifyContent: "center"}}>
				<InfinitySpin width="300" color="black" />
			</div>
		);
	}

	return (
		<div>
			<h1>Products</h1>
			<div className="contenedor">
				<ItemList items={items} />
			</div>
		</div>
	);
};

export default ItemsContainer;
