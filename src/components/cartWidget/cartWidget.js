import "./carrito.css";

const CartWidget = () => {
	return (
		<button className="btnCarrito">
			<img
				src={`./images/beverage.png`}
				alt="carrito"
				className="iconoCarrito"
			/>
			<div className="contadorCarrito">0</div>
		</button>
	);
};

export default CartWidget;
