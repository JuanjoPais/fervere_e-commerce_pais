import {Link} from "react-router-dom";
import "./item.css";

const Item = ({item}) => {
	return (
		<div className="item">
			<img className="fotoDetalle" src={item.url} alt="foto de birra"></img>
			<h2>{item.nombre}</h2>
			<p>{item.categoria}</p>
			<p>{item.descripcion}</p>
			<Link to={`/item/${item.id}`}>Ver detalle</Link>
		</div>
	);
};

export default Item;
