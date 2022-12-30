import {Link} from "react-router-dom";
import "./item.css";
import Fav from "../Fav/Fav";

const Item = ({item}) => {
	return (
		<div>
			<Fav />
			<div className="itemContainer">
				<div className="item">
					<Link to={`/item/${item.id}`}>
						<img className="fotoItem" src={item.url} alt="foto de birra"></img>
					</Link>
					<div>
						<h2>{item.nombre}</h2>
						<p>{item.categoria}</p>
						<p>{item.descripcion}</p>

						<Link to={`/item/${item.id}`}>Ver detalle</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
