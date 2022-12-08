import("./Fav.css");

const Fav = () => {
	const seleccionado = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.target.style.backgroundColor === "") {
			e.target.style.backgroundColor = "yellow";
		} else {
			e.target.style.backgroundColor = "";
		}
	};
	return (
		<img
			onClick={(e) => {
				seleccionado(e);
			}}
			style={{backgroundColor: ""}}
			className={"fav"}
			src={process.env.PUBLIC_URL + "/images/beerFav .png"}
			alt="favorito"
		/>
	);
};

export default Fav;
