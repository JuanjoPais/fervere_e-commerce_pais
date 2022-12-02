const Item = ({item}) => {
	return (
		<div>
			<img src={item.url} alt="foto de birra"></img>
			<h2>{item.nombre}</h2>
			<p>{item.categoria}</p>
		</div>
	);
};

export default Item;
