import "./carrito.css";
import {useContext} from "react";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
	return (
		<button className="btnCarrito">
			<img
				src={process.env.PUBLIC_URL + "/images/beverage.png"}
				alt="carrito"
				className="iconoCarrito"
			/>
			<Link to="/carrito" className="contadorCarrito">
				0
			</Link>
		</button>
	);
};

export default CartWidget;
