import "./CartWidget.css";
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
			{cantidadTotal && (
				<div className="textoCarrito">
					<div className="items">
						<p>{cantidadTotal}</p>
						<p>items</p>
					</div>
					<p>$ {totalAApagar}</p>
				</div>
			)}
		</div>
	);
};

export default CartWidget;
