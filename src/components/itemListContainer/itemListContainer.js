import "./itemListContainer.css";
import ItemsContainer from "../itemsContainer/ItemsContainer";

const ItemListContainer = ({greeting}) => {
	return (
		<div className="grillaItems">
			<h1 className="title">{greeting}</h1>

			<section className="grillaItems">
				<ItemsContainer />
			</section>
		</div>
	);
};

export default ItemListContainer;
