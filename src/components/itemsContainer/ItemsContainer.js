import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {getItems} from "../../asyncMock";
import "./ItemsContainer.css";

const ItemsContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		getItems()
			.then((response) => {
				setItems(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="contenedor">
			<h1>Products</h1>
			<div>
				<ItemList items={items} />
			</div>
		</div>
	);
};

export default ItemsContainer;
