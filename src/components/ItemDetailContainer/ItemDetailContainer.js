import {useState, useEffect} from "react";
import {getItemByID} from "../../asyncMock";
import {useParams} from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetailContainer.css";

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

	const handleOnAdd = (cantidad) => {
		alert(`Se agregaron al carrito ` + cantidad + ` unidades.`);
	};

	return (
		<div>
			<h1>Detalle del Item</h1>
			<div className="cajaDetalle">
				<img
					className="fotoDetalle"
					src={item.url}
					alt="detalle del producto"
				></img>
				<div className="datosDetalle">
					<h3>{item.nombre}</h3>
					<p>{item.categoria}</p>
					<p>{item.descripcion}</p>
					<ItemCount initial={0} stock={10} onAdd={handleOnAdd} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetailContainer;
