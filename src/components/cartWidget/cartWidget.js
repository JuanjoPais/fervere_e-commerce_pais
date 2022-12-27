import "./carrito.css";
import {useContext} from "react";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
	const {getCantidad, getTotal} = useContext(alCarritoContext);

	const cantidadTotal = getCantidad();
	const totalAApagar = getTotal();

	return (
		<button className="btnCarrito">
			<img
				src={process.env.PUBLIC_URL + "/images/beverage.png"}
				alt="carrito"
				className="iconoCarrito"
			/>
			<Link to="/carrito" className="contadorCarrito"></Link>

			<h4>{cantidadTotal} items</h4>
			<h4>${totalAApagar}</h4>
		</button>
	);
};

export default CartWidget;
