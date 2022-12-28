import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemsContainer.css";
import {useParams} from "react-router-dom";
import {InfinitySpin} from "react-loader-spinner";
import {getProducts} from "../../servicios/firebase/firestore/products";
import swal from "sweetalert";

const ItemsContainer = () => {
	const [items, setItems] = useState([]);
	const {categoriaId} = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		getProducts(categoriaId)
			.then((products) => {
				setItems(products);
			})
			.catch((error) => {
				swal("Hubo un error al cargar los items. Recargá la página por favor.");
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
