import {Link} from "react-router-dom";
import "./LinksFinCompra.css";

const LinksFinCompra = () => {
	return (
		<div className="contenedorLinks">
			<Link className="LinkFinCompra" to="/carrito">
				Finalizar compra
			</Link>
			<Link className="LinkFinCompra" to="/">
				Seguir Comprando
			</Link>
		</div>
	);
};

export default LinksFinCompra;
