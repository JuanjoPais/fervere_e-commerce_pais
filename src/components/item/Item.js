import {Link} from "react-router-dom";
import "./item.css";
import Fav from "../Fav/Fav";
import Button from "react-bootstrap/Button";

const Item = ({item}) => {
	return (
		<div className="mainContainerItems">
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

						<Link to={`/item/${item.id}`}>
							<Button variant="dark">Ver detalle</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
