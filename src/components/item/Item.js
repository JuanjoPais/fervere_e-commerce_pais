const Item = ({item}) => {
	return (
		<div>
			<h2>{item.nombre}</h2>
			<p>{item.descripcion}</p>
			<img src={item.url}></img>
		</div>
	);
};

export default Item;
