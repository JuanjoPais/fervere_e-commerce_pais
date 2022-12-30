import "./carrito.css";
import {useContext} from "react";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";

const CartWidget = () => {
	const {getCantidad, getTotal} = useContext(alCarritoContext);

	const cantidadTotal = getCantidad();
	const totalAApagar = getTotal();

	return (
		<div className=" btnCarrito">
			<img
				src={process.env.PUBLIC_URL + "/images/beverage.png"}
				alt="carrito"
				className="iconoCarrito"
			/>
			<div className="contadorCarrito">
				<h4>{cantidadTotal} items</h4>
				<h4>${totalAApagar}</h4>
			</div>
		</div>
	);
};

export default CartWidget;
