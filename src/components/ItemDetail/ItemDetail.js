import LinksFinCompra from "../LinksFinCompra/LinksFinCompra";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";
import ItemCount from "../itemCount/ItemCount";
import {useState, useContext} from "react";

const ItemDetail = ({
	id,
	stock,
	descripcion,
	nombre,
	precio,
	url,
	categoria,
}) => {
	const [cantidadAAgregar, setCantidadAAgregar] = useState(0);
	const {agregarACarrito} = useContext(alCarritoContext);

	const handleOnAdd = (cantidad) => {
		alert(`Se agregaron al carrito ` + cantidad + ` unidades.`);
		setCantidadAAgregar(cantidad);
		agregarACarrito({id, url, precio, nombre, cantidad});
	};

	return (
		<div>
			<h1>Detalle del Item</h1>
			<div className="cajaDetalle">
				<img className="fotoDetalle" src={url} alt="detalle del producto"></img>
				<div className="datosDetalle">
					<h3>{nombre}</h3>
					<p>{categoria}</p>
					<p>$ {precio}</p>
					<p>{descripcion}</p>

					{cantidadAAgregar === 0 ? (
						<ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
					) : (
						<LinksFinCompra />
					)}
				</div>
			</div>
		</div>
	);
};
export default ItemDetail;
