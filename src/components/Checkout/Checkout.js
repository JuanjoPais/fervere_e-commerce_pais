import {useContext, useState} from "react";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";
import {
	collection,
	getDocs,
	query,
	where,
	documentId,
	writeBatch,
	addDoc,
} from "firebase/firestore";
import {db} from "../../servicios/firebase/firebaseConfig";
import {InfinitySpin} from "react-loader-spinner";
import {navigate, useNavigate} from "react-router-dom"; // eslint-disable-line
import {Link} from "react-router-dom";
import swal from "sweetalert";
import "./Checkout.css";
import {Button} from "react-bootstrap";

const Checkout = () => {
	const {alCarrito, getTotal, clearAll} = useContext(alCarritoContext);
	const [loading, setloading] = useState(false);
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleCreateOrder = async () => {
		setloading(true);

		try {
			const objOrder = {
				buyer: {
					name: name,
					email: email,
					phone: phone,
				},
				items: alCarrito,
				total: getTotal(),
			};

			const batch = writeBatch(db);

			const ids = alCarrito.map((prod) => prod.id);
			const productsRef = query(
				collection(db, "products"),
				where(documentId(), "in", ids)
			);
			const itemsAgregadosDesdeDB = await getDocs(productsRef);

			const {docs} = itemsAgregadosDesdeDB;

			const outOfStock = [];

			docs.forEach((doc) => {
				const dataDoc = doc.data();
				const stockDb = dataDoc.stock;
				const itemsAgregadosAlCarrito = alCarrito.find(
					(prod) => prod.id === doc.id
				);
				const itemCantidad = itemsAgregadosAlCarrito?.cantidad;

				if (stockDb >= itemCantidad) {
					batch.update(doc.ref, {stock: stockDb - itemCantidad});
				} else {
					outOfStock.push({id: doc.id, ...dataDoc});
				}
			});

			if (outOfStock.length === 0) {
				await batch.commit();

				const orderRef = collection(db, "orders");

				const orderAdded = await addDoc(orderRef, objOrder);

				console.log(orderAdded.id);

				clearAll();
				swal(
					`Tu número de orden es${orderAdded.id}. En unos instantes te llegará el detalle a tu correo. Serás redirigido al Home en 5 segundos. Muchas gracias por tu compra =)`
				);
				setTimeout(() => {
					navigate("/");
				}, 5000);
			} else {
				swal("No hay stock de ese producto");
			}
		} catch (error) {
			console.error(error);
			swal("no se puede asegurar el stock de este pedido");
		} finally {
			setloading(false);
		}
	};

	if (loading) {
		return (
			<div style={{display: "flex", justifyContent: "center"}}>
				<InfinitySpin width="300" color="black" />
				<h2>Generando orden</h2>
			</div>
		);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		handleCreateOrder();
	};

	return (
		<div className="contenedorCheckout">
			<h1>Checkout</h1>
			<div className="divCheckout">
				<div>
					<img
						src={process.env.PUBLIC_URL + "/images/moe.png"}
						alt="fotoBarney"
						className="fotoMoe"
					></img>
				</div>
				<form onSubmit={handleSubmit} className="formCheckout">
					Ingresá tu nombre
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					Ingresá tu e-mail
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					Ingresá tu teléfono
					<input
						type="text"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						required
					/>
					<Button variant="dark" type="submit">
						Confirmar Orden
					</Button>
				</form>
			</div>

			<Link to={"/"}>
				<Button variant="dark">Volver a Home</Button>
			</Link>
		</div>
	);
};

export default Checkout;
