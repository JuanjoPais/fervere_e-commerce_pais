import "./itemListContainer.css";
import ItemsContainer from "../itemsContainer/ItemsContainer";
import InputNavbar from "../InputNavbar/InputNavbar";

const ItemListContainer = ({greeting}) => {
	return (
		<div className="grillaItems">
			<h1 className="main">{greeting}</h1>
			<InputNavbar />
			<section className="grillaItems">
				<ItemsContainer />
			</section>
		</div>
	);
};

export default ItemListContainer;
