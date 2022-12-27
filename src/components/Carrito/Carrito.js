import {useContext} from "react";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";
import {Link} from "react-router-dom";

const Carrito = () => {
	const {alCarrito, getTotal, removeItem, clearAll} =
		useContext(alCarritoContext);

	const mostrarTotal = getTotal();

	return (
		<div>
			{alCarrito.map((item) => {
				return (
					<div key={item.id}>
						<h3>{item.nombre}</h3>
						<p>{item.categoria}</p>
						<p>$ {item.precio}</p>
						<p> {item.cantidad}</p>
						<p>Sub total: {item.precio * item.cantidad}</p>
						<img src={item.url} alt="foto" />
						<button onClick={() => removeItem(item.id)}>Eliminar Item</button>
					</div>
				);
			})}

			<button onClick={() => clearAll()}>Borrar todo</button>

			<h1>Total a pagar: $ {mostrarTotal} </h1>

			<Link to={"/checkout"}>Terminar Orden</Link>
		</div>
	);
};

export default Carrito;
