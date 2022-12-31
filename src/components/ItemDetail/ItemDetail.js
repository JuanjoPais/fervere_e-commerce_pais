import LinksFinCompra from "../LinksFinCompra/LinksFinCompra";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";
import ItemCount from "../itemCount/ItemCount";
import {useState, useContext} from "react";
import swal from "sweetalert";

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
		swal(`Se agregaron al carrito ` + cantidad + ` unidades.`);
		setCantidadAAgregar(cantidad);
		agregarACarrito({id, url, precio, nombre, cantidad});
	};

	return (
		<div>
			<div className="cajaDetalle">
				<img className="fotoDetalle" src={url} alt="detalle del producto"></img>
				<div className="datosDetalle">
					<h3 className="tituloItem">{nombre}</h3>
					<div className="datosItem">
						<p>{categoria}</p>
						<p>$ {precio}</p>
						<p>{descripcion}</p>
					</div>

					{stock === 0 ? (
						<h2>Producto sin stock</h2>
					) : cantidadAAgregar === 0 ? (
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
