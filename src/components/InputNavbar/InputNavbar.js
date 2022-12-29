import {useState, useEffect} from "react";
import "./InputNavbar.css";
import ShowOrder from "../ShowOrder/ShowOrder";
import {getOrderById} from "../../servicios/firebase/firestore/orders";
import swal from "sweetalert";
import {InfinitySpin} from "react-loader-spinner";

const InputNavbar = () => {
	const [orderQuery, setOrderQuery] = useState("");
	const [order, setOrder] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		getOrderById(orderQuery)
			.then((order) => {
				setOrder(order);
			})
			.catch((error) => {
				console.error(error);
				swal("Hubo un error al cargar los items. Recargá la página por favor.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [orderQuery]);

	if (isLoading === true) {
		return (
			<div style={{display: "flex", justifyContent: "center"}}>
				<InfinitySpin width="300" color="black" />
			</div>
		);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div className="input">
				<form onSubmit={handleSubmit}>
					<p>Ingresá tu número de Orden</p>
					<input
						value={orderQuery}
						onChange={(e) => setOrderQuery(e.target.value)}
					/>
					<button type="submit">Buscar</button>
				</form>
			</div>
			<div>
				<ShowOrder {...order} />
			</div>
		</div>
	);
};

export default InputNavbar;
