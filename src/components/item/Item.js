import {Link} from "react-router-dom";
import "./item.css";

const Item = ({item}) => {
	return (
		<div className="item">
			<Link to={`/item/${item.id}`}>
				<img className="fotoItem" src={item.url} alt="foto de birra"></img>
			</Link>
			<h2>{item.nombre}</h2>
			<p>{item.categoria}</p>
			<p>{item.descripcion}</p>
			<Link to={`/item/${item.id}`}>Ver detalle</Link>
		</div>
	);
};

export default Item;
