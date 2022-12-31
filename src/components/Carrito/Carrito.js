import {useContext} from "react";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";
import {Link} from "react-router-dom";
import "./Carrito.css";
import Button from "react-bootstrap/Button";

const Carrito = () => {
	const {alCarrito, getTotal, removeItem, clearAll} =
		useContext(alCarritoContext);

	const mostrarTotal = getTotal();

	return (
		<div>
			<div className=" mapeoCarrito cabezaCarrito">
				<div className="itemsCarrito itemsCabezaCarrito">
					<p>Foto</p>
					<p>Producto</p>

					<p>Precio</p>
					<p>Cantidad</p>
					<p>Subtotal</p>
					<p>Borrar?</p>
				</div>
			</div>
			{alCarrito.map((item) => {
				return (
					<div key={item.id} className="mapeoCarrito">
						<div className="itemsCarrito">
							<img className="imgCarrito" src={item.url} alt="foto" />
							<h3>{item.nombre}</h3>

							<p>$ {item.precio}</p>
							<p> {item.cantidad}</p>
							<p>{item.precio * item.cantidad}</p>

							<Button variant="dark" onClick={() => removeItem(item.id)}>
								Eliminar Item
							</Button>
						</div>
					</div>
				);
			})}

			<Button
				variant="dark"
				onClick={() => clearAll()}
				className="btnBorrarTodo"
			>
				Borrar todo
			</Button>

			<div className="total">
				<h1 className="textoTotal">Total a pagar:</h1>
				<h1 className="textoTotal"> $ {mostrarTotal} </h1>
			</div>

			<Link to={"/checkout"}>
				<Button variant="success">Terminar Orden</Button>
			</Link>
		</div>
	);
};

export default Carrito;
