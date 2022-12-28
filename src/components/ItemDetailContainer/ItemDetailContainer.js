import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import {InfinitySpin} from "react-loader-spinner";
import {getProductById} from "../../servicios/firebase/firestore/products";
import swal from "sweetalert";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const {itemId} = useParams();

	useEffect(() => {
		setIsLoading(true);

		getProductById(itemId)
			.then((product) => {
				setItem(product);
			})
			.catch((error) => {
				swal("Hubo un error al cargar los items. Recargá la página por favor.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [itemId]);

	if (isLoading === true) {
		return (
			<div style={{display: "flex", justifyContent: "center"}}>
				<InfinitySpin width="300" color="black" />
			</div>
		);
	}

	return <ItemDetail {...item} />;
};

export default ItemDetailContainer;
