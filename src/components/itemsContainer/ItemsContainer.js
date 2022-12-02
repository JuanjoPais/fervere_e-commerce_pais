import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {getItems} from "../../asyncMock";

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
		<div>
			<h1>Products</h1>
			<ItemList items={items} />
		</div>
	);
};

export default ItemsContainer;
