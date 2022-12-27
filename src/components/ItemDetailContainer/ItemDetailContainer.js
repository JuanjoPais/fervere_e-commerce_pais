import {useState, useEffect} from "react";
import {getItemByID} from "../../asyncMock";
import {useParams} from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const params = useParams();

	useEffect(() => {
		getItemByID(params.itemId)
			.then((response) => {
				setItem(response);
			})
			.catch((error) => console.error(error))
			.finally(() => {
				setIsLoading(false);
			});
	}, [params.itemId]);

	if (isLoading === true) {
		return <h1>Cargando item...</h1>;
	}

	return <ItemDetail {...item} />;
};

export default ItemDetailContainer;
