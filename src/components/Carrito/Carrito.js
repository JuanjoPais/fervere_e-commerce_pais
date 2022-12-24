import {useContext} from "react";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";

const Carrito = () => {
	const {alCarrito} = useContext(alCarritoContext);

	return (
		<div>
			{alCarrito.map((item) => {
				return (
					<div>
						<h3>{item.nombre}</h3>
						<p>{item.categoria}</p>
						<p>$ {item.precio}</p>
						<img src={item.url} alt="foto" />
					</div>
				);
			})}
		</div>
	);
};

export default Carrito;
