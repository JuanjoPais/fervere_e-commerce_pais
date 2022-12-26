import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {getItems, getItemsByCategoria} from "../../asyncMock";
import "./ItemsContainer.css";
import {useParams} from "react-router-dom";

const ItemsContainer = () => {
	const [items, setItems] = useState([]);
	const {categoriaId} = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!categoriaId) {
			getItems()
				.then((response) => {
					setItems(response);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			getItemsByCategoria(categoriaId)
				.then((response) => {
					setItems(response);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [categoriaId]);

	if (loading === true) {
		return <h1>spinner</h1>;
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
